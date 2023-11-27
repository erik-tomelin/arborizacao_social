import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Plant } from '../plants.modal';
import { PlantsService } from '../plants.service';
import { PlantDetailed } from './plants.modal';
import { MenuComponent } from '../../../componets/menu/menu.component';
import { MenuService } from 'app/modules/landing/componets/menu/menu.service';

declare const FlowBite: any;
@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {
  @ViewChild('productImage') productImage?: ElementRef<HTMLDivElement>;
  @ViewChild('productThumbnails') productThumbnails?: ElementRef<HTMLDivElement>;
  @ViewChild('modal') modal?: ElementRef<HTMLElement>;
  @ViewChild('productModalImage') productModalImage?: ElementRef<HTMLDivElement>;
  @ViewChild('productModalThumbnails') productModalThumbnails?: ElementRef<HTMLDivElement>;
  @ViewChild('btnAdd') btnAdd?: ElementRef<HTMLButtonElement>;

  @Input('isItemsRemove') isItemsRemove: number = 0;
  @Output() public numOfItemsChange: EventEmitter<number> = new EventEmitter<number>();

  public plantId: number;
  public plantDetailed: PlantDetailed

  companyName = '';

  productName = 'Fall Limited Editon Sneakers';

  productIntro = `
    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
    outer sole, they'll withstand everything the weather can offer.
  `;

  price = 125.00;

  originalPrice = 250.00;

  discount = '50%';

  numberOfItems = 0;

  numberOfCartItems = 0;
  plant: Plant;


  constructor(
    private _plantsService: PlantsService,
    private _menuService: MenuService
  ) {

  }

  ngOnInit(): void {
    const plantId = parseInt(localStorage.getItem('plantId'));
    this._plantsService.getPlant(plantId).then(
      (response: Plant) => {
        this.plant = response;

        this._plantsService.getPlantDetailed(response.plant_detailed_id).then(
          (response: PlantDetailed) => {
            this.plantDetailed = response;

            console.log(this.plantDetailed)
          }
        ).catch(error => {
          console.log(error);
        });
      });
  }

  ngAfterViewInit(): void {
    if (this.btnAdd) {
      this.btnAdd.nativeElement.style.opacity = '0.5';
      this.btnAdd.nativeElement.style.cursor = 'not-allowed';
    }
  }

  ngOnChanges(): void {
    if (this.isItemsRemove) {
      this.numberOfCartItems = 0;
    }
  }

  public handleClickThumbnail(e: MouseEvent, index: number) {
    const imgElement = e.currentTarget as HTMLImageElement;
    if (this.productThumbnails) {
      const thumbnails = this.productThumbnails.nativeElement.getElementsByTagName('img');
      for (let i = 0; i < thumbnails.length; i++) {
        const thumbnail = thumbnails[i] as HTMLElement;
        thumbnail.style.outline = 'none';
        thumbnail.style.opacity = '1';
      }
    }

    imgElement.style.outline = 'var(--orange) solid 0.2rem';
    imgElement.style.opacity = '0.5';

    if (this.productImage) {
      const images = this.productImage.nativeElement.getElementsByClassName('img');
      for (let i = 0; i < images.length; i++) {
        const image = images[i] as HTMLElement;
        image.style.transform = `translate(-${index * 100}%)`;
        if (i === index) {
          image.style.opacity = '1';
        } else {
          image.style.opacity = '0';
        }
      }
    }
  }

  public handleClickModalThumbnail(e: MouseEvent, index: number) {
    const imgElement = e.currentTarget as HTMLImageElement;
    if (this.productModalThumbnails) {
      const thumbnails = this.productModalThumbnails.nativeElement.getElementsByTagName('img');
      for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].style.outline = 'none';
        thumbnails[i].style.opacity = '1';
      }
    }

    imgElement.style.outline = 'var(--orange) solid 0.2rem';
    imgElement.style.opacity = '0.5';

    if (this.productModalImage) {
      const images = this.productModalImage.nativeElement.getElementsByTagName('img');
      for (let i = 0; i < images.length; i++) {
        images[i].style.transform = `translate(-${index * 100}%)`;
        if (i === index) {
          images[i].style.opacity = '1';
        } else {
          images[i].style.opacity = '0';
        }
      }
    }
  }

  public increase() {
    this.numberOfItems++;
    if (this.btnAdd) {
      this.btnAdd.nativeElement.style.opacity = '';
      this.btnAdd.nativeElement.style.cursor = '';
    }
  }

  public decrease() {
    if (this.numberOfItems > 0) {
      this.numberOfItems--;
      if (this.btnAdd && this.numberOfItems === 0) {
        this.btnAdd.nativeElement.style.opacity = '0.5';
        this.btnAdd.nativeElement.style.cursor = 'not-allowed';
      }
    }
  }

  public addItemsToCart() {
    if (this.numberOfItems === 0) return;
    this.numberOfCartItems += this.numberOfItems;

    this._menuService.updateMenuItems(this.numberOfCartItems);

    this._plantsService.addPlantToCart(this.plant, this._menuService);
  }

  public turnModalOn() {
    if (this.modal && (window.innerWidth / window.innerHeight > 1)) {
      this.modal.nativeElement.style.display = 'block';
    }
  }

  public closeModal() {
    if (this.modal) {
      this.modal.nativeElement.style.display = '';
    }
  }

  public next() {
    if (this.productImage) {
      const images = this.productImage.nativeElement.getElementsByClassName('img');
      for (let i = 0; i < images.length; i++) {
        const image = images[i] as HTMLElement;
        if (!image.style.transform) {
          image.style.transform = 'translate(-100%)';
        } else {
          const transformProp = image.style.transform
          switch (transformProp) {
            case 'translate(-100%)':
              image.style.transform = 'translate(-200%)';
              break;
            case 'translate(-200%)':
              image.style.transform = 'translate(-300%)';
              break;
            default:
              return;
          }
        }
      }
    }
  }

  public previous() {
    if (this.productImage) {
      const images = this.productImage.nativeElement.getElementsByClassName('img');
      for (let i = 0; i < images.length; i++) {
        const image = images[i] as HTMLElement;
        if (!image.style.transform) {
          return;
        } else {
          const transformProp = image.style.transform
          switch (transformProp) {
            case 'translate(-300%)':
              image.style.transform = 'translate(-200%)';
              break;
            case 'translate(-200%)':
              image.style.transform = 'translate(-100%)';
              break;
            case 'translate(-100%)':
              image.style.transform = '';
              break;
            default:
              return;
          }
        }
      }
    }
  }
}
