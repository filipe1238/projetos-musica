import dataProvider from "../dataProvider";
import {GET_MANY_REFERENCE} from "react-admin";
import {useEffect, useState} from "react";

export const useGerArtistasFromShow = (eventoId) => {
    const [artistas, setArtistas] = useState([]);


    useEffect(() => {
        if (eventoId !== null) {
            try {
                fetchArtistasData(eventoId).then((response) => {
                    setArtistas(response.data);
                });
            } catch (e) {
                console.error(e)
            }
        }
    }, [eventoId]);
    return artistas;
};

const fetchArtistasData = async (eventoId) => {
    const params = {
        filter: {"evento": eventoId},
        range: JSON.stringify([0, 25]),
        pagination: {page: 1, perPage: 25},
        sort: {field: "id", order: "DESC"},
    };

    return  await dataProvider(GET_MANY_REFERENCE, 'artista-evento', params);
}