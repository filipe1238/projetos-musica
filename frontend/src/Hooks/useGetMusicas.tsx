import {useEffect, useState} from "react";
const isDev = import.meta.env.DEV;
const API_URL = isDev ? import.meta.env.VITE_DEV_REST_URL : import.meta.env.VITE_PROD_REST_URL;

export const useGetMusicas = () => {
    const [musicas, setMusicas] = useState([]);

    useEffect(() => {
            try {
                fetchMusicasData().then((response) => {
                    setMusicas(response);
                });
            } catch (e) {
                console.error(e)
            }
    }, []);
    return musicas;
};

const fetchMusicasData = async () => {
    const request = new Request(`${API_URL}/musics/list-music-files`, {
        method: 'GET',
        headers: new Headers({ 'Content-Type': 'application/json' }),
    })
    return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .catch(() => {
            throw new Error('Network error');
        });

}

