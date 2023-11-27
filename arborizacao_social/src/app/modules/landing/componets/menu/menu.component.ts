import { Component, HostListener, OnInit } from '@angular/core';
import {
  Dropdown,
  initTE,
} from "tw-elements";
import { MenuService } from './menu.service';

initTE({ Dropdown });

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public bannerOpen = true;
  public isVisible = true;

  public menu: number = 0;

  private _lastScrollY = 0;

  public listPlants = []

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY < this._lastScrollY) {
      const section = document.querySelector("section");
      if (section && window.scrollY < 0) {
        section.classList.toggle('show', true);
      }
    } else {
      const section = document.querySelector("section");
      if (section && window.scrollY >= 0) {
        section.classList.toggle('show', false);
      }
    }

    this._lastScrollY = currentScrollY;
  }

  constructor(
    private _menuService: MenuService
  ) { 
    this._menuService.getMenuItems().subscribe(count => {
      this.menu = count;
    });

    this._menuService.getPlantsAddToCart().subscribe(plants => {
      console.log(plants);
      this.listPlants = plants
    })
  }

  ngOnInit(): void {
  }

  toggleBanner() {
    this.bannerOpen = !this.bannerOpen;
  }

  updateMenu() {
    this._menuService.getMenuItems().subscribe(count => {
      this.menu = count;
    });
  }
}
