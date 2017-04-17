import { Component, OnDestroy} from '@angular/core';
import { PrimeGeneratorService } from './prime-generator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PrimeGeneratorService]
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  primes: number[] = [];
  positions: Position[] = [];



  constructor(private prime: PrimeGeneratorService) {
    setTimeout(() =>
      prime.primeFound.subscribe(prime => {
        this.positions.push(new Position(prime%1024, prime/1024));

        this.primes.unshift(prime);
        while  (this.primes.length > 3){
          this.primes.pop();
        }
      }), 1000);

  }

  ngOnDestroy(){
      this.prime.stop();
  }

  onStop(){
    this.prime.stop();
  }
}

export class Position{
  constructor(public x, public y){

  }
}
