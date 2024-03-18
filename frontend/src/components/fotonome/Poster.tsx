import { Card, CardMedia } from '@mui/material';
import { useRecordContext } from 'react-admin';

const Poster = (props: { urlString: any; }) => {
    const {urlString} = props;
    const record = useRecordContext<any>();
    if (!record) return null;
    return (
        <Card sx={{ display: 'inline-block' }}>
            <CardMedia
                component="img"
                image={record[urlString] ? record[urlString] : "https://picsum.photos/500/300"}
                alt=""
                sx={{ maxWidth: '42em', maxHeight: '15em' }}
            />
        </Card>
    );
};

export default Poster;
