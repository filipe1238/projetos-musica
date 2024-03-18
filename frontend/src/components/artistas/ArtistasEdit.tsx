import {
    DateInput,
    Edit,
    SelectInput,
    TabbedForm,
    TextInput,
    useRecordContext
} from "react-admin";
import Poster from "../fotonome/Poster";
import Nacionalidades from "../../types/Nacionalidades";
import React from "react";
import CustomEditActions from "../editactions/EditActions";

const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);


const ArtistaEditTitle = () => {
    const record = useRecordContext();
    return <span>{`${record.nome}`}</span>;
};

export const ArtistaEdit = () => {
    return (<>
            <Edit title={<ArtistaEditTitle/>} mutationMode="pessimistic" actions={<CustomEditActions/>}>
                <TabbedForm>
                    <TabbedForm.Tab
                        label="resources.artista.form.detalhes"
                        sx={{maxWidth: '40em'}}>
                        <Poster urlString={"fotoUrl"}/>
                        <TextInput source="nome" multiline required validate={validateSizeGeneric} label="resources.artista.fields.nome"/>
                        <SelectInput source="nacionalidade" choices={Nacionalidades} label="resources.artista.fields.nacionalidade"/>
                        <DateInput source="dataNascimento" label="resources.artista.fields.dataNascimento"/>
                    </TabbedForm.Tab>
                    <TabbedForm.Tab
                        label="resources.artista.form.biografia"
                        path="biografia">
                        <RichTextInput source="biografia" validate={validateSizeBiografia} label="resources.artista.fields.biografia"/>
                    </TabbedForm.Tab>
                    <TabbedForm.Tab
                        label="resources.artista.form.RedesSociais"
                        path="redes-sociais"
                        sx={{maxWidth: '40em'}}>
                        <Poster urlString={"fotoUrl"}/>
                        <TextInput source="fotoUrl" multiline fullWidth label="resources.artista.fields.fotoUrl"/>
                        <TextInput source="instagramUrl" multiline fullWidth label="resources.artista.fields.instagramUrl"/>
                        <TextInput source="facebookUrl" multiline fullWidth label="resources.artista.fields.facebookUrl"/>
                        <TextInput source="twitterUrl" multiline fullWidth label="resources.artista.fields.twitterUrl"/>
                    </TabbedForm.Tab>
                </TabbedForm>

            </Edit>
        </>
    )
};

const validateSizeBiografia = [(value: string) => value?.length < 2000 ? undefined : 'A biografia é muito longa'];
const validateSizeGeneric = [(value: string) => value?.length < 255 ? undefined : 'O campo é muito longo'];