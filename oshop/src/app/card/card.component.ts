import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  price: number;

  @Input()
  imgUrl: string = "http://picturetherecipe.com/wp-content/uploads/2020/07/Butter-Chicken-PTR-Featured-680x900.jpg";

  @Input()
  category: string;

  constructor() { }

  ngOnInit(): void {
  }

}
