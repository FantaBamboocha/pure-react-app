import { useState } from "react";

import commonStyles from "../common/commonButtons.module.scss";
import styles from "./card.module.scss";

const Card = ({ title, price, imageURL, id, handleAddButton }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const likeClick = () => setIsLiked(!isLiked);

  const addClick = () => {
    setIsAdded(!isAdded);
    handleAddButton({ id, title, price, imageURL });
  };

  return (
    <div className={styles.card}>
      <button
        onClick={likeClick}
        className={`${commonStyles["common-button"]} ${styles["like-button"]} ${
          isLiked ? styles.clicked : ""
        } `}
      >
        <span></span>
      </button>
      <img width="133px" height="112px" src={imageURL} alt={title} />
      <h5 className={styles["card-title"]}>{title}</h5>
      <div className={styles["card-description"]}>
        <div className={styles["card-left"]}>
          <span className={styles["price"]}>Цена:</span>
          <b>{price} р.</b>
        </div>
        <button
          onClick={addClick}
          className={`${commonStyles["common-button"]} ${
            styles["add-button"]
          } ${isAdded ? styles.clicked : ""}`}
        >
          <span></span>
        </button>
      </div>
    </div>
  );
};

export default Card;
