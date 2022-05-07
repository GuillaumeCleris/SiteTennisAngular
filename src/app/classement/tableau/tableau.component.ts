import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  @Input() classNames='';
  @Input() data: { [key: string]:any}[] = [];
  @Input() headers: { key: string; label: string }[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
