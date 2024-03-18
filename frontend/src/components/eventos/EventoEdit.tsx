import {
    Datagrid, DateField,
    DateTimeInput, DeleteButton,
    Edit, EditButton,
    Pagination,
    ReferenceManyField,
    TabbedForm, TextField,
    TextInput,
    useRecordContext
} from "react-admin";
import AddRelatedArtista from "./AddRelatedArtista";
import {Theme, useMediaQuery} from "@mui/material";
import PhotoLinkComponent from "../artistas/PhotoLinkComponent";
import React from "react";
import CustomEditActions from "../editactions/EditActions";
const RichTextInput = React.lazy(() =>
    import('ra-input-rich-text').then(module => ({
        default: module.RichTextInput,
    }))
);
const ShowEditTitle = () => {
    const record = useRecordContext();
    let formatedTime = record.data ? new Date(record.data).toLocaleTimeString() : "";
    let formatedDate = record.data ? new Date(record.data).toLocaleDateString() : "";
    return <span>{record ? `${record.nome} em ${record.local} no dia ${formatedDate} às ${formatedTime}` : ''}</span>;
};


export const EventoEdit = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    const validateDateTime = (value) => {
        const parsedDate = new Date(value);
        const year = parsedDate.getFullYear();
        if (year > 9999) {
            return "Invalido formato de ano";
        }
        return undefined;
    };

    return (
        <Edit title={<ShowEditTitle/>} mutationMode="pessimistic" actions={<CustomEditActions />}>
            <TabbedForm>
                <TabbedForm.Tab
                    label="resources.evento.form.detalhes"
                    sx={{maxWidth: '40em'}}>

                    {/*<TextInput disabled source="id"/>*/}
                    <TextInput source="nome" required={true} multiline label="resources.evento.fields.nome"/>
                    <DateTimeInput source="dataHora" required={true} validate={validateDateTime} label="resources.evento.fields.dataHora"/>
                    <TextInput source="local" required={true} multiline rows={2} label="resources.evento.fields.local"/>

                </TabbedForm.Tab>
                <TabbedForm.Tab
                    label="resources.evento.form.descricao"
                    path="descricao">
                    <RichTextInput source="descricao" label="resources.evento.fields.descricao"/>
                </TabbedForm.Tab>

                <TabbedForm.Tab
                    label="resources.evento.form.artistas"
                    path="artistas">
                    <ReferenceManyField
                        reference="artista-evento"
                        target="evento"
                        pagination={<Pagination/>}>
                        {!isSmall ? (
                        <Datagrid
                            sx={{
                                width: '100%',
                                '& .column-comment': {
                                    maxWidth: '20em',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                },
                            }}>
                            <PhotoLinkComponent source="artista.nome" label="resources.artista.fields.nome"/>
                            <DateField source="artista.dataNascimento" label="resources.artista.fields.dataNascimento"/>
                            <TextField source="artista.nacionalidade" label="resources.artista.fields.nacionalidade"/>
                            <EditButton/>
                            <DeleteButton redirect={false} mutationMode="pessimistic"/>
                        </Datagrid>
                        ) : (
                            <Datagrid>
                                <TextField source="artista.nome" label="resources.artista.fields.nome"/>
                                <DateField source="artista.dataNascimento" label="resources.artista.fields.dataNascimento"/>
                                <EditButton/>
                                <DeleteButton redirect={false} mutationMode="pessimistic"/>
                            </Datagrid>
                        )}

                        <AddRelatedArtista/>
                    </ReferenceManyField>
                </TabbedForm.Tab>
            </TabbedForm>
        </Edit>
    );
};