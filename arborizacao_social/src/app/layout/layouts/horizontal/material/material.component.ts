import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { PlantsService } from '../../../../service/plants-service';

@Component({
    selector: 'material-layout',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.scss']
})

export class MaterialLayoutComponent implements OnInit, OnDestroy {
    public isScreenSmall: boolean = true;
    public navigation: Navigation;

    public hasKey: boolean;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    private keyLocalStorage = 'Access';

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
        public dialog: MatDialog,
        private _plantsService: PlantsService
    ) {
    }

    get currentYear(): number {
        return new Date().getFullYear();
    }

    ngOnInit(): void {
        this.hasKey = localStorage.getItem(this.keyLocalStorage) ? true : false;
        if (!this.hasKey) {
            localStorage.setItem(this.keyLocalStorage, 'true');
            this.openDialog()
        }

        this._navigationService.navigation$.pipe(takeUntil(this._unsubscribeAll)).subscribe(
            (navigation: Navigation) => {
                this.navigation = navigation;
            }
        );

        const listPlant = this._plantsService.getPlants()
            .then(
                (response) => {
                    console.log(response)
                    return response
                }
            )
            .catch(error => {
                console.log(error)
            });
        
        console.log(listPlant)
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    toggleNavigation(name: string): void {
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if (navigation) {
            navigation.toggle();
        }
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
