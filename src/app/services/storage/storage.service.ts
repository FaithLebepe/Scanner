<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key: string, value: string) {
    Preferences.set({ key, value});
  }

  getStorage(key: string) {
    return Preferences.get({ key });
  }

  removeStorage(key: string){
    Preferences.remove({ key });
  }
}
=======
import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key: string, value: string) {
    Preferences.set({ key, value});
  }

  getStorage(key: string) {
    return Preferences.get({ key });
  }

  removeStorage(key: string){
    Preferences.remove({ key });
  }
}
>>>>>>> 8fee7a219a6936a964153dfcf78bf4c58fdb54f1
