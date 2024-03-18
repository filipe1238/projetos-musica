import {Theme, useMediaQuery} from "@mui/material";
import {
    Datagrid,
    DateField,
    List,
    TextField,
    SearchInput
} from "react-admin";

const artistaFilters = [
    <SearchInput source="q" alwaysOn key={"search"}/>,
];

export const ContratoList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));


    return (
        <List
            sort={{field: "id", order: "ASC"}}
            perPage={20}
            filters={artistaFilters}
            pagination={false}
            component="div">
            {isSmall ? (
                <ContratoMobileList />
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
                    <TextField source="descricao" label={"descricao"}/>
                    <DateField source="dataInicio" label={"data de inicio"}/>
                    <DateField source="dataFim" showTime label={"data de fim"}/>
                    <TextField source="valor" label={"valor"}/>
                </Datagrid>
            )}
        </List>
    );
};

const ContratoMobileList = () => {
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

            </Datagrid>
        </>
    );
};
