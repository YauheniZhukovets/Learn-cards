import { useState } from "react";
import Star from "./Star";
import s from './Card.module.css'
export default function StarRating({ numTotalStars = 5, initialRating = 0 }) {
    const [numSelectedStars, setNumSelectedStars] = useState(initialRating);
    const [numHoveringStars, setNumHoveringStars] = useState(0);

    const [isUserHovering, setIsUserHovering] = useState(false);

    const getColor=(isUserHovering:any, i:any, numSelectedStars:number, numHoveringStars:any)=> {
        const threshold = isUserHovering ? numHoveringStars : numSelectedStars;
        return i < threshold ? "rgba(190, 47, 65)" : " #5b5858";
    }


    return (
        <div className={s.starRating}>
            <div
                onMouseEnter={() => setIsUserHovering(true)}
                onMouseLeave={() => setIsUserHovering(false)}
            >
                {Array.from({ length: numTotalStars }).map((e, i) => (
                    <Star
                        key={i}
                        color={getColor(
                            isUserHovering,
                            i,
                            numSelectedStars,
                            numHoveringStars
                        )}
                        handleSelect={() => setNumSelectedStars(i + 1)}
                        handleHover={() => setNumHoveringStars( i + 1)}
                    />
                ))}
            </div>
            {/*<div className="label">rating {numSelectedStars}</div>*/}
        </div>
    );
}

// export { StarRating };