import {
    AutocompleteInput,
    Create,
    SimpleForm,
    useGetList, useRecordContext,
} from "react-admin"
import {useEffect, useState} from "react";
import {useGerArtistasFromShow} from "../../Hooks/UseGetArtistasFromShow";


const GenricEdit = (props) => {
    const {data: choicesShows, isLoading: isLoadingChoices} = useGetList('eventos');
    const {data: choicesArtistas, isLoading: isLoadingChoicesArtista} = useGetList('artistas');
    const record = useRecordContext();
    const artistas = useGerArtistasFromShow(record?.showId);

    if (!record) {
        return <>Nao é possivel criar por esse caminho</>;
    } else {
        console.log('record', record);
    }
    // eslint-disable-next-line react/prop-types
    const {setEvento} = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setEvento(record?.evento);
    }, [record?.evento, setEvento]);

    if (isLoadingChoices || isLoadingChoicesArtista) {
        return null;
    }

    const handleValidateArtistas = (id) => {
        // fetch data from the server, using the showId
        if (artistas.length > 0) {
            const artistasIds = artistas.map((artistaShow) => {
                if (!artistaShow.artista) {
                    return null;
                }
                return artistaShow.artista.id
            });
            if (artistasIds.includes(id)) {
                return "Artista já está no evento";
            }
        }
        return undefined;
    };

    return (
        <SimpleForm>
            <AutocompleteInput
                isRequired={true}
                disabled={true}
                source="evento"
                choices={choicesShows}
                optionText="nome"
                optionValue="id"
                label="resources.evento.name"
            />
            <AutocompleteInput
                validate={handleValidateArtistas}
                isRequired={true}
                source="artista"
                choices={choicesArtistas}
                optionText="nome"
                optionValue="id"
                label="resources.artista.name"
            />
        </SimpleForm>
    );
};

export const ArtistaEventoCreate = (props) => {
    const [evento, setEvento] = useState(null);
    return (
        <Create title={evento ? `Evento ${evento}` : "Evento"}
                redirect={`/eventos/${evento}/artistas`}
                {...props}
                actions={null}
                undoable={false}>
            <GenricEdit setEvento={setEvento}/>
        </Create>
    );
}

