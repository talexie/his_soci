import { isValidElement, createElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import { CoreAdminRoutes } from './CoreAdminRoutes';


const DefaultLayout = ({ children }) => <>{children}</>;


export const CoreAdminUI = (props) => {
    const {
        catchAll = Noop,
        children,
        dashboard,
        disableTelemetry = false,
        layout = DefaultLayout,
        loading = Noop,
        loginPage: LoginPage = false,
        registerPage: RegisterPage = false,
        title = 'ALKIP Platform',
        requireAuth = false,
    } = props;
    return (
        <Routes>
            {
                LoginPage !== false && LoginPage !== true ? (
                    <Route 
                        path="/login" 
                        element={createOrGetElement(LoginPage)} 
                    />
                ) : null
            }
            {
                RegisterPage !== false && RegisterPage !== true ? (
                    <Route 
                        path="/signup" 
                        element={createOrGetElement(RegisterPage)} 
                    />
                ) : null
            }
            <Route
                path="/*"
                element={
                    <CoreAdminRoutes
                        catchAll={catchAll}
                        dashboard={dashboard}
                        layout={layout}
                        loading={loading}
                        requireAuth={requireAuth}
                        title={title}
                    >
                        {children}
                        
                    </CoreAdminRoutes>
                }
            />
        </Routes>
    );
};

const createOrGetElement = el => (isValidElement(el) ? el : createElement(el));

const Noop = () => null;