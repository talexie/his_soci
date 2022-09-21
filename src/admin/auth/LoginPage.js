import { useReducer } from 'react';
import { css  } from '@emotion/react';
import { Button, TextField, Paper, Typography, Grid,CardContent, CircularProgress, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    useLogin,
    useNotify,
    useSafeSetState,
    useConfig
} from '@alkuip/core';

const content= css({
  width: '100%',
  height: '100%',
  padding: '32px',
  opacity: 0.8,
  /*background:
  'url(https://uac.go.ug/images/uac30-png.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',*/
});
const root = css`
 margin: 15% auto auto 30%;
`
const loginCss =css({
    width: '20%',
    padding: '16px',
    opacity:1.0,
    backgroundColor: '#ffffff'
});
const header =css({
  padding: '16px',
});
const signUpCss= css({
    padding: '16px'
})
const footer =css({
  padding: '16px',
});
export const LoginPage =(props)=>{
    const { standalone, baseUrl,dataStore,integration,defaultPage } = useConfig();
    //Set redirectTo to default config page
    const { redirectTo } = props;
    const [loading, setLoading] = useSafeSetState(false);
    const theme = useTheme();
    const login = useLogin();
    const notify = useNotify();
    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            url: baseUrl,
            username: '',
            password: '',
            dsUrl: dataStore,
            api: integration,
            standalone: standalone,
            defaultPage: defaultPage
        }
    );
    const handleInput = evt => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });
    };
    const submit = (_event) => {
        _event.preventDefault();
        setLoading(true);
        login(formInput, redirectTo)
            .then(() => {
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                notify("Invalid username or password");
            });
    };
    return (
        <Paper 
        css={ content }
        >
        <Grid css={ root } container alignItems='center'>
            <Grid item>
                <div css={ header }>
                    <Typography variant='h5' component='h3'>
                    { standalone?'Login to Platform':''}           
                    </Typography>
                </div>
            </Grid>
            <Grid item container >
                <form  css={ loginCss } autoComplete='off' noValidate >
                    {
                        standalone?(
                            <>
                                <Grid item>
                                    <TextField
                                        label='UserName'
                                        id='username'
                                        required
                                        name='username'
                                        helperText='Enter username'
                                        onChange={ handleInput }
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label='Password'
                                        id='password'
                                        name='password'
                                        type='password'
                                        required
                                        helperText='Enter password'
                                        onChange={ handleInput }
                                    />
                                </Grid>
                            </>
                        ):null
                    }
                    <Grid item>
                        <div css = { signUpCss }>
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            disabled = { loading }
                            onClick={ submit }
                            
                        >
                            {
                            loading ? (
                                <CircularProgress
                                    
                                    size={19}
                                    thickness={3}
                                />
                            ) : (
                                standalone?'Sign In':'Proceed' 
                            )}
                            
                        </Button>
                        </div>
                       
                    </Grid>
                </form>
            </Grid>
            <Grid item>
                <div css = { signUpCss }>
                    <Link to="/signup">Create Account</Link>
                </div>
            </Grid>
            <Grid item container>
                <div css={ footer }>
                Powered by ALKIP Platform
                </div>                        
            </Grid>
        </Grid>
        </Paper>
    );
}

LoginPage.propTypes = {
    redirectTo: PropTypes.string,
}