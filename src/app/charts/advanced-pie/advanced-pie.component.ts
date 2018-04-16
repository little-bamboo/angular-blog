import {Component, OnInit} from '@angular/core';
import {single, multi} from './data';


@Component({
  selector: 'app-advanced-pie',
  templateUrl: './advanced-pie.component.html',
  styleUrls: ['./advanced-pie.component.scss']
})
export class AdvancedPieComponent implements OnInit {

  single: any[];
  multi: any[];
  view: any[] = [700, 400];

  gradient: true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    (<any>Object).assign(this, {single, multi});
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
