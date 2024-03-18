import { Avatar, SxProps } from '@mui/material';
import { FieldProps, useRecordContext } from 'react-admin';

interface Props extends FieldProps<any> {
    sx?: SxProps;
    size?: string;
}

const grabImage = (record: any) => {
    if (record.fotoUrl) {
        return record.fotoUrl;
    } else {
        return record?.artista?.fotoUrl;
    }
}
const AvatarField = ({ size = '25', sx }: Props) => {
    const record = useRecordContext<any>();
    if (!record) return null;
    return (
        <Avatar
            src={`${grabImage(record) || `https://picsum.photos/200?random=${record.id}`}?size=${size}x${size}`}
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            sx={sx}
            alt={`${record.nome}`}
        />
    );
};

export default AvatarField;