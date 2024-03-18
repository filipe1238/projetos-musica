import {Create, DateInput, SelectInput, TabbedForm, TextInput} from "react-admin";
import Nacionalidades from "../../types/Nacionalidades";
import React from "react";
import Poster from "../fotonome/Poster";
import CustomEditActions from "../editactions/EditActions";

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);


export const ArtistaCreate = (props) => {

    return (
        <Create {...props} actions={<CustomEditActions />}>
            <TabbedForm>
                <TabbedForm.Tab
                    label="resources.artista.form.detalhes"
                    sx={{maxWidth: '40em'}}>
                    <Poster urlString={"fotoUrl"}/>
                    <TextInput source="nome" multiline required label="resources.artista.fields.nome"/>
                    <SelectInput source="nacionalidade" choices={Nacionalidades} accessKey={"name"} label="resources.artista.fields.nacionalidade" />
                    <DateInput source="dataNascimento" label="resources.artista.fields.dataNascimento" />
                    <TextInput source="fotoUrl" multiline label="resources.artista.fields.fotoUrl" />
                </TabbedForm.Tab>
                <TabbedForm.Tab
                    label="resources.artista.form.biografia"
                    path="biografia">
                    <RichTextInput source="biografia" />
                </TabbedForm.Tab>
            </TabbedForm>
        </Create>
    );
};