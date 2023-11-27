import { Injectable } from '@angular/core';
import { SupabaseService } from 'app/service/supabase.service ';
import { BehaviorSubject, Observable } from 'rxjs';
import { Plant } from './plants.modal';
import { PlantDetailed } from './plant-details/plants.modal';
import { MenuService } from '../../componets/menu/menu.service';

@Injectable({
    providedIn: 'root',
})
export class PlantsService extends SupabaseService {
    private _plant = new BehaviorSubject<Plant>(null);

    public get plant(): Observable<Plant> {
        return this._plant.asObservable();
    }

    public setPlant(value: Plant) {
        this._plant.next(value);
    }

    getPlants = async (): Promise<Plant[]> => {
        const { data, error } = await this.supabase
            .from('Plants')
            .select('*');

        if (error) {
            console.error('Erro ao consultar dados:', error);
        }

        return data as Plant[];
    };

    getPlant = async (plantId: number): Promise<Plant> => {
        const { data, error } = await this.supabase
            .from('Plants')
            .select()
            .eq('id', plantId)
            .single();

        if (error) {
            console.error('Erro ao consultar dados:', error);
        }

        return data as Plant;
    };

    getPlantDetailed = async (id: number): Promise<PlantDetailed> => {
        const { data, error } = await this.supabase
            .from('PlantDetailed')
            .select()
            .eq('id', id)
            .single();

        if (error) {
            console.error('Erro ao consultar dados:', error);
            return null;
        }

        return data;
    };

    addPlantToCart(plant: Plant, menuService: MenuService) {
        menuService.addPlantToCart(plant);
    }
}
