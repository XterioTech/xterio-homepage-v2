import { Image } from "@superrb/next-addons/components";
import {ImageProps} from "@superrb/next-addons/components/image";
import Button, {ButtonVariant} from "@/components/button";

const GameBlock = ({ image, className, blockType, buttonText, buttonUrl, ...props }: ImageProps) => {
    return (
        <div className="game-block">
            <div className="game-block__type">{blockType}</div>
            <Image
              image={image}
              className="game-block__image objFit"
              sizes="(min-width: 63.75em) 33.333vw, 100vw"
            />
            <Button
              href={buttonUrl}
              label={buttonText}
              variants={[ButtonVariant.outline]}
              className="game-block__button"
            />
        </div>
    )
}

export default GameBlock
