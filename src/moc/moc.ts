import chirt1 from "../public/l_20222-w2ca33z8-lrw-98-76-97-189_a.webp";
import chirt2 from "../public/l_20222-w2ca33z8-lrw-98-76-97-189_a1.webp";
import chirt3 from "../public/l_20222-w2ca33z8-lrw-98-76-97-189_a2.webp";
import chirt4 from "../public/l_20222-w2ca33z8-lrw-98-76-97-189_a3.webp";
import chirt5 from "../public/l_20222-w2ca33z8-lrw_u.webp";
import chirt1_2 from "../public/l_20222-w2ca46z8-sld_u.webp";
import chirt2_2 from "../public/l_20222-w2ca46z8-sld-100-80-89-188_a.webp";
import chirt3_2 from "../public/l_20222-w2ca46z8-sld-100-80-89-188_a1.webp";
import chirt4_2 from "../public/l_20222-w2ca46z8-sld-100-80-89-188_a4.webp";
import chirt5_2 from "../public/l_20222-w2ca46z8-sld-100-80-89-188_a3.webp";
import chirt1_3 from "../public/l_20222-w2ck88z8-s9f-99-75-93-185_a.webp";
import chirt2_3 from "../public/l_20222-w2ck88z8-s9f-99-75-93-185_a1.webp";
import chirt3_3 from "../public/l_20222-w2ck88z8-s9f-99-75-93-185_a2.webp";
import chirt4_3 from "../public/l_20222-w2ck88z8-s9f-99-75-93-185_a3.webp";
import chirt5_3 from "../public/l_20222-w2ck88z8-s9f_u.webp";
import chirt1_4 from "../public/l_20222-w2cl27z8-sm0-96-81-93-190_a.webp";
import chirt2_4 from "../public/l_20222-w2cl27z8-sm0-96-81-93-190_a1.webp";
import chirt3_4 from "../public/l_20222-w2cl27z8-sm0-96-81-93-190_a2.webp";
import chirt4_4 from "../public/l_20222-w2cl27z8-sm0-96-81-93-190_a3.webp";
import chirt5_4 from "../public/l_20222-w2cl27z8-sm0_u.webp";
import pants from "../public/l_20222-w2j298z8-qla-99-75-93-185_a.webp";
import pants1 from "../public/l_20222-w2j298z8-qla-99-75-93-185_a1.webp";
import pants2 from "../public/l_20222-w2j298z8-qla-99-75-93-185_a2.webp";
import pants3 from "../public/l_20222-w2j298z8-qla-99-75-93-185_a3.webp";
import pants4 from "../public/l_20222-w2j298z8-qla_u.webp";
import mocImage from "../public/moc_image.webp";
import { StaticImageData } from "next/image";

export type mocTypes = {
  description: string;
  price: number;
  currency: string;
  images: StaticImageData[];
  id: number;
  article: string;
};

export type produtsDataType = {
  description: string;
  price: number;
  currency: string;
  images: StaticImageData[];
  id: string;
  article: string;
};

export type productsTypes = {
  data: produtsDataType[];
  total: number;
};
export type allProductsTypes = {
  [key: string]: productsTypes;
};

export type blogPostsTypes = {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  date: Date;
};

export const mocProducts: mocTypes[] = [
  {
    description: "Рубашка 1",
    price: 2500,
    currency: "$",
    images: [chirt1, chirt2, chirt3, chirt4, chirt5],
    id: 1,
    article: "0001",
  },
  {
    description: "Рубашка 2",
    price: 1955,
    currency: "$",
    images: [chirt1_2, chirt2_2, chirt3_2, chirt4_2, chirt5_2],
    id: 2,
    article: "0002",
  },
  {
    description: "Свитер 1",
    price: 2333,
    currency: "$",
    images: [chirt1_3, chirt2_3, chirt3_3, chirt4_3, chirt5_3],
    id: 3,
    article: "0003",
  },
  {
    description: "Свитер 2",
    price: 1222,
    currency: "$",
    images: [chirt1_4, chirt2_4, chirt3_4, chirt4_4, chirt5_4],
    id: 4,
    article: "0004",
  },
  {
    description: "Брюки",
    price: 3333,
    currency: "$",
    images: [pants, pants1, pants2, pants3, pants4],
    id: 5,
    article: "0005",
  },
  {
    description: "Название вашего товара будет здесь",
    price: 2500,
    currency: "$",
    images: [chirt1, chirt2, chirt3, chirt4, chirt5],
    id: 6,
    article: "0006",
  },
  {
    description: "Название вашего товара будет здесь",
    price: 2500,
    currency: "$",
    images: [chirt1, chirt2, chirt3, chirt4, chirt5],
    id: 7,
    article: "0007",
  },
  {
    description: "Название вашего товара будет здесь",
    price: 2500,
    currency: "$",
    images: [chirt1, chirt2, chirt3, chirt4, chirt5],
    id: 8,
    article: "0008",
  },
];

