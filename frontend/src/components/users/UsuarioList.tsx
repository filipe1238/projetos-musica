import {Datagrid, List, SearchInput, TextField} from "react-admin";
import {Theme, useMediaQuery} from "@mui/material";


const artistaFilters = [
    <SearchInput source="q" alwaysOn key={"search"}/>,
];

export const UsuarioList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));

    return (
        <List
            sort={{field: "id", order: "ASC"}}
            perPage={20}
            filters={artistaFilters}
            pagination={false}
            component="div">
            {isSmall ? (
                <UsersMobileList/>
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
                    <TextField source="username" label={"resources.users.fields.username"}/>
                    <TextField source="password" label={"resources.users.fields.password"}/>
                    <TextField source="email" showTime label={"resources.users.fields.email"}/>
                </Datagrid>
            )}
        </List>
    );
}

const UsersMobileList = () => {
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