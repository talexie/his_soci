import { createElement } from 'react';
import { CoreAdminUI } from './CoreAdminUi';

import {
    Layout as DefaultLayout,
    LoadingPage,
    NotFound,
    Notification,
} from './layout';
import { Login } from './auth';

export const AdminUI = ({ notification, ...props }) => (
    <>
        <CoreAdminUI {...props} />
        {createElement(notification)}
    </>
);

AdminUI.defaultProps = {
    layout: DefaultLayout,
    catchAll: NotFound,
    loading: LoadingPage,
    loginPage: Login,
    notification: Notification,
};