export type productsInCategory = {
  data: produtsDataType[];
  total: number;
};

export const categoriesMoc = [
  { name: "category1", id: "category1" },
  { name: "category2", id: "category2" },
  { name: "category3", id: "category3" },
  { name: "category4", id: "category4" },
  { name: "category5", id: "category5" },
];

export const category1: productsInCategory = {
  data: [
    {
      description: "Рубашка 1",
      price: 2500,
      currency: "$",
      images: [chirt1, chirt2, chirt3, chirt4, chirt5],
      id: "1aa",
      article: "0001",
    },
    {
      description: "Рубашка 2",
      price: 1955,
      currency: "$",
      images: [chirt1_2, chirt2_2, chirt3_2, chirt4_2, chirt5_2],
      id: "2aa",
      article: "0002",
    },
    {
      description: "Свитер 1",
      price: 2333,
      currency: "$",
      images: [chirt1_3, chirt2_3, chirt3_3, chirt4_3, chirt5_3],
      id: "3aa",
      article: "0003",
    },
    {
      description: "Свитер 2",
      price: 1222,
      currency: "$",
      images: [chirt1_4, chirt2_4, chirt3_4, chirt4_4, chirt5_4],
      id: "4aa",
      article: "0004",
    },
    {
      description: "Брюки",
      price: 3333,
      currency: "$",
      images: [pants, pants1, pants2, pants3, pants4],
      id: "5aa",
      article: "0005",
    },
    {
      description: "Название вашего товара будет здесь",
      price: 2500,
      currency: "$",
      images: [chirt1, chirt2, chirt3, chirt4, chirt5],
      id: "6aa",
      article: "0006",
    },
    {
      description: "Название вашего товара будет здесь",
      price: 2500,
      currency: "$",
      images: [chirt1, chirt2, chirt3, chirt4, chirt5],
      id: "7aa",
      article: "0007",
    },
    {
      description: "Название вашего товара будет здесь",
      price: 2500,
      currency: "$",
      images: [chirt1, chirt2, chirt3, chirt4, chirt5],
      id: "8aa",
      article: "0008",
    },
  ],
  total: 8,
};
export const category2 = {
  data: [
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "1ba",
      article: "1ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "2ba",
      article: "2ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "3ba",
      article: "3ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "4ba",
      article: "4ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "5ba",
      article: "5ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "6ba",
      article: "6ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "7ba",
      article: "7ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "8ba",
      article: "8ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "9ba",
      article: "9ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "10ba",
      article: "10ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "11ba",
      article: "11ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "12ba",
      article: "12ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "13ba",
      article: "13ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "14ba",
      article: "14ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "15ba",
      article: "15ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "16ba",
      article: "16ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "17ba",
      article: "17ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "18ba",
      article: "18ba",
    },
  ],
  total: 18,
};
export const category3 = {
  data: [
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "1ca",
      article: "1ca",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "2ca",
      article: "2ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "3ca",
      article: "3ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "4ca",
      article: "4ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "5ca",
      article: "5ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "6ca",
      article: "6ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "7ca",
      article: "7ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "8ca",
      article: "8ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "9ca",
      article: "9ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "10ca",
      article: "10ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "11ca",
      article: "11ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "12ca",
      article: "12ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "13ca",
      article: "13ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "14ca",
      article: "14ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "15ca",
      article: "15ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "16ca",
      article: "16ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "17ca",
      article: "17ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "18ca",
      article: "18ba",
    },
  ],
  total: 18,
};
export const category4 = {
  data: [
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "1da",
      article: "1ca",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "2da",
      article: "2ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "3da",
      article: "3ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "4da",
      article: "4ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "5da",
      article: "5ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "6da",
      article: "6ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "7da",
      article: "7ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "8da",
      article: "8ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "9da",
      article: "9ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "10da",
      article: "10ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "11da",
      article: "11ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "12da",
      article: "12ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "13da",
      article: "13ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "14da",
      article: "14ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "15da",
      article: "15ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "16da",
      article: "16ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "17da",
      article: "17ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "18da",
      article: "18ba",
    },
  ],
  total: 18,
};
export const category5 = {
  data: [
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "1ea",
      article: "1ca",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "2ea",
      article: "2ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "3ea",
      article: "3ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "4ea",
      article: "4ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "5ea",
      article: "5ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "6ea",
      article: "6ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "7ea",
      article: "7ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "8ea",
      article: "8ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "9ea",
      article: "9ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "10ea",
      article: "10ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "11ea",
      article: "11ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "12ea",
      article: "12ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "13ea",
      article: "13ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "14ea",
      article: "14ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "15ea",
      article: "15ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "16ea",
      article: "16ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "17ea",
      article: "17ba",
    },
    {
      description: "Название вашего товара",
      price: 9999,
      currency: "$",
      images: [mocImage, mocImage, mocImage, mocImage, mocImage],
      id: "18ea",
      article: "18ba",
    },
  ],
  total: 18,
};

