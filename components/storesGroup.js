import Image from "next/image";
import { useState } from "react";
import Card from "./card";
import styles from "./storesGroup.module.css";

const StoresGroup = ({ coffeeStores }) => {
  const [buttonText, setButtonText] = useState("Hide");
  const [iconSrc, setIconSrc] = useState("/arrow-up.svg");

  const buttonClick = () => {
    setButtonText(buttonText === "Hide" ? "Show" : "Hide");

    setIconSrc(
      iconSrc === "/arrow-up.svg" ? "/arrow-down.svg" : "/arrow-up.svg"
    );
  };

  const hidden = buttonText === "Show";

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className={styles.heading2}>Toronto stores</h2>
        <button className={styles.button} onClick={buttonClick}>
          <div className={styles.buttonContent}>
            <p>{buttonText}</p>
            <Image width={25} height={25} alt="" src={iconSrc} />
          </div>
        </button>
      </div>
      <div className={hidden ? styles.hidden : styles.cardLayout}>
        {coffeeStores.map(({ id, imgUrl, name }, index) => (
          <Card
            key={id}
            name={name}
            imgURL={imgUrl}
            href={`coffee-store/${id}`}
            className={styles.card}
            last={index === coffeeStores.length - 1}
            hidden={hidden}
          />
        ))}
      </div>
    </>
  );
};

export default StoresGroup;
