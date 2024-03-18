import {
    DateInput,
    DeleteButton,
    EditButton,
    List,
    ListProps,
    RecordContextProvider,
    SearchInput,
    useListContext
} from "react-admin";
import {Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import inflection from 'inflection';

const showFilters = [
    <SearchInput source="q" alwaysOn key={"search"}/>,
    <DateInput source="dataHoraGte" alwaysOn label={'De'} key={"dataHoraGte"}/>,
    <DateInput source="dataHoraLte" alwaysOn label={"Até"} key={"dataHoraLte"}/>,
];

export const EventoList = (props: ListProps) => {
    return (
        <List {...props} sort={{field: "id", order: "ASC"}} perPage={20} pagination={false} component="div" filters={showFilters}>
            <ShowGrid/>
        </List>
    );
};

const ShowGrid = () => {
    const {data, isLoading} = useListContext<any>();
    if (isLoading) {
        return null;
    }
    return (
        <>
            <Grid container spacing={2} sx={{ mt: 0 }}>
                {data?.map(record => (
                    <RecordContextProvider key={record.id} value={record}>
                        <Grid
                            key={record.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            xl={2}
                            item
                        >
                            <Card>
                                <CardMedia
                                    image={`https://picsum.photos/200?random=${record.id}`}
                                    sx={{ height: 140 }}
                                />
                                <CardContent sx={{ paddingBottom: '0.5em' }}>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        align="center"
                                    >
                                        {inflection.humanize(record.nome)}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        align="center">
                                        {record.local}
                                    </Typography>
                                </CardContent>
                                <CardActions
                                    sx={{
                                        '.MuiCardActions-spacing': {
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                        },
                                    }}
                                >
                                    <EditButton />
                                    <DeleteButton mutationMode="pessimistic"/>
                                </CardActions>
                            </Card>
                        </Grid>
                    </RecordContextProvider>
                ))}
            </Grid>
        </>);
};