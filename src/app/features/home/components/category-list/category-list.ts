import { Component } from '@angular/core';
import { CategoryCard } from '../../../../shared/components/category-card/category-card';

@Component({
  selector: 'app-category-list',
  imports: [CategoryCard],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryList {
  // Array de categorías de ejemplo (aquí iría la llamada al backend que posteriormente se realizara con nodejs y express)
  categories = [
    {
      id: 1,
      name: 'Laptops y Ordenadores',
      image: 'https://cdn.pixabay.com/photo/2016/09/20/09/52/macbook-1682333_1280.jpg'
    },
    {
      id: 2,
      name: 'Smartphones y Tablets',
      image: 'https://cdn.pixabay.com/photo/2023/11/27/12/12/samsung-galaxy-8397395_1280.jpg'
    },
    {
      id: 3,
      name: 'Accesorios y Periféricos',
      image: 'https://cdn.pixabay.com/photo/2017/08/25/11/47/headphones-2680482_1280.jpg'
    }
  ];
}
