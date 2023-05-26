import { Moment } from "moment";

export interface Cita{
    id?: number;
    fecha: Moment;
    hora: string;
    afiliado: number;
    test: number;
}