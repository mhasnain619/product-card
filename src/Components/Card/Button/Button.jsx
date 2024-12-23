import React from 'react'
import styles from './Button.module.css'
const Button = ({ name }) => {
    return (
        <div>
            <button className={styles.buttonpo}>{name}</button>
        </div>
    )
}

export default Button
