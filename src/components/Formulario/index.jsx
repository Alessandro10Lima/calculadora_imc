import React from "react";
import styles from './Formulario.module.css';

    const Formulario = ({ label, value, onChange }) => {
    return (
        <div>
        <label>{label}:</label>
        <input className={styles.valor} type="number" value={value} onChange={onChange} />
        </div>
    );
    };

export default Formulario;
