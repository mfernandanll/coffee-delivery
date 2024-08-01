import coffee from "../assets/Coffee.png"
import coffee1 from "../assets/Coffee (1).png"
import coffee2 from "../assets/Coffee (2).png"
import coffee3 from "../assets/Coffee (3).png"
import coffee4 from "../assets/Coffee (4).png"
import coffee5 from "../assets/Coffee (5).png"
import coffee6 from "../assets/Coffee (6).png"
import coffee7 from "../assets/Coffee (7).png"
import coffee8 from "../assets/Coffee (8).png"
import coffee9 from "../assets/Coffee (9).png"
import coffee10 from "../assets/Coffee (10).png"
import coffee11 from "../assets/Coffee (11).png"
import coffee12 from "../assets/Coffee (12).png"
import coffee13 from "../assets/Coffee (13).png"

export interface Coffee {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  tags: string[];
  imgPath: string;
}

export const coffees: Coffee[] = [
  {
    id: '1',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional'],
    imgPath: coffee
  },
  {
    id: '2',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional'],
    imgPath: coffee1
  },
  {
    id: '3',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional'],
    imgPath: coffee2
  },
  {
    id: '4',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional', 'gelado'],
    imgPath: coffee3
  },
  {
    id: '5',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional', 'com leite'],
    imgPath: coffee4
  },
  {
    id: '6',
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional', 'com leite'],
    imgPath: coffee5
  },
  {
    id: '7',
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional', 'com leite'],
    imgPath: coffee6
  },
  {
    id: '8',
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional', 'com leite'],
    imgPath: coffee7
  },
  {
    id: '9',
    name: 'Macchiato 2',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional', 'com leite'],
    imgPath: coffee8
  },
  {
    id: '10',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    quantity: 0,
    tags: ['tradicional', 'com leite'],
    imgPath: coffee9
  },
  {
    id: '11',
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    quantity: 0,
    tags: ['especial', 'alcoolico', 'gelado'],
    imgPath: coffee10
  },
  {
    id: '12',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    quantity: 0,
    tags: ['especial'],
    imgPath: coffee11
  },
  {
    id: '13',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    quantity: 0,
    tags: ['especial'],
    imgPath: coffee12
  },
  {
    id: '14',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    quantity: 0,
    tags: ['especial', 'alcoolico'],
    imgPath: coffee13
  },
]