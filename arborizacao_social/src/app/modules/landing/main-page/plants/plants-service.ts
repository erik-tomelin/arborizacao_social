import { Injectable } from '@angular/core';
import { SupabaseService } from '../../../../service/supabase.service ';
import { Plant } from './plants.modal';

@Injectable({
    providedIn: 'root',
})
export class PlantsService extends SupabaseService {
    public plant: Plant;

    getPlant() {
        return this.plant;
    }

    setPlant(plant: Plant) {
        this.plant = plant
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
}
