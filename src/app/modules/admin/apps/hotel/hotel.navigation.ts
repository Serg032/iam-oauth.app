import { FuseNavigationItem } from '@fuse/components/navigation';

export const hotelNavigation: FuseNavigationItem = {
    id      : 'hotel',
    title   : 'Hotel',
    type    : 'collapsable',
    icon    : 'heroicons_outline:tag',
    children: [
        {
            id   : 'guests',
            title: 'Guest',
            type : 'basic',
            icon : 'mat_outline:manage_accounts',
            link : '/hotel/guest',
        },
    ],
};