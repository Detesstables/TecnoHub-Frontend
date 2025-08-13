import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { CategoryList } from './components/category-list/category-list';

@Component({
  selector: 'app-home',
  imports: [Navbar, CategoryList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // Array de productos de ejemplo (aquí iría la llamada al backend)
  products = [
    {
      id: 1,
      name: 'Smartphone Pro X',
      description: 'El último modelo con la mejor cámara y procesador.',
      price: 999.99,
      image: 'https://cdn.pixabay.com/photo/2023/11/27/12/12/samsung-galaxy-8397395_1280.jpg'
    },
    {
      id: 2,
      name: 'Laptop Gamer 15"',
      description: 'Potente para tus juegos y tareas de alta demanda.',
      price: 1500.00,
      image: 'https://cdn.pixabay.com/photo/2016/09/20/09/52/macbook-1682333_1280.jpg'
    },
    {
      id: 3,
      name: 'Auriculares Inalámbricos',
      description: 'Sonido de alta fidelidad para tu música.',
      price: 120.50,
      image: 'https://cdn.pixabay.com/photo/2017/08/25/11/47/headphones-2680482_1280.jpg'
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Monitorea tu salud y recibe notificaciones.',
      price: 249.99,
      image: 'https://cdn.pixabay.com/photo/2018/06/15/11/16/smart-watch-3476483_1280.jpg'
    }
  ];
}
