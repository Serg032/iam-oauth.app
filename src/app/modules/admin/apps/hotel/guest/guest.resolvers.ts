import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { guestColumnsConfig, GuestService } from '@apps/hotel/guest';
import { HotelGuest } from '@apps/hotel/hotel.types';
import { Action, ActionService, GridData, GridFiltersStorageService, GridStateService, QueryStatementHandler } from '@aurora';

export const guestPaginationResolver: ResolveFn<GridData<HotelGuest>> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const gridFiltersStorageService = inject(GridFiltersStorageService);
    const gridStateService = inject(GridStateService);
    const guestService = inject(GuestService);

    actionService.action({
        id          : 'hotel::guest.list.view',
        isViewAction: true,
    });

    const gridId = 'hotel::guest.list.mainGridList';
    gridStateService.setPaginationActionId(gridId, 'hotel::guest.list.pagination');
    gridStateService.setExportActionId(gridId, 'hotel::guest.list.export');

    return guestService.pagination({
        query: QueryStatementHandler
            .init({ columnsConfig: guestColumnsConfig })
            .setColumFilters(gridFiltersStorageService.getColumnFilterState(gridId))
            .setSort(gridStateService.getSort(gridId))
            .setPage(gridStateService.getPage(gridId))
            .setSearch(gridStateService.getSearchState(gridId))
            .getQueryStatement(),
    });
};

export const guestNewResolver: ResolveFn<Action> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);

    return actionService.action({
        id          : 'hotel::guest.detail.new',
        isViewAction: true,
    });
};

export const guestEditResolver: ResolveFn<{
    object: HotelGuest;
}> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) =>
{
    const actionService = inject(ActionService);
    const guestService = inject(GuestService);

    actionService.action({
        id          : 'hotel::guest.detail.edit',
        isViewAction: true,
    });

    return guestService
        .findById({
            id: route.paramMap.get('id'),
        });
};
