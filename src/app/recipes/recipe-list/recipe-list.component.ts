import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test',
      'A test Recipe',
      'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
