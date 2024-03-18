import { useState } from 'react';
import {
    Form,
    required,
    TextInput,
    useNotify,
    useRefresh,
    useRedirect, useTranslate,
} from 'react-admin';
import Box from "@mui/material/Box";
import {Avatar, Button, Card, CardActions, CircularProgress} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const CreateUserForm = () => {
    const [loading, setLoading] = useState(false);
    const translate = useTranslate();
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const handleSubmit = async (formData) => {
        setLoading(true);
        // try {
        //     // Make API call to create user
        //     // Replace 'createUserEndpoint' with your actual API endpoint
        //     const response = await fetch('createUserEndpoint', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // Add any additional headers as needed
        //         },
        //         body: JSON.stringify(formData),
        //     });
        //     const data = await response.json();
        //
        //     // Handle success
        //     notify('User created successfully');
        //     refresh();
        //     redirect('/users'); // Redirect to users list after successful creation
        // } catch (error) {
        //     // Handle error
        //     notify('Error: Unable to create user');
        //     console.error('Error creating user:', error);
        // } finally {
        //     setLoading(false);
        // }
    };

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
                                validate={required()}
                                fullWidth
                            />
                        </Box>
                    </Box>
                    <CardActions sx={{padding: '0 1em 1em 1em'}}>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            disabled={loading}
                            fullWidth
                        >
                            {loading && (
                                <CircularProgress size={25} thickness={2}/>
                            )}
                            {translate('Create User')}
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Form>
    );
};

export default CreateUserForm;
