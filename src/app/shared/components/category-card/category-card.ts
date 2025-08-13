import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css'
})
export class CategoryCard {
  // Con @Input() recibimos los datos de la categoría del componente padre
  @Input() category: any; // Es buena idea crear una interfaz para Category
}
