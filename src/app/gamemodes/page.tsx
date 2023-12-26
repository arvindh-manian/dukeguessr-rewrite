import { ModeImage } from "@/types";
import { ModeButton } from "@/components/modeButton"
export default async function Gamemodes() {
    return <RenderedGamemodes images={[{text: "test", imageURL: "https://www.appily.com/sites/default/files/styles/max_2000/public/images/hero/college/198419_hero.jpg?itok=yvr7bs_x"}]}/>;
}
  
const RenderedGamemodes = ({ images }: {images: ModeImage[]}) => {
    return (
        <ModeButton text={images[0].text} imageURL={images[0].imageURL}></ModeButton>
    );
}