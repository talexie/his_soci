import { CoreAdminContext } from './CoreAdminContext';
import { CoreAdminUI } from './CoreAdminUi';

export const CoreAdmin = (props) => {
    const {
        authProvider,
        children,
        loading,
        loginPage,
        registerPage,
        title,
        basename,
        ready,
        requireAuth,
        layout,
        dashboard,
        catchAll
    } = props;
    return (
        <CoreAdminContext
            authProvider={authProvider}
            basename={basename}
        >
            <CoreAdminUI
                title={title}
                loading={loading}
                loginPage={loginPage}
                registerPage ={ registerPage }
                layout={layout}
                requireAuth={requireAuth}
                ready={ready}
                dashboard={dashboard}
                catchAll={catchAll}
            >
                {children}
            </CoreAdminUI>
        </CoreAdminContext>
    );
};
