import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonContent, IonItem, IonLabel, IonText, IonThumbnail, IonListHeader, IonRow, IonCol, IonCard, IonToast, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { bagHandleOutline, cartOutline, checkmarkCircle,  listOutline, scanOutline } from 'ionicons/icons';
import { CartService } from '../services/cart/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar,IonButtons, IonButton, IonIcon,  IonContent, IonItem, IonLabel, IonText, IonThumbnail, IonListHeader, IonRow, IonCol, IonCard, IonToast, IonBadge, RouterLink],
})
export class HomePage implements OnInit, OnDestroy {

  isToast = false;
  toastData: any = {};
  totalItems: number = 0;
  cartSub!: Subscription;
  private cartService = inject(CartService);

  constructor() {
    addIcons({ cartOutline, scanOutline, listOutline, checkmarkCircle, bagHandleOutline });
  }

  ngOnInit(){
    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        console.log(cart);
        this.totalItems = cart ? cart?.totalItem : 0;
      }
    });
  }

  async scanBarcode(){
    try {
      const code = await this.cartService.startScan();
      if(!code){
        this.isToast = true;
        this.toastData = {
          color: 'danger',
          message:  'No such barcode is available'
        };
        return;
      }

      console.log(code);
      this.cartService.addItemByBarcode(code)

    } catch(e){
      console.log(e);
    }
  }

  async scanAndPay(){
    try {
      const code = await this.cartService.startScan(0);
      console.log(code);

      if(!code){
        this.isToast = true;
        this.toastData = {
          color: 'danger',
          message: 'Error: Please try again'
        };
        return;
      }

      this.isToast = true;
      this.toastData = {
        color: 'success',
        message: 'Payment successful'
      };
      
    } catch(e){
      console.log(e);
    }
  }

  ngOnDestroy(): void {
    if(this.cartSub) this.cartSub.unsubscribe();
  }
}
