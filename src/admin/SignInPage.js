import { useAuthState } from '@alkuip/core';
import { SignUp } from '../views';
import { CircularProgress } from '@mui/material';

export const SignInPage = (props) => {
    const { loading, authenticated } = useAuthState();
    if (loading) {
        
        return (<CircularProgress/>);
    }
    if (authenticated) {
       console.log("authenticated")
    }
    return (<SignUp {...props} />);
};