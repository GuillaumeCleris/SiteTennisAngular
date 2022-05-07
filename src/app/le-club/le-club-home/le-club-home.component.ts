import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-le-club-home',
  templateUrl: './le-club-home.component.html',
  styleUrls: ['./le-club-home.component.css']
})
export class LeClubHomeComponent implements OnInit {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'assets/images/autre_vue.jpg'

    },

    {
      title: 'At the Mountain',
      url: 'assets/images/courts.JPG'
    },

    {
      title: 'At the City',
      url: 'assets/images/long_club.png'
    },

    {
      title: 'At the Country Side',
      url: 'assets/images/small_terrain.png'
    },

    {
      title: 'At the Beach',
      url: 
      'assets/images/tennis-7.jpg'
    },

    {
      title: 'At the Mountain',
      url: 
      'assets/images/terrain2.png'
    }
   
  ];

  checkWindowIndex(index:number){
    return Math.abs(this.currentPage-index) < 5;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
