import { FaStar } from "react-icons/fa";
import s from './Card.module.css'
export default function Star({ color = "grey", handleSelect = () => { }, handleHover = () => { } }) {
    return (
        <FaStar className={s.starRatingStar}
                color={color}
                onMouseOver={handleHover}
                onClick={handleSelect}
        />
    );
}

export { Star };