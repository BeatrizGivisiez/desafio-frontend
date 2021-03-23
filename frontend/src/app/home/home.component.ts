import { Component, OnInit } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit() {
  }

}
