
export interface Product {
  id: string;
  name: string;
  category: 'SSD' | 'RAM' | 'GPU' | 'CPU' | 'Fonte' | 'Cooler';
  description: string;
  links: {
    amazon?: string;
    mercadolivre?: string;
    shopee?: string;
  };
}

export interface Guide {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
}
