import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, useTheme } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
import { useCheckAuth } from '@alkuip/core';
import { css } from '@emotion/react';
import { LoginPage as DefaultLoginForm } from './LoginPage';

const PREFIX = 'ALKIP Login';
export const LoginClass = {
    card: `${PREFIX}-card`,
    avatar: `${PREFIX}-avatar`,
    icon: `${PREFIX}-icon`,
};
const root = (theme,LoginClasses)=>css({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    height: '1px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage:
        'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',

    [`& .${LoginClasses.card}`]: {
        minWidth: 300,
        marginTop: '6em',
    },
    [`& .${LoginClasses.avatar}`]: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    [`& .${LoginClasses.icon}`]: {
        backgroundColor: `${ theme.palette.secondary[500]}`,
    }
})
/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider.login()` method. Redirects to the root page (/)
 * upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
export const Login = (props) => {
    const { children, backgroundImage, ...rest } = props;
    const theme = useTheme();
    const containerRef = useRef();
    let backgroundImageLoaded = false;
    const checkAuth = useCheckAuth();
    const navigate = useNavigate();
    useEffect(() => {
        checkAuth({}, false)
            .then(() => {
                // already authenticated, redirect to the home page
                navigate('/');
            })
            .catch(() => {
                // not authenticated, stay on the login page
            });
    }, [checkAuth, navigate]);
   
    const updateBackgroundImage = () => {
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
            backgroundImageLoaded = true;
        }
    };

    // Load background image asynchronously to speed up time to interactive
    const lazyLoadBackgroundImage = () => {
        if (backgroundImage) {
            const img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };

    useEffect(() => {
        if (!backgroundImageLoaded) {
            lazyLoadBackgroundImage();
        }
    });
    return (
        <div {...rest} ref={containerRef}>
            <Card>
                <div>
                    <Avatar>
                        <LockIcon />
                    </Avatar>
                </div>
                {children}
            </Card>
        </div>
    );
};



Login.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
};

Login.defaultProps = {
    children: <DefaultLoginForm />,
};