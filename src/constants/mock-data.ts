import black from "../assets/images/black.webp";
import blue from "../assets/images/blue.webp";
import gray from "../assets/images/gray.webp";
import purple from "../assets/images/purple.webp";
import white from "../assets/images/white.webp";
import yellow from "../assets/images/yellow.webp";

type card = {
  image: string;
  title: string;
  id: number;
};

const cardsData: card[] = [
  {
    id: 1,
    image: black,
    title: "black perfume",
  },
  {
    id: 2,
    image: blue,
    title: "blue perfume",
  },
  {
    id: 3,
    image: purple,
    title: "purple perfume",
  },
  {
    id: 4,
    image: white,
    title: "white perfume",
  },
  {
    id: 5,
    image: gray,
    title: "gray perfume",
  },
  {
    id: 6,
    image: yellow,
    title: "yellow perfume",
  },
];

export default cardsData;
