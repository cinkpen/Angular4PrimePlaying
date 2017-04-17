import { Injectable } from '@angular/core';
import { Observable, Subject,ReplaySubject } from 'rxjs'


@Injectable()
export class PrimeGeneratorService {
  count = 1;
  maxCount = 100000;
  primeFound = new ReplaySubject<number>();
  stopNow = false;

  constructor() {
    this.count = 1;
  this.start();
  }

  start() {
    this.count++;
    if (this.stopNow)
      return ;  


    if (this.count < this.maxCount) {

      if (this.isPrime(this.count)) {
       
        this.primeFound.next(this.count);
      }
     
      setTimeout(() => { this.start(); }, 0);
    }
  }

  stop(){
    this.stopNow  = true;
  }


  isPrime(aNumber: number): boolean {
    if (aNumber == 2)
      return true;
    let half = aNumber / 2;
 
 
    for (var i = 2; i <= half; i++) {
      if (aNumber % i === 0) {
       
        return false;
      }
    }
    return true;
  }

}
