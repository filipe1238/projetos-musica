import {
    AutocompleteInput,
    Edit,
    SimpleForm,
    useGetList,
    useRecordContext
} from "react-admin";
import {useState, useEffect} from "react";



const ArtistaEventoEditForm = (props) => {
    const {data: choicesShows, isLoading: isLoadingChoices} = useGetList('eventos');
    const {data: choicesArtistas, isLoading: isLoadingChoicesArtista} = useGetList('artistas');
    const record = useRecordContext();

    console.log('record', record);
    // eslint-disable-next-line react/prop-types
    const { setEvento } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setEvento(record?.evento);
    }, [record?.evento, setEvento]);

    if (isLoadingChoices || isLoadingChoicesArtista) {
        return null;
    }

    return (
        <SimpleForm>
            <AutocompleteInput
                isRequired={true}
                disabled={true}
                source="evento.id"
                choices={choicesShows}
                optionText="nome"
                optionValue="id"
                label="resources.evento.name"
            />
            <AutocompleteInput
                isRequired={true}
                source="artista.id"
                choices={choicesArtistas}
                optionText="nome"
                optionValue="id"
                label="resources.artista.name"
            />

        </SimpleForm>
    )
};

export const ArtistaEventoEdit = (props) => {
    const [evento, setEvento] = useState(null);
    return (
        <Edit title="Adicionar Artista ao Evento"
              redirect={`/eventos/${evento}/artistas`}
              {...props}
              actions={null}
              undoable={false}>
            <ArtistaEventoEditForm setEvento={setEvento}/>
        </Edit>
    );
}
