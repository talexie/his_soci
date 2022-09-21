import { Layout } from './Layout';
import { AppBar } from './AppBar';
import { SidebarNav as Menu } from './toolbars';

export const CustomLayout = (props) => {
    return <Layout {...props} appBar={AppBar} menu={Menu} />;
};