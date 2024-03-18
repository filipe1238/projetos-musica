import {DateInput, Edit, NumberInput, TabbedForm, TextInput} from "react-admin";
import CustomEditActions from "../editactions/EditActions";


export const ContratoEdit = (props) => {

    return (
        <Edit title={'Create Show'} mutationMode="pessimistic" actions={<CustomEditActions/>}>
            <TabbedForm>
                <TabbedForm.Tab label="detalhes"
                                sx={{maxWidth: '40em'}}>
                    <TextInput source="descricao" multiline required label="Descrição"/>

                    <DateInput source="dataInicio" label="Data de Início" required/>
                    <DateInput source="dataFim" label="Data de Fim" required/>
                    <NumberInput source="valor" label="Valor" required/>
                </TabbedForm.Tab>
            </TabbedForm>
        </Edit>
    );
};