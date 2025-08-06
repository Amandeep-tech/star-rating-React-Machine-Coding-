import { useState } from "react";

export default function StarRating(props: { noOfStars?: number }) {
  const { noOfStars = 10 } = props;

  const [stars, setStars] = useState<number[]>(Array(noOfStars).fill(0));
	const [lastClickedIndex, setlastClickedIndex] = useState(-1); // initally not clicked any star/box

	const getFilledStars = (index: number) => {
		const arr = Array.from({ length: noOfStars }, (_, i) => {
			return i <= index ? 1 : 0
		})
		return arr;
	}

  const handleMouseEnter = (index: number) => {
		// fill stars till this index.
    const filledStars = getFilledStars(index);
    setStars(filledStars);
  };

	const handleMouseLeave = () => {
		// if I have'nt clicked anywhere lastly.
		if(lastClickedIndex === -1) {
			setStars(Array(noOfStars).fill(0))
			return;
		};

		// else, get back to previous state of lastClickedIndex.
		const lastFilledStars = getFilledStars(lastClickedIndex)
		setStars(lastFilledStars);
	}

	const handleClick = (index: number) => {
		// update the last clicked index.
		setlastClickedIndex(index);
		// fill with color till this index.
    setStars(getFilledStars(index));
	}

  return (
    <div className="stars-container">
      {stars.map((star, i) => {
        return (
          <div
						key={i}
            className={`square ${star ? "filled": "not_filled"}`}
						onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
						onMouseLeave={handleMouseLeave}
          ></div>
        );
      })}
    </div>
  );
}
