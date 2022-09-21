import { 
    AuthContext,
    StoreContextProvider, 
    memoryStore,
    NotificationContextProvider 
} from '@alkuip/core';
import PropTypes from 'prop-types';
import AdminApp from './AdminApp';

export const CoreAdminContext = (props) => {
    const {
        authProvider,
        store,
        children
    } = props;
    // Dispatch here and set appName
    return (
        <AuthContext.Provider value={authProvider}>
            <StoreContextProvider value={store}>
                <NotificationContextProvider>
                    <AdminApp>
                        {children}
                    </AdminApp>
                </NotificationContextProvider>
            </StoreContextProvider>
        </AuthContext.Provider>
    );
};

CoreAdminContext.defaultProps = {
    store: memoryStore(),
};
CoreAdminContext.propTypes= {
    basename: PropTypes.string
}