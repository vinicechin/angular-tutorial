import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;

  getNumbers() {
    if (this.onlyOdd) {
      return this.numbers.reduce(function(arr, num) { 
        if (num % 2 !== 0) arr.push(num); 
        return arr; 
      }, []);
    } else {
      return this.numbers;
    }
  }
}
