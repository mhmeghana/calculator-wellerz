import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  resultArray = [];
  constructor() {}

  calculate(display) {
    let result = eval(display);

    let returnValue = {
      eachHistory: '',
    };
    returnValue.eachHistory = display + '=' + result;
    this.resultArray.push(returnValue);

    return { history: this.resultArray, result: result };
  }
}
