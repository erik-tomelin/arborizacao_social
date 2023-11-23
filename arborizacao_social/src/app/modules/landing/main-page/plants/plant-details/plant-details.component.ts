import { Component, OnInit } from '@angular/core';
import { PlantsService } from '../plants-service';
import { Plant } from '../plants.modal';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {
  plant: Plant;

  constructor(
    private _plantService: PlantsService,
  ) { }

  ngOnInit(): void {
    this.plant = this._plantService.getPlant();

    console.log(this.plant)
  }

}
