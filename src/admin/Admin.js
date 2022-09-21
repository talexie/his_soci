import { AdminContext } from './AdminContext';
import { AdminUI}  from './AdminUi';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  ConfigContext,
} from '@alkuip/core';

export const Admin = (props) => {
    const {
        authProvider,
        children,
        loginPage,
        registerPage,
        logoutButton,
        title = 'ALKIP Platform Admin',
        store,
        theme,
        basename,
        catchAll,
        dashboard,
        notification,
        requireAuth,
        ready,
        layout,
        apiConfig
    } = props;
    const configCtx = {
        ...apiConfig,
        integration: apiConfig?.api,
        baseUrl: apiConfig?.url,
        dataStore: apiConfig?.dataStore,
        headers: {
          ...apiConfig?.headers
        },
        defaultPage: apiConfig?.defaultPage,
        standalone: apiConfig?.standalone
    }
    return (
        <ConfigContext.Provider value={configCtx}>
            <AdminContext
                authProvider={authProvider}
                basename={basename}
                store={store}
                theme={theme}
                apiConfig = { apiConfig }
            >
                <AdminUI
                    title={title}
                    loginPage={loginPage}
                    registerPage = { registerPage }
                    logout={authProvider ? logoutButton : undefined}
                    layout={layout}
                    dashboard={dashboard}
                    catchAll={catchAll}
                    notification={notification}
                    requireAuth={requireAuth}
                    ready={ready}
                    apiConfig = { apiConfig }
                    
                >
                    {children}
                </AdminUI>
            </AdminContext>
        </ConfigContext.Provider>
    );
};

export default Admin;