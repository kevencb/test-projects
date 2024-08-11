import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-menu.component.html',
  styles: ``
})
export class CategoryMenuComponent {

  isMenuOpen: boolean = false;

  categories: Category[] = [
    {
      name: "Science Fiction",
      path: "science-fiction"
    },
    {
      name: "Fantasy",
      path: "fantasy"
    },
    {
      name: "History",
      path: 'history'
    }
  ]

  toggleMenu(event:Event){
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