export const allProducts: allProductsTypes = {
  category1,
  category2,
  category3,
  category4,
  category5,
};

export const blogPosts: blogPostsTypes[] = [
  {
    id: 1,
    title: "Новые тренды в мире кроссовок",
    description:
      "Рассказываем про новые модели кроссовок, которые уже успели завоевать сердца модников.",
    content:
      "Новые кроссовки в стиле 90-х от Puma, линейка Adidas Originals NMD, которая уже давно стала классикой и многие другие модели - обо всем этом читайте в нашей статье.",
    imageUrl: "https://example.com/images/sneakers.jpg",
    date: new Date("2022-02-25"),
  },
  {
    id: 2,
    title: "Тренды сезона: свитера с высоким воротником",
    description:
      "Рассказываем о модных свитерах с высоким воротником, которые стали настоящим хитом сезона.",
    content:
      "Свитеры с высоким воротником - это не только модно, но и практично. Они помогут сохранить тепло в холодные дни, а также добавят стильного шарма вашему образу. В статье мы рассказываем про самые интересные модели от известных брендов.",
    imageUrl: "https://example.com/images/sweaters.jpg",
    date: new Date("2022-02-20"),
  },
  {
    id: 3,
    title: "Новые модели сумок от Louis Vuitton",
    description:
      "Рассказываем про новые модели сумок от Louis Vuitton, которые уже успели покорить сердца модников.",
    content:
      "Louis Vuitton - это не только легендарный бренд, но и источник вдохновения для многих дизайнеров. В новой коллекции сумок можно увидеть интересные новинки и переиздания классических моделей. Рассказываем про самые яркие и запоминающиеся сумки.",
    imageUrl: "https://example.com/images/handbags.jpg",
    date: new Date("2022-02-15"),
  },
  {
    id: 4,
    title: "Новая коллекция обуви на лето",
    description:
      "Представляем новую коллекцию обуви на лето 2022 года. В ней вы найдете стильные и удобные модели для любого повода.",
    content:
      "Представляем новую коллекцию обуви на лето 2022 года. В ней вы найдете стильные и удобные модели для любого повода.",

    imageUrl: "/images/summer-shoes.jpg",
    date: new Date(2022, 5, 15),
  },
  {
    id: 5,
    title: "Тренды осени 2021",
    description:
      "Какие тенденции будут актуальны в этом сезоне? Что выбрать, чтобы быть в тренде? Обо всем этом вы узнаете из нашей статьи.",
    content:
      "Представляем новую коллекцию обуви на лето 2022 года. В ней вы найдете стильные и удобные модели для любого повода.",

    imageUrl: "/images/fall-trends.jpg",
    date: new Date(2021, 8, 1),
  },
  {
    id: 6,
    title: "Мода на платья-миди",
    description:
      "Платья-миди стали настоящим хитом этого лета. В нашей статье вы найдете лучшие модели и советы по выбору аксессуаров.",
    content:
      "Представляем новую коллекцию обуви на лето 2022 года. В ней вы найдете стильные и удобные модели для любого повода.",

    imageUrl: "/images/midi-dresses.jpg",
    date: new Date(2021, 6, 10),
  },
  {
    id: 7,
    title: "Новые тренды в мире обуви",
    description:
      "Что нового появилось на рынке обуви? Какие модели станут наиболее популярными в этом сезоне? Обо всем этом вы узнаете из нашей статьи.",
    content:
      "Представляем новую коллекцию обуви на лето 2022 года. В ней вы найдете стильные и удобные модели для любого повода.",

    imageUrl: "/images/new-shoe-trends.jpg",
    date: new Date(2021, 8, 20),
  },
  {
    id: 8,
    title: "Стильные вариации джинсовой юбки",
    description:
      "Джинсовая юбка — вечный хит, который никогда не выходит из моды. В нашей статье мы расскажем обо всех вариациях этой модели и советы по выбору.",
    content:
      "Представляем новую коллекцию обуви на лето 2022 года. В ней вы найдете стильные и удобные модели для любого повода.",

    imageUrl: "/images/denim-skirts.jpg",
    date: new Date(2021, 7, 5),
  },
];

export const authToken = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE2Nzc3NjM5MTYsImV4cCI6MTY3Nzc2NzUxNn0.QyK3Yw5z_NngzQe8kt_NKfaqeA7fpKUC3X4uypUwa1M",
};
