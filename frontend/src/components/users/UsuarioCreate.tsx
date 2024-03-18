import {Create, PasswordInput, TabbedForm, TextInput} from "react-admin";
import CustomEditActions from "../editactions/EditActions";

const PasswordValidate = values => {
    const errors = {};
    if (values.confirmPassword !== values.password) {
        // @ts-ignore
        errors.confirmPassword = 'The passwords do not match';
    }
    return errors;
};

export const UsuarioCreate = (props) => {
    return (
        <Create {...props} actions={<CustomEditActions/>}>
            <TabbedForm validate={PasswordValidate}>
                <TabbedForm.Tab
                    label="resources.artista.form.detalhes"
                    sx={{maxWidth: '40em'}}>
                    {/*<Poster urlString={"fotoUrl"}/>*/}
                    <TextInput source="username" required multiline label="resources.users.fields.username"/>
                    <PasswordInput source="password" required accessKey={"name"}
                                   label="resources.users.fields.password"/>
                    <PasswordInput source="confirmPassword" required accessKey={"name"} label="resources.users.fields.password"/>
                    <TextInput source="email" label="resources.users.fields.email"/>
                </TabbedForm.Tab>
            </TabbedForm>
        </Create>
    );
}