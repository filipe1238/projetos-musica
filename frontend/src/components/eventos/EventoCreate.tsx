import {Create, DateTimeInput, TabbedForm, TextInput} from "react-admin";
import React from "react";
import CustomEditActions from "../editactions/EditActions";

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);

export const EventoCreate = () => {
    const validateDateTime = (value) => {
        const parsedDate = new Date(value);
        const year = parsedDate.getFullYear();
        if (year > 9999) {
            return "Invalido formato de ano";
        }
        return undefined;
    };

    return (
        <Create title={'Create Show'} actions={<CustomEditActions />}>
            <TabbedForm>
                <TabbedForm.Tab
                    label="resources.evento.form.detalhes"
                    sx={{maxWidth: '40em'}}>
                    <TextInput source="nome" required={true} multiline label="resources.evento.fields.nome"/>
                    <DateTimeInput source="dataHora" required={true} validate={validateDateTime} label="resources.evento.fields.dataHora" />
                    <TextInput source="local" required={true} multiline rows={2} label="resources.evento.fields.local"/>

                </TabbedForm.Tab>
                <TabbedForm.Tab
                    label="resources.evento.form.descricao"
                    path="descricao">
                    <RichTextInput source="descricao" label="resources.evento.fields.descricao"/>
                </TabbedForm.Tab>
            </TabbedForm>
        </Create>
    );
}
