import {useState} from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';

import {Avatar, Button, Card, CardActions, CircularProgress,} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import {Form, HttpError, required, TextInput, useLogin, useNotify, useTranslate,} from 'react-admin';

import Box from '@mui/material/Box';
const isDev = import.meta.env.DEV;
const API_URL = isDev ? import.meta.env.VITE_DEV_REST_URL : import.meta.env.VITE_PROD_REST_URL;

const Login = () => {
    const [loading, setLoading] = useState(false);
    const translate = useTranslate();
    const [register, setRegister] = useState(false);
    const notify = useNotify();
    const login = useLogin();
    const location = useLocation();
    const [registerValues, setRegisterValues] = useState({} as FormValues);

    const handleSubmit = (auth: FormValues) => {
        setLoading(true);
        login(
            auth,
            location.state ? (location.state as any).nextPathname : '/'
        ).catch((error: Error) => {
            setLoading(false);
            notify(
                typeof error === 'string'
                    ? error
                    : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                {
                    type: 'error',
                    messageArgs: {
                        _:
                            typeof error === 'string'
                                ? error
                                : error && error.message
                                    ? error.message
                                    : undefined,
                    },
                }
            );
        });
    };

    const handleSubmitRegister = () => {
        console.log('registerValues', registerValues)
        const request = new Request(`${API_URL}/users`, {
            method: 'POST',
            body: JSON.stringify(registerValues),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })

        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new HttpError(response.statusText, response.status, response.json());
                }
                return response.json();
            })
            .then(data => {
                notify('ra.auth.auth_check_error');
                localStorage.setItem('user', JSON.stringify(data));
                setRegister(false);

            })
            .catch((error: Error) => {
                notify(typeof error === 'string'
                    ? error
                    : typeof error === 'undefined' || !error.message
                        ? 'ra.auth.sign_in_error'
                        : error.message,
                    {
                        type: 'error',
                        messageArgs: {
                            _:
                                typeof error === 'string'
                                    ? error
                                    : error && error.message
                                        ? error.message
                                        : undefined,
                        },
                    }
                );
                throw new HttpError('Network error', 500);
            });
    }

    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    background:
                        'url(https://source.unsplash.com/featured/1600x900)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <Card sx={{minWidth: 300, marginTop: '6em'}}>
                    <Box
                        sx={{
                            margin: '1em',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Avatar sx={{bgcolor: 'secondary.main'}}>
                            <LockIcon/>
                        </Avatar>
                    </Box>
                    <Box
                        sx={{
                            marginTop: '1em',
                            display: 'flex',
                            justifyContent: 'center',
                            color: theme => theme.palette.grey[500],
                        }}
                    >
                        Hint: janedoe/password
                    </Box>
                    <Box sx={{padding: '0 1em 1em 1em'}}>
                        <Box sx={{marginTop: '1em'}}>
                            <TextInput
                                autoFocus
                                source="username"
                                label={translate('ra.auth.username')}
                                disabled={loading}
                                onChange={(e) => {
                                    setRegisterValues({...registerValues, username: e.target.value});
                                }}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{marginTop: '1em'}} hidden={!register}>
                            <TextInput
                                source="email"
                                label={translate('resources.users.fields.email')}
                                type="email"
                                disabled={loading}
                                onChange={(e) => {
                                    // @ts-ignore
                                    setRegisterValues({...registerValues, email: e.target.value});
                                }}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{marginTop: '1em'}}>
                            <TextInput
                                source="password"
                                label={translate('ra.auth.password')}
                                type="password"
                                disabled={loading}
                                onChange={(e) => {
                                    setRegisterValues({...registerValues, password: e.target.value});
                                }}
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{marginTop: '1em'}} hidden={!register}>
                            <TextInput
                                source="password"
                                label={translate('resources.users.form.passwordConfirm')}
                                type="password"
                                disabled={loading}
                                validate={required()}
                                fullWidth
                            />
                        </Box>

                    </Box>
                    <CardActions sx={{padding: '0 1em 1em 1em'}}>
                        {!register && <><Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={loading}
                            fullWidth
                        >
                            {loading && (
                                <CircularProgress size={25} thickness={2}/>
                            )}
                            {translate('ra.auth.sign_in')}
                        </Button>
                            <Button
                                variant="contained"
                                type="button"
                                color="primary"
                                disabled={loading}
                                fullWidth
                                onClick={() => {
                                    setRegister(true);
                                }}
                            >
                                {translate('Register')}
                            </Button>
                        </>
                        }
                        {register && <>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={loading}
                                fullWidth
                                onClick={() => {
                                    handleSubmitRegister();
                                }}
                            >
                                {loading && (
                                    <CircularProgress size={25} thickness={2}/>
                                )}
                                {translate('Register')}
                            </Button>
                            <Button
                                variant="contained"
                                type="button"
                                color="primary"
                                disabled={loading}
                                fullWidth
                                onClick={() => {
                                    setRegister(false);
                                }}
                            >
                                {translate('ra.auth.sign_in')}
                            </Button>
                        </>
                        }

                    </CardActions>
                </Card>
            </Box>
        </Form>
    );
};

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

export default Login;

interface FormValues {
    username?: string;
    password?: string;
}
