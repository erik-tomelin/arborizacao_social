import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plant } from '../../main-page/plants/plants.modal';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private menuItems: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private listAddCartPlants: BehaviorSubject<Plant[]> = new BehaviorSubject<Plant[]>([])
    
    constructor() { 
    }

    getMenuItems(): Observable<number> {
        return this.menuItems.asObservable();
    }

    updateMenuItems(count: number): void {
        this.menuItems.next(count);
    }

    addPlantToCart(plant: Plant) {
        this.listAddCartPlants.subscribe(
            (listPlant) => {
                listPlant.push(plant);
            }
        );
    }

    getPlantsAddToCart(): Observable<Plant[]> {
        return this.listAddCartPlants?.asObservable();
    }


}