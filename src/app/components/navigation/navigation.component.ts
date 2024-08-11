import { Component, Input } from '@angular/core';
import { ListItem } from '../../models/list_item';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, CategoryMenuComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  @Input() items:ListItem[] = [];
  @Input() title: string = "";

  

}
