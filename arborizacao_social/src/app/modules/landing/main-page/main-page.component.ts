import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { FuseConfigService } from '@fuse/services/config';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FusePlatformService } from '@fuse/services/platform';
import { FUSE_VERSION } from '@fuse/version';
import { AppConfig } from 'app/core/config/app.config';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { Navigation } from 'app/core/navigation/navigation.types';
import { PlantsService } from 'app/modules/landing/main-page/plants/plants.service';
import { Subject, combineLatest, map, takeUntil } from 'rxjs';
import { DialogComponent } from './plants/dialog/dialog.component';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
})

export class MainPageComponent {
    config: AppConfig;
    scheme: 'dark' | 'light';
    theme: string;

    public navigation: Navigation;

    public hasKey: boolean;

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    private keyLocalStorage = 'Access';
    listPlant: Promise<any>;

    constructor(
        @Inject(DOCUMENT) private _document: any,
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
        public dialog: MatDialog,
        private _renderer2: Renderer2,
        private _fuseConfigService: FuseConfigService,
        private _fusePlatformService: FusePlatformService,
    ) {
    }

    get currentYear(): number {
        return new Date().getFullYear();
    }

    ngOnInit(): void {
        this.fuseConfigurations();

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
    }

    fuseConfigurations() {
        combineLatest([
            this._fuseConfigService.config$,
            this._fuseMediaWatcherService.onMediaQueryChange$(['(prefers-color-scheme: dark)', '(prefers-color-scheme: light)'])
        ]).pipe(
            takeUntil(this._unsubscribeAll),
            map(([config, mql]) => {

                const options = {
                    scheme: config.scheme,
                    theme: config.theme
                };

                if (config.scheme === 'auto') {
                    options.scheme = mql.breakpoints['(prefers-color-scheme: dark)'] ? 'dark' : 'light';
                }

                return options;
            })
        ).subscribe((options) => {
            this.scheme = options.scheme;
            this.theme = options.theme;

            this._updateScheme();
            this._updateTheme();
        });

        this._renderer2.setAttribute(this._document.querySelector('[ng-version]'), 'fuse-version', FUSE_VERSION);

        this._renderer2.addClass(this._document.body, this._fusePlatformService.osName);
    }

    private _updateScheme(): void {
        this._document.body.classList.remove('light', 'dark');

        this._document.body.classList.add(this.scheme);
    }

    private _updateTheme(): void {
        this._document.body.classList.forEach((className: string) => {
            if (className.startsWith('theme-')) {
                this._document.body.classList.remove(className, className.split('-')[1]);
            }
        });

        this._document.body.classList.add(this.theme);
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