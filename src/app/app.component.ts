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

  constructor(private prime: PrimeGeneratorService) {
    setTimeout(() =>
      prime.primeFound.subscribe(prime => this.primes.unshift(prime)), 10000);

  }

  ngOnDestroy(){
      this.prime.stop();
  }

  onStop(){
    this.prime.stop();
  }
}
