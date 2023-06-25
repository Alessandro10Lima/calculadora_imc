import React from "react";
import styles from './Formulario.module.css';

    const Formulario = ({ label, value, onChange }) => {
    return (
        <div className={styles.form}>
        <label className={styles.entrada}>{label}:</label>
        <input className={styles.valor} type="number" value={value} onChange={onChange} />
        </div>
    );
    };

export default Formulario;
