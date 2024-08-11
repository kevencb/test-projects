import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListItem } from './models/list_item';
import { CategoryComponent } from './components/category/category.component';
import { CategoryMenuComponent } from "./components/category-menu/category-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, CategoryComponent, CategoryMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-projects';

/*   listItems: ListItem[] = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About', link: '/about' },
    { id: 3, text: 'Contact', link: '/contact' },
  ]; */

  listItems: ListItem[] = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About', link: '/about' },
    { id: 3, text: 'Contact', link: '/contact' },
    { id: 4, text: 'Categories', link: '/categories' },
  ];

  contentText = "Vengo del Componente Padre"
}
