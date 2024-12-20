<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonIcon, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonText, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barcodeOutline, closeOutline } from 'ionicons/icons';
import * as JsBarcode from 'jsbarcode';
import { products } from 'src/app/data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonBackButton, IonButtons, IonButton, IonIcon, IonList, IonItem,IonThumbnail, IonImg,IonLabel, IonText, IonModal]
})
export class ProductsPage implements OnInit {
  items:any[] =[];
  itemModel: any = {};
  showBarcode = false;
  currency = 'R';

  constructor() { 
    addIcons({ barcodeOutline, closeOutline});
  }

  ngOnInit() {
    this.items = [...products];
  }

  getBarcodeData(item: any){
    this.itemModel = { ...item };
    this.showBarcode = true;

    setTimeout(() => {
      this.getBarcode(item.barcode);
    }), 500
  }

  getBarcode(barcode: string){
    JsBarcode('#barcode', barcode,{
     
      lineColor: "#0aa",
      width:4,
      height:200,
      displayValue: false
    })
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton, IonIcon, IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonText, IonModal } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barcodeOutline, closeOutline } from 'ionicons/icons';
import * as JsBarcode from 'jsbarcode';
import { products } from 'src/app/data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonBackButton, IonButtons, IonButton, IonIcon, IonList, IonItem,IonThumbnail, IonImg,IonLabel, IonText, IonModal]
})
export class ProductsPage implements OnInit {
  items:any[] =[];
  itemModel: any = {};
  showBarcode = false;
  currency = 'R';

  constructor() { 
    addIcons({ barcodeOutline, closeOutline});
  }

  ngOnInit() {
    this.items = [...products];
  }

  getBarcodeData(item: any){
    this.itemModel = { ...item };
    this.showBarcode = true;

    setTimeout(() => {
      this.getBarcode(item.barcode);
    }), 500
  }

  getBarcode(barcode: string){
    JsBarcode('#barcode', barcode,{
     
      lineColor: "#0aa",
      width:4,
      height:200,
      displayValue: false
    })
  }

}
>>>>>>> 8fee7a219a6936a964153dfcf78bf4c58fdb54f1
