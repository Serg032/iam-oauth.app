import { FuseNavigationItem } from '@fuse/components/navigation';
import { oAuthNavigation } from './apps/o-auth/o-auth.navigation';
import { iamNavigation } from './apps/iam/iam.navigation';
import { hotelNavigation } from './apps/hotel/hotel.navigation';

export const adminNavigation: FuseNavigationItem[] = [
    oAuthNavigation,
    iamNavigation,
    hotelNavigation
];