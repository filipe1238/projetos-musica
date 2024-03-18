import {Theme, useMediaQuery} from "@mui/material";
import {
    Datagrid,
    DateField,
    List,
    TextField,
    SearchInput
} from "react-admin";
import PhotoFieldComponent from "../fotonome/PhotoFieldComponent";

const artistaFilters = [
    <SearchInput source="q" alwaysOn key={"search"}/>,
];

export const ArtistaList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));


    return (
        <List
            sort={{field: "id", order: "ASC"}}
            perPage={20}
            filters={artistaFilters}
            pagination={false}
            component="div">
            {isSmall ? (
                <ArtistaMobileList/>
            ) : (
                <Datagrid rowClick="edit"
                          sx={{
                              width: '100%',
                              '& .column-comment': {
                                  maxWidth: '20em',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  whiteSpace: 'nowrap',
                              },
                          }}>
                    {/*<TextField source="id"/>*/}
                    <PhotoFieldComponent source="nome" label={"resources.artista.fields.nome"}/>
                    <TextField source="nacionalidade" label={"resources.artista.fields.nacionalidade"}/>
                    <DateField source="dataNascimento" label={"resources.artista.fields.dataNascimento"}/>
                    <DateField source="dataCriacao" showTime label={"resources.artista.fields.dataCriacao"}/>
                </Datagrid>
            )}
        </List>
    );
};

const ArtistaMobileList = () => {
    // const {data, isLoading, total} = useListContext<any>();
    // if (isLoading || Number(total) === 0) {
    //     return null;
    // }
    return (
        <>
            <Datagrid rowClick="edit"
                      sx={{
                          width: '100%',
                          '& .column-comment': {
                              maxWidth: '20em',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                          },
                      }}>
                {/*<TextField source="id"/>*/}
                <PhotoFieldComponent source="nome"/>
                <TextField source="nacionalidade"/>
            </Datagrid>
        </>
    );
};
