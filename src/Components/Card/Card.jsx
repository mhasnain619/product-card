import React from "react";
import styles from "./Card.module.css";
import propsType from 'prop-types';
import { FaStar } from "react-icons/fa";
import Button from "./Button/Button";


const Card = ({ counts, rating, category, price, imgSrc, title, desc }) => {
  return (
    <div className={styles.divContainer}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={imgSrc} alt="" />
      </div>
      <h2>{title}</h2>
      <div className={styles.priceAndCategory}>
        <h4>${price}</h4>
        <h4>{category}</h4>
      </div>
      <div className={styles.countReview}>
        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
          {rating}
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                style={{ color: i < Math.floor(rating) ? "#EABE12" : "#ccc" }}
              />
            ))}
          </div>

        </span>
        <h5>Counts : {counts}</h5>
      </div>

      <p className="desc">{desc}</p>
      <div>
        <Button name='Buy Now' />

      </div>
    </div>
  );
};

Card.propsType = {
  id: propsType.number.isRequired,
  imgSrc: propsType.string.isRequired,
  title: propsType.string.isRequired,
  desc: propsType.string.isRequired
};

export default Card;
