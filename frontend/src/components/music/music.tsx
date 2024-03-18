import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    SimpleForm,
    TextInput,
    Create,
    required, useRecordContext, SelectInput,
} from 'react-admin';
import {useGetMusicas} from "../../Hooks/useGetMusicas";

// eslint-disable-next-line react/prop-types
const AudioPlayer = () => {
    const record = useRecordContext();
    // @ts-ignore
    if (!record) return null;
    return (
        <audio controls>
            <source src={`/src/musics/${record.fileUrl}`} type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>);
};


export const MusicList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="title"/>
            <TextField source="artist"/>
            <TextField source="album"/>
            <AudioPlayer/>
            <EditButton/>
        </Datagrid>
    </List>
);

export const MusicEdit = (props) => {
    const musicas = useGetMusicas();
    const musicasJson = [];
    // set random id to force remount of the component
    musicas.forEach((musica) => {
        musicasJson.push({id: musica, name: musica});
    });
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="title"/>
                <TextInput source="artist"/>
                <TextInput source="album"/>
                <SelectInput source="fileUrl" choices={musicasJson}/>
                <AudioPlayer/>
            </SimpleForm>
        </Edit>);
};

const validateFile = [required()]; // You can define your own validation rules here

export const MusicCreate = (props) => {
    const musicas = useGetMusicas();
    const musicasJson = [];
    // set random id to force remount of the component
    musicas.forEach((musica) => {
        musicasJson.push({id: musica, name: musica});
    });
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title"/>
                <TextInput source="artist"/>
                <TextInput source="album"/>
                <SelectInput source="fileUrl" choices={musicasJson}/>
                <AudioPlayer/>
            </SimpleForm>
        </Create>);

};
