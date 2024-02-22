/* eslint-disable max-len */
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { HotelComponent } from './hotel.component';
import { GuestListComponent } from './guest/guest-list.component';
import { GuestDetailComponent } from './guest/guest-detail.component';
import { guestEditResolver, guestNewResolver, guestPaginationResolver } from './guest/guest.resolvers';

export default [
    {
        path     : '',
        component: HotelComponent,
        children : [
            { path: 'guest', component: GuestListComponent, resolve: { data: guestPaginationResolver }, data: { permission: 'hotel.guest.get' }},
            { path: 'guest/new', component: GuestDetailComponent, resolve: { data: guestNewResolver }, data: { permission: 'hotel.guest.create' }},
            { path: 'guest/edit/:id', component: GuestDetailComponent, resolve: { data: guestEditResolver }, data: { permission: 'hotel.guest.get' }},
        ],
        providers: [
            {
                provide : TRANSLOCO_SCOPE,
                useValue: 'hotel',
                multi   : true,
            },
        ],
    },
];
