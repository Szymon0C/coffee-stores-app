import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import cls from "classnames";

import styles from "./card.module.css";

const Card = ({ name, imgURL, href, last, hidden }) => {
  const [isHovering, setIsHovered] = useState(false);

  const onMouseChange = () =>
    setTimeout(() => setIsHovered((prev) => !prev), 200);

  const shortName = `${name.slice(0, 7)}...`;

  return (
    <Link
      href={href}
      className={
        hidden
          ? styles.hidden
          : last
          ? cls(styles.cardLink, styles.lastCardLink)
          : styles.cardLink
      }
      onMouseEnter={onMouseChange}
      onMouseLeave={onMouseChange}
    >
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>
            {last ? name : isHovering ? name : shortName}
          </h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            className={last ? styles.lastCardImage : styles.cardImage}
            src={imgURL}
            width={260}
            height={160}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
