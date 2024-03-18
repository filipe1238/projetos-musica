import {RaRecord} from "react-admin";

export interface Show extends RaRecord {
    nome: string;
    descricao: string;
    data: string;
    local: string;
}
