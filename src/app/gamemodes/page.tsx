"use client";

import { TextImage } from "@/types";
import { ImageButton } from "@/components/ImageButton"
export default async function Gamemodes() {
    return <RenderedGamemodes images={[{text: "test", fontSize: 50, imageURL: "https://www.appily.com/sites/default/files/styles/max_2000/public/images/hero/college/198419_hero.jpg?itok=yvr7bs_x"}]}/>;
}
  
const RenderedGamemodes = ({ images }: {images: TextImage[]}) => {
    return (
        <ImageButton text={images[0].text} imageURL={images[0].imageURL} dimensions={ {width: 320, height: 240}} fontSize={images[0].fontSize}></ImageButton>
    );
}