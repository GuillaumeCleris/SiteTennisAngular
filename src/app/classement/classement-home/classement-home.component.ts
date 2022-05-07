import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classement-home',
  templateUrl: './classement-home.component.html',
  styleUrls: ['./classement-home.component.css']
})
export class ClassementHomeComponent implements OnInit {
  data = [
    { classement: 1, nom:'CLERIS', prenom:'Guillaume', nbpoints: 10 },
    { classement: 2, nom:'CHAMBRAUD', prenom:'Elie', nbpoints: 5 }
  ];

  headers = [
    { key: 'classement', label: 'Classement' },
    { key: 'nom', label: 'Nom' },
    { key: 'prenom', label: 'Prenom' },
    { key: 'nbpoints', label: 'Nombre de Points'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
