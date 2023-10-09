import { useState } from "react";

import commonStyles from "../common/commonButtons.module.scss";
import styles from "./card.module.scss";

const Card = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const likeClick = () => setIsLiked(!isLiked);
  const addClick = () => setIsAdded(!isAdded);

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
      <img
        width="133px"
        height="112px"
        src="https://sportoriginal.by/upload/resize_cache/webp/iblock/e46/finpym3g1cwvytyo1rozsnw8o6fttpfi.webp"
        alt="sneakers"
      />
      <h5 className={styles["card-title"]}>
        Мужские Кроссовки Nike Blazer Mid Suede
      </h5>
      <div className={styles["card-description"]}>
        <div className={styles["card-left"]}>
          <span className={styles["price"]}>Цена:</span>
          <b>12999 р.</b>
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
