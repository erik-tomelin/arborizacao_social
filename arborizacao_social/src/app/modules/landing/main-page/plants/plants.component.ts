import { Component, Input, OnInit } from '@angular/core';
import { PlantsService } from 'app/modules/landing/main-page/plants/plants-service';
import { Plant } from './plants.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {
  public listPlant: Plant[] = [];

  constructor(
    private _plantsService: PlantsService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getPlants();
  }

  public async getPlants() {
    this._plantsService.getPlants().then(
      (response) => {
        this.listPlant = response;

        console.log(this.listPlant)
      }
    ).catch(error => {
      console.log(error);
    });
  }

  public goToPlantDetails(plant: Plant) {
    if (plant && plant.scientific_name) {
      this._plantsService.setPlant(plant);
      this._router.navigateByUrl('/arborizacaoSocial/' + plant.scientific_name.toLowerCase().replace(/\s+/g, "_"));
    } else {
      console.error('Plant scientific_name is undefined');
    }
  }
}
