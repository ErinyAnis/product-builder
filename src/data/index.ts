import { IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: 1,
    title: "Smartphone XYZ",
    description:
      "A high-end smartphone with a sleek design and powerful features. It includes a 6.5-inch OLED display, a 48MP triple camera system, 5G connectivity, and a long-lasting battery. Perfect for photography enthusiasts and tech-savvy individuals who need a reliable device for both work and play.",
    imageURL:
      "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "999.99",
    colors: ["Black", "Silver", "Gold"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 2,
    title: "Laptop ABC",
    description:
      "A lightweight laptop with excellent performance and battery life. Featuring a 14-inch Retina display, Intel Core i7 processor, 16GB RAM, and 512GB SSD. Ideal for professionals and students who require a powerful yet portable computer for their daily tasks and creative projects.",
    imageURL:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1499.99",
    colors: ["Gray", "Blue"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 3,
    title: "Wireless Headphones",
    description:
      "Noise-cancelling wireless headphones with superior sound quality. Equipped with advanced noise-cancellation technology, 30 hours of battery life, and comfortable over-ear design. Perfect for music lovers and professionals who need to focus in noisy environments.",
    imageURL:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "299.99",
    colors: ["Black", "White"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 4,
    title: "Smartwatch",
    description:
      "A stylish smartwatch with health monitoring features. Includes a heart rate monitor, sleep tracking, GPS, and customizable watch faces. Compatible with both Android and iOS devices, making it a great accessory for fitness enthusiasts and tech-savvy individuals.",
    imageURL:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "199.99",
    colors: ["Black", "Rose Gold"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 5,
    title: "Tablet",
    description:
      "A high-resolution tablet with a fast processor. Features a 10.5-inch display, 256GB storage, and support for a stylus pen. Ideal for digital artists, students, and professionals who need a versatile device for work, entertainment, and creative projects.",
    imageURL:
      "https://images.unsplash.com/photo-1464380573004-8ca85a08751a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "499.99",
    colors: ["Silver", "Gold"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1464380573004-8ca85a08751a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: 6,
    title: "Bluetooth Speaker",
    description:
      "A portable Bluetooth speaker with deep bass and crystal-clear sound. Water-resistant design with a 12-hour battery life, making it perfect for outdoor activities and parties. Connects easily to any Bluetooth-enabled device for seamless music streaming.",
    imageURL:
      "https://images.unsplash.com/photo-1594501432907-91214bfdd928?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "99.99",
    colors: ["Red", "Blue", "Black"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1594501432907-91214bfdd928?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
