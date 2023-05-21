export interface TableColumn{
    columnDef: string,
    header: string,
    type: 'number' | 'string' | 'date' | 'time' | 'boolean';
    dateFormat?: string,
    timeFormat?: string,
}