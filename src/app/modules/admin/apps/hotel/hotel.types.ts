export interface HotelGuest {
    id: string;
    name: string;
    lastname: string;
    code: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export interface HotelCreateGuest {
    id: string;
    name: string;
    lastname: string;
    code: string;
}

export interface HotelUpdateGuestById {
    id: string;
    name?: string;
    lastname?: string;
    code?: string;
}

export interface HotelUpdateGuests {
    id?: string;
    name?: string;
    lastname?: string;
    code?: string;
}
