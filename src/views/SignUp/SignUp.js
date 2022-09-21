import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { css } from '@emotion/react';
import {
  Grid,
  Button,
  IconButton,
  TextField,
  Link,
  FormHelperText,
  Checkbox,
  Typography,
  useTheme
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {  useConfig } from '@alkuip/core';

const schema = {
  firstName: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  surname: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      maximum: 32
    }
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      maximum: 64
    }
  },
  policy: {
    presence: { allowEmpty: false, message: 'is required' },
    inclusion: {
      within: [true],
      message: "^You must agree to terms and conditions"
    }
  }
};

  const root=theme=>css({
    backgroundColor: theme.palette.background.default,
    height: '100%'
  });
  const grid=css({
    height: '100%'
  });
  const login=css({
    marginTop: '160px'
  });

  const content=css({
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  });
  const contentHeader=theme=>css({
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  });

  const contentBody=theme=>css({
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xl')]: {
      justifyContent: 'center'
    }
  });
  const form=theme=>css({
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('xl')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  });
  const titleCss=theme=>css({
    marginTop: theme.spacing(3)
  });
  const textField=theme=>css({
    marginTop: theme.spacing(2)
  });
  const policy=theme=>css({
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  });
  const policyCheckbox=theme=>css({
    marginLeft: '-14px'
  });
  const signUpButton=theme=>css({
    margin: theme.spacing(2, 0)
  });

const SignUp = props => {
  const { title } = props;
  const { integration } = useConfig();
  const navigate = useNavigate();
  const [isSent,setIsSent] = useState(false);

  const theme= useTheme();
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);
    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleBack = () => {
    navigate.goBack();
  };

  const handleSignUp = async event => {
    event.preventDefault();
    const invite = await fetch(`${integration}/api/user/invite`,{
      method:'POST',
      mode:'no-cors',
      body: JSON.stringify(formState?.values)
    });
    setIsSent(true);
  };

  const hasError = field =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div css={root(theme)}>
      <Grid
        css={grid}
        container
      >
        <Grid
          css={content}
          item
          lg={7}
          xs={12}
        >
          <div css={content}>
            <div css={contentHeader(theme)}>
              <IconButton onClick={handleBack} size="large">
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div css={contentBody(theme)}> 
              {
                !isSent?
                  (
                  <form
                    css={form(theme)}
                    onSubmit={handleSignUp}
                  >
                    <Typography
                      css={titleCss(theme)}
                      variant="h2"
                    >
                      Create new account
                    </Typography>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                    >
                      Use your email to create new account
                    </Typography>
                    <TextField
                      css={textField(theme)}
                      error={hasError('firstName')}
                      fullWidth
                      helperText={
                        hasError('firstName') ? formState.errors.firstName[0] : null
                      }
                      label="First name"
                      name="firstName"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.firstName || ''}
                      variant="outlined"
                    />
                    <TextField
                      css={textField(theme)}
                      error={hasError('surname')}
                      fullWidth
                      helperText={
                        hasError('surname') ? formState.errors.surname[0] : null
                      }
                      label="Surname"
                      name="surname"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.surname || ''}
                      variant="outlined"
                    />
                    <TextField
                      css={textField(theme)}
                      error={hasError('email')}
                      fullWidth
                      helperText={
                        hasError('email') ? formState.errors.email[0] : null
                      }
                      label="Email address"
                      name="email"
                      onChange={handleChange}
                      type="text"
                      value={formState.values.email || ''}
                      variant="outlined"
                    />
                    <div css={policy(theme)}>
                      <Checkbox
                        checked={formState.values.policy || false}
                        css={policyCheckbox(theme)}
                        color="primary"
                        name="policy"
                        onChange={handleChange}
                      />
                      <Typography
                        css={policy(theme)}
                        color="textSecondary"
                        variant="body1"
                      >
                        I have read the{' '}
                        <Link
                          color="primary"
                          component={RouterLink}
                          to="#"
                          underline="always"
                          variant="h6"
                        >
                          Terms and Conditions
                        </Link>
                      </Typography>
                    </div>
                    {hasError('policy') && (
                      <FormHelperText error>
                        {formState.errors.policy[0]}
                      </FormHelperText>
                    )}
                    <Button
                      css={signUpButton(theme)}
                      color="primary"
                      disabled={!formState.isValid}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign up now
                    </Button>
                  </form>
                  ):
                  (
                    <div>
                        <Typography
                          color="textSecondary"
                          variant="body1"
                        >
                        Email has been sent to your email. Please login to your email and verify your account.
                      </Typography>
                    </div>
                  )
                }
                  
              
            </div>
          </div>
        </Grid>
        <Grid 
          item 
          lg={3}
          xs={12}
          css = { login }
        >
          <Typography
              color="textSecondary"
              variant="body1"
            >
            Have an account?{' '}
            <Link
              component={RouterLink}
              to="/login"
              variant="h6"
            >
              Sign in
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.object
};

export default SignUp;
