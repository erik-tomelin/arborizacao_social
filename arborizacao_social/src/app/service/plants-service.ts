import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service ';

@Injectable({
    providedIn: 'root',
})
export class PlantsService extends SupabaseService {

    // async getPlants() {
    //     const { data, error } = await this.supabase
    //         .from('Plants')
    //         .select('*');

    //     if (error) {
    //         console.error('Erro ao consultar dados:', error);
    //     }

    //     return data;
    // }

    getPlants = async (): Promise<any> => {
        // this.get( + '/hoursOfSleep', response);
        const { data, error } = await this.supabase
            .from('Plants')
            .select('*');

        if (error) {
            console.error('Erro ao consultar dados:', error);
        }

        return data;
    };

    getDiffMovimentsPerSleep = (response: (result: any) => void): any => {
        // Implemente a lógica desejada para o método getDiffMovimentsPerSleep
    };

    postDiffMovimentsPerSleep = (data: any, response: (result: any) => void): any => {
        // Implemente a lógica desejada para o método postDiffMovimentsPerSleep
    };
}
