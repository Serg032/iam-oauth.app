import gql from 'graphql-tag';

export const fields = `
    name
    lastname
    code
    createdAt
    updatedAt
`;

export const relationsFields = `
`;

// default methods
export const paginationQuery = gql`
    query HotelPaginateGuests (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        pagination: hotelPaginateGuests (
            query: $query
            constraint: $constraint
        ) {
            total
            rows
            count
        }
    }
`;

export const getQuery = gql`
    query HotelGetGuests (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        objects: hotelGetGuests (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findByIdQuery = gql`
    query HotelFindGuestById (
        $id: ID
        $constraint: QueryStatement
    ) {
        object: hotelFindGuestById (
            id: $id
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const findQuery = gql`
    query HotelFindGuest (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        object: hotelFindGuest (
            query: $query
            constraint: $constraint
        ) {
            id
            #FIELDS
        }
    }
`;

export const createMutation = gql`
    mutation HotelCreateGuest (
        $payload: HotelCreateGuestInput!
    ) {
        hotelCreateGuest (
            payload: $payload
        ) {
            ${fields}
        }
    }
`;

export const updateByIdMutation = gql`
    mutation HotelUpdateGuestById (
        $payload: HotelUpdateGuestByIdInput!
        $constraint: QueryStatement
    ) {
        hotelUpdateGuestById (
            payload: $payload
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const updateMutation = gql`
    mutation HotelUpdateGuests (
        $payload: HotelUpdateGuestsInput!
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        hotelUpdateGuests (
            payload: $payload
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteByIdMutation = gql`
    mutation HotelDeleteGuestById (
        $id: ID!
        $constraint: QueryStatement
    ) {
        hotelDeleteGuestById (
            id: $id
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;

export const deleteMutation = gql`
    mutation HotelDeleteGuests (
        $query: QueryStatement
        $constraint: QueryStatement
    ) {
        hotelDeleteGuests (
            query: $query
            constraint: $constraint
        ) {
            ${fields}
        }
    }
`;
