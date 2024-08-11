import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategoryMenuComponent],
  templateUrl: './category.component.html',
  styles: ``
})
export class CategoryComponent {
  category: string | null = null;

  constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe( params => {
      this.category = params.get('category')
    } )
  }

}
