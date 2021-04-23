import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  names = [
    "Ana",
    "Jhon",
    "Fábio",
    "Torquato"
  ];

  cities = [
    { name: "São Paulo", state: "SP" },
    { name: "Recife", state: "PE" },
    { name: "Boa Vista", state: "RR" }
  ]




}
