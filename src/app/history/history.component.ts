import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [AppService],
})
export class HistoryComponent implements OnInit {
  @Input() historyArray;

  constructor() {}

  ngOnInit() {}
}
