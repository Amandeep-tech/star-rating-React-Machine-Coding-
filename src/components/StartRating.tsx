import { useState } from "react";

export default function StarRating(props: { noOfStars?: number }) {
  const { noOfStars = 10 } = props;

  const [stars, setStars] = useState<number[]>(Array(noOfStars).fill(0));
	const [lastClickedIndex, setlastClickedIndex] = useState(-1); // initally not clicked any star/box

  const handleMouseEnter = (index: number) => {
		// index is - on which star we have entered
    const newStars = Array(noOfStars).fill(0);
		// fill stars till this index.
    for (let i = 0; i <= index; i++) {
      if (i <= index) {
        newStars[i] = 1;
      }
    }
    setStars(newStars);
  };

	const handleMouseLeave = () => {
		// if I have'nt clicked anywhere lastly.
		if(lastClickedIndex === -1) {
			setStars(Array(noOfStars).fill(0))
			return;
		};

		// else, get back to previous state of lastClickedIndex.
		const newStars = Array(noOfStars).fill(0);
		for(let i = 0; i <= lastClickedIndex; i++) {
			if(i <= lastClickedIndex) {
				newStars[i] = 1
			}
		}
		setStars(newStars);
	}

	const handleClick = (index: number) => {
		// update the last clicked index.
		setlastClickedIndex(index);
		const newStars = [...stars];
		// fill with color till this index.
		for (let i = 0; i <= index; i++) {
      newStars[i] = 1;
    }
    setStars(newStars);
	}

  return (
    <div className="stars-container">
      {stars.map((star, i) => {
        return (
          <div
						key={i}
            className="square"
						onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
						onMouseLeave={handleMouseLeave}
						style={{
							backgroundColor: star ? "yellow": "white"
						}}
          ></div>
        );
      })}
    </div>
  );
}
