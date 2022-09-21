import { createContext } from 'react';

export const UserMenuContextValue = {
    /**
     * Closes the user menu
     * @see UserMenu
     */
    onClose: () => undefined
};
/**
 * This context provides access to a function for closing the user menu.
 *
 * @example
 * import { Logout, MenuItemLink, UserMenu, useUserMenu } from '../admin';
 *
 * const ConfigurationMenu = () => {
 *     const { onClose } = useUserMenu();
 *     return (
 *         <MenuItemLink
 *             to="/configuration"
 *             primaryText="pos.configuration"
 *             leftIcon={<SettingsIcon />}
 *             sidebarIsOpen
 *             onClick={onClose}
 *         />
 *     );
 * };
 *
 * export const MyUserMenu = () => (
 *     <UserMenu>
 *         <ConfigurationMenu />
 *         <Logout />
 *     </UserMenu>
 * );
 */
export const UserMenuContext = createContext(UserMenuContextValue);

