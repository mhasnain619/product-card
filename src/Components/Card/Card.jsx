import React from "react";
import styles from "./Card.module.css";
import propsType from 'prop-types';
import { FaStar } from "react-icons/fa";


const Card = ({ counts, rating, category, price, imgSrc, title, desc }) => {
  return (
    <div className={styles.divContainer}>
      <div className={styles.imgDiv}>
        <img className={styles.img} src={imgSrc} alt="" />
      </div>
      <h2>{title}</h2>
      <div className={styles.priceAndCategory}>
        <h3>${price}</h3>
        <h3>{category}</h3>
      </div>
      <div className={styles.countReview}>
        <span style={{ color: '#EABE12' }}>Reviews : {rating}</span>
        <h5>Counts : {counts}</h5>
      </div>
      <FaStar style={{ color: '#EABE12' }} />
      <FaStar style={{ color: '#EABE12' }} />
      <FaStar style={{ color: '#EABE12' }} />
      <FaStar style={{ color: '#EABE12' }} />
      <FaStar />
      <p className="desc">{desc}</p>
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
