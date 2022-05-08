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
      title: 'Le club',
      url: 'assets/images/autre_vue.jpg'

    },

    {
      title: 'Les courts',
      url: 'assets/images/courts.JPG'
    },

    {
      title: 'Le local',
      url: 'assets/images/long_club.png'
    },

    {
      title: 'Le court n°1',
      url: 'assets/images/small_terrain.png'
    },

    {
      title: 'Le court n°5',
      url: 
      'assets/images/tennis-7.jpg'
    },

    {
      title: 'Le court n°3',
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
