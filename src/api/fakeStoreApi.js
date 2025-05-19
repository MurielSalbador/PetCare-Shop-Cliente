import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

export const getAllProducts = async () => {
  return [
    {
      id: 1,
      title: 'Alimento Seco para Perros 10kg',
      price: 54.99,
      category: 'alimento',
      image: 'https://nutrican.com.ar/wp-content/uploads/2021/07/mobility-rc.png',
    },
    {
      id: 2,
      title: 'Pelota de Goma Reforzada',
      price: 9.99,
      category: 'juguetes',
      image: 'https://http2.mlstatic.com/D_NQ_NP_800700-MLA45295950793_032021-O.webp',
    },
    {
      id: 3,
      title: 'Correa Ajustable de Nylon',
      price: 15.5,
      category: 'accesorios',
      image: 'https://http2.mlstatic.com/D_NQ_NP_716021-MLU70623130164_072023-O.webp',
    },
    {
      id: 4,
      title: 'Juguete Mordedor de Cuerda',
      price: 7.25,
      category: 'juguetes',
      image: 'https://monococojugueterias.com/cdn/shop/files/MC062.png?v=1717418852&width=1445',
    },
    {
      id: 5,
      title: 'Alimento Húmedo Sabor Pollo',
      price: 3.99,
      category: 'alimento',
      image: 'https://http2.mlstatic.com/D_NQ_NP_769438-MLA75610174054_042024-O.webp',
    },
    {
      id: 6,
      title: 'Cama Acolchada para Perros',
      price: 39.99,
      category: 'descanso',
      image: 'https://m.media-amazon.com/images/I/71sYp9HtX5L.jpg',
    },
    {
      id: 7,
      title: 'Shampoo para Perros Hipoalergénico',
      price: 12.49,
      category: 'higiene',
      image: 'https://acdn-us.mitiendanube.com/stores/001/130/470/products/greenwood-perros-y-gatos-x500-ml-shampoo-7791274200489-613707e8512da6a6b617079399248862-640-0.png',
    },
    {
      id: 8,
      title: 'Collar Reflectante Talla M',
      price: 11.0,
      category: 'accesorios',
      image: 'https://http2.mlstatic.com/D_NQ_NP_885683-MLA47565047631_092021-O.webp',
    },
  ];
};

