import { Component, Input } from '@angular/core';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-category-card',
  imports: [],
  templateUrl: './category-card.html',
  styleUrl: './category-card.css',
})
export class CategoryCard {
  // Con @Input() recibimos los datos de la categoría del componente padre
  @Input() category!: Category; // Agregamos el operador de aserción no nulo '!' para indicar que este valor será proporcionado por el padre, ademas de que no es opcional y tambien tiene la interface
}
