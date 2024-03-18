import { CreateButton, useRecordContext } from 'react-admin';

const AddRelatedArtista = () => {
    const record = useRecordContext();

    return (
        <CreateButton
            resource={`artista-evento`}
            state={{ record: { evento: record.id } }}
        />
    );
};

export default AddRelatedArtista;
