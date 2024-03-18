import { SxProps, Typography } from '@mui/material';
import { memo } from 'react';

import { FieldProps, useRecordContext } from 'react-admin';
import AvatarField from './AvatarField';

interface Props extends FieldProps<any> {
    size?: string;
    sx?: SxProps;
}

const PhotoFieldComponent = (props: Props) => {
    const { size } = props;
    const record = useRecordContext<any>();
    return record ? (
        <Typography
            variant="body2"
            display="flex"
            flexWrap="nowrap"
            alignItems="center"
            component="div"
            sx={props.sx}
        >
            <AvatarField
                record={record}
                size={size}
                sx={{
                    mr: 1,
                    mt: -0.5,
                    mb: -0.5,
                }}
            />
            {record?.nome ? record?.nome : record?.artista?.nome}
        </Typography>
    ) : null;
};

PhotoFieldComponent.defaultProps = {
    source: 'nome' as const,
};

export default memo<Props>(PhotoFieldComponent);