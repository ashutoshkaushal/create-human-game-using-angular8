import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QService {
  ar=[];
  constructor() { }
  getQuality(a)
  {
    this.ar.push(a);
  }
  giveQuality()
  {
    return this.ar;
  }
}
