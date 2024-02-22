import { ColumnConfig, ColumnDataType } from '@aurora';

export const guestColumnsConfig: ColumnConfig[] = [
    {
        type       : ColumnDataType.STRING,
        field      : 'name',
        sort       : 'name',
        translation: 'hotel.Name',
        isUnaccent : true,
    },
    {
        type       : ColumnDataType.STRING,
        field      : 'lastname',
        sort       : 'lastname',
        translation: 'hotel.Lastname',
        isUnaccent : true,
    },
    {
        type       : ColumnDataType.STRING,
        field      : 'code',
        sort       : 'code',
        translation: 'hotel.Code',
        isUnaccent : true,
    },
];