import { UserMenuContext } from './UserMenuContext';

/**
 * A React context provider that provides access to the user menu context.
 * @param props
 * @param {ReactNode} props.children
 * @param {UserMenuContextValue} props.value The user menu context
 */
export const UserMenuContextProvider = ({ children, value }) => (
    <UserMenuContext.Provider value={value}>
        {children}
    </UserMenuContext.Provider>
);