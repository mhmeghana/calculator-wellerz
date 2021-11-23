import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
  display = '0';
  action: string | null = null;
  resultHistory = [];

  constructor(private appService: AppService) {}

  ngOnInit() {}

  resetCalculator() {
    this.display = '0';
  }

  numClick(val) {
    if (this.display === '0') {
      this.display = val.toString();
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action) {
    this.action = action;
    this.display += action;
  }

  calculate() {
    const resultValue = this.appService.calculate(this.display);
    this.display = resultValue.result;
    this.resultHistory = resultValue.history;
  }
}
