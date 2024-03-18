import {RichTextField, useGetList} from "react-admin";
import {useMemo} from "react";
import {subDays, startOfDay} from 'date-fns';
import {Card, CardMedia, Grid} from "@mui/material";
import Box from "@mui/material/Box";


const Dashboard = () => {
    const aMonthAgo = useMemo(() => subDays(startOfDay(new Date()), 30), []);

    const {data: artistas} = useGetList<any>('artistas', {
        filter: {}, //
        sort: {field: 'dataCriacao', order: 'DESC'},
        pagination: {page: 1, perPage: 50},
    });

    return (
        <>
            <div>
                <h1>Artistas parceiros ({artistas?.length})</h1>
                <div>
                    <Grid container columnSpacing={4}>
                        {artistas?.map((artista: any) => (
                            <Grid item key={artista.id} xs={12} sm={6} md={2}>
                                <Card sx={{display: 'inline-block'}}>
                                    <CardMedia
                                        component="img"
                                        image={artista.fotoUrl ? artista.fotoUrl : `https://picsum.photos/500/300?random=${artista.id}`}
                                        alt=""
                                        sx={{maxWidth: '10em', maxHeight: '10em'}}
                                    />
                                </Card>
                                <h3>{artista.nome}</h3>
                                <TruncatedRichTextField record={artista} source="biografia"/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    );
}

const TruncatedRichTextField = (x) => {
    const record = x.record;
    const source = x.source;
    const truncatedText = record[source]?.length > 50 ? record[source]?.substring(0, 150) + '...' : record[source];
    return <RichTextField record={{...record, [source]: truncatedText}} source={source}/>;
};

export default Dashboard;