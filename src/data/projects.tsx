import { ProjectProps } from "../components/Project/Project";

import { GifttoBar, RecipeBar, TypedashBar } from "../components/Svgs/barcodes";
import {
  GifttoBraille,
  RecipeBraille,
  TypedashBraille,
} from "../components/Svgs/braille";
import { GifttoQr, RecipeQr, TypedashQr } from "../components/Svgs/qrcodes";
import typedash from "/typedash.webp";
import recipebook from "/recipebook.webp";
import giftto from "/giftto.webp";

const projectsData: ProjectProps[] = [
  {
    name: "giftto",
    qrCode: <GifttoQr />,
    barCode: <GifttoBar />,
    brailleName: <GifttoBraille />,
    endYear: 2022,
    image: giftto,
    demoLink: "https://giftto.ru",
  },
  {
    name: "recipe book",
    qrCode: <RecipeQr />,
    barCode: <RecipeBar />,
    brailleName: <RecipeBraille />,
    endYear: 2022,
    image: recipebook,
    demoLink: "https://recipe-exchange-app.vercel.app/",
    codeLink: "https://github.com/ruwpy/recipebook",
  },
  {
    name: "typedash",
    qrCode: <TypedashQr />,
    barCode: <TypedashBar />,
    brailleName: <TypedashBraille />,
    endYear: 2023,
    image: typedash,
    demoLink: "https://typedash.vercel.app/",
    codeLink: "https://github.com/ruwpy/typedash",
  },
];

export default projectsData;
