import { ProjectProps } from "../components/Project/Project";

import {
  GifttoBar,
  RecipeBar,
  TypedashBar,
  WthrBar,
} from "../components/Svgs/barcodes";
import {
  GifttoBraille,
  RecipeBraille,
  TypedashBraille,
  WthrBraille,
} from "../components/Svgs/braille";
import {
  GifttoQr,
  RecipeQr,
  TypedashQr,
  WthrQr,
} from "../components/Svgs/qrcodes";
import typedash from "/typedash.webp";

const projectsData: ProjectProps[] = [
  {
    name: "giftto",
    qrCode: <GifttoQr />,
    barCode: <GifttoBar />,
    brailleName: <GifttoBraille />,
    endYear: 2022,
    image: "",
    demoLink: "https://giftto.ru",
  },
  {
    name: "recipe book",
    qrCode: <RecipeQr />,
    barCode: <RecipeBar />,
    brailleName: <RecipeBraille />,
    endYear: 2022,
    image: "",
    demoLink: "https://recipe-exchange-app.vercel.app/",
    codeLink: "https://github.com/ruwpy/recipebook",
  },
  {
    name: "wthr3d",
    qrCode: <WthrQr />,
    barCode: <WthrBar />,
    brailleName: <WthrBraille />,
    endYear: 2023,
    image: "",
    demoLink: "a",
    codeLink: "a",
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
