import { memo, useState, useEffect, useReducer } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { 
    RouteWithLayout,
    Minimal as MinimalLayout
  } from '@alkuip/components';
import {
    Main as MainLayout
} from './layout';

import { 
    WithPermissions, 
    useCheckAuth,
    useCreatePath,
    useTimeout,
    Authenticated,
    useFetchApi,
    useConfig,
    UiMenuSchemaContext
} from '@alkuip/core';
import { routes as resources } from '../Routes';
import { useAppUiSchemaReducer, getFhirSchema } from './util';
import * as qs from 'qs';

export const CoreAdminRoutes = memo((props ) => {
    const oneSecondHasPassed = useTimeout(1000);
    //useScrollToTop();
    const createPath = useCreatePath();
    const {
        layout: Layout,
        catchAll: CatchAll,
        dashboard,
        loading: LoadingPage,
        requireAuth,
        title,
    } = props;
    const { dataStore,headers,apps } = useConfig();
    const [state,dispatch] = useReducer(useAppUiSchemaReducer,{
        app:undefined
    });
    const { app, query } = state;
    const [canRender, setCanRender] = useState(!requireAuth);
    const checkAuth = useCheckAuth();

    const [schema,setSchema] = useState(undefined);
    const [uiApp,setUiApp] = useState(undefined);
    const [appQuery,setAppQuery] = useState(undefined);
    const [uiSchema,setUiSchema] = useState([]);

    const { data:uischemas } = useFetchApi(uiApp?.appId?`${dataStore}/uischemas?appId=${uiApp?.appId}`:null,headers,false);
    const { data:schemas } = useFetchApi((appQuery?.type && uiApp?.appId)?`${dataStore}/schemas?${ qs.stringify(appQuery) }`:null,headers,false);

    useEffect(()=>{
        if(schemas){
            if(appQuery?.type ==='fhir'){
                const fhirSchema = getFhirSchema(schemas.data,appQuery?.type,appQuery?.version,['Account']);
                setSchema(fhirSchema);
            }
            setSchema(schemas?.data);
        }
        if(uischemas){
            setUiSchema(uischemas?.data);
        }
    },[uischemas,schemas,appQuery?.type,appQuery?.version])

    useEffect(() => {
        if (requireAuth) {
            checkAuth()
                .then(() => {
                    setCanRender(true);
                })
                .catch(() => {});
        }
    }, [checkAuth, requireAuth]);
    const defaultApp = apps?.[0];
    useEffect(()=>{
        if(app){
            setUiApp(t=>app);
            setAppQuery(t=>query);
        }
        else{
            setUiApp(t=>defaultApp);
            setAppQuery(t=>{
                if(defaultApp?.fhirVersion && defaultApp?.enableFhir){
                    return {
                        type: 'fhir',
                        version: defaultApp?.fhirVersion || "4.3.0"
                    }
                }
                else{
                    return {
                        type: defaultApp?.appId
                    };
                }
            });
        }
        return ()=> false;
    },[app,defaultApp,defaultApp?.fhirVersion,query,defaultApp?.appId,defaultApp?.enableFhir]);
    if (!canRender) {
        return (
            <Routes>
                {oneSecondHasPassed ? (
                    <Route path="*" element={<LoadingPage />} />
                ) : (
                    <Route path="*" element={null} />
                )}
            </Routes>
        );
    }
    return (
        <Routes>
            {/*
                Render the custom routes that were outside the child function.
            */}
            <Route
                path="/*"
                element={
                    <Authenticated>
                        <UiMenuSchemaContext.Provider value ={
                            {
                                uischemas: uiSchema,
                                schemas: schema,
                                app: state?.app
                            }
                        }>
                            <Layout dashboard={dashboard} title={title} resources={ resources }>
                                <Routes>
                                    { resources?.[0]?.children?.map((resource,i) => (
                                        <Route
                                        key={`route-${resource.path}-${i}`}
                                            path={`${resource.path}`}
                                            element={
                                                resource.layout === 'minimal'?
                                                (
                                                    
                                                        <MinimalLayout 
                                                            
                                                            routes={ resources }
                                                            dispatch={ dispatch }
                                                        >
                                                            <RouteWithLayout
                                                                route = { resource }
                                                                component = { resource?.component??(<div></div>) }
                                                            />
                                                        </MinimalLayout>
                                                
                                                ):
                                                (     
                                                                                        
                                                        <MainLayout 
                                                            routes={ resources }
                                                            dispatch = { dispatch } 
                                                        >
                                                            <RouteWithLayout
                                                                route = { resource }
                                                                component = { resource?.component??(<div></div>) }
                                                            />
                                                        </MainLayout>
                                                    
                                            
                                                )
                                            }
                                        />
                                    ))}
                                    <Route
                                        path="/"
                                        element={
                                            dashboard ? (
                                                <WithPermissions
                                                    authParams={defaultAuthParams}
                                                    component={dashboard}
                                                />
                                            ) : resources.length > 0 ? (
                                                <Navigate
                                                    to={
                                                        createPath({
                                                        resource: '/dashboard',
                                                        type: 'list',
                                                    })}
                                                />
                                            ) : null
                                        }
                                    />
                                    <Route
                                        path="*"
                                        element={<CatchAll title={title} />}
                                    />
                                </Routes>
                            </Layout>
                        </UiMenuSchemaContext.Provider>
                    </Authenticated>
                }
            />
        </Routes>
    );
});

CoreAdminRoutes.defaultProps = {
    customRoutes: [],
};

const defaultAuthParams = { 
    route: 'dashboard' 
};
