import React from "react";
import styles from "./Classificado.module.css";
import abaixodopesoimage from "../Images/abaixodopeso.png";
import pesonormalimage from "../Images/pesonormal.png";
import acimadopesoimage from "../Images/acimadopeso.png";
import obesidade1image from "../Images/obesidade1.png";
import obesidade2image from "../Images/obesidade2.png";
import obesidade3image from "../Images/obesidade3.png";

    const Classificado = ({ imc, classificacao }) => {
    const getClassificacaoImage = (classificacao) => {
        switch (classificacao) {
        case "Abaixo do peso":
            return abaixodopesoimage;
        case "Peso normal":
            return pesonormalimage;
        case "Sobrepeso":
            return acimadopesoimage;
        case "Obesidade grau 1":
            return obesidade1image;
        case "Obesidade grau 2":
            return obesidade2image;
        case "Obesidade grau 3":
            return obesidade3image;
        default:
            return null;
        }
    };

    const classificacaoImage = getClassificacaoImage(classificacao);

    return (
        <div className={styles.container}>
        <div className={styles.resposta}>
            <p className={styles.text}>IMC: <b>{imc}</b></p>
            <p>Classificação: <b>{classificacao}</b></p>
        </div>
        <div className={styles.images}>
        {classificacaoImage && (
            <img className={styles.image} src={classificacaoImage} alt={classificacao} />
        )}
        </div>
        </div>
    );
};
export default Classificado;
