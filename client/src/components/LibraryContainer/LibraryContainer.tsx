import React from "react";
import styles from "./librarycontainer.module.css";
import TextInput from "../TextInput";

const LibraryContainer = ({ content }:any) => (content.length ? (
  <div className={styles.container}>
    <div className={styles.container_menu}>
      <button className={styles.menu_link}>
        My Library
      </button>
      <button className={styles.menu_link}>
        Explore
      </button>
    </div>
    <div className={styles.container_menu}>
      <TextInput placeholder="Search for routies" />
    </div>
    <div className={styles.container_content}>
      {content.map((item) => (
        <div key={item.id} className={styles.content}>
          <div className={styles.content_wrapper}>
            {item.products.map((elem) => (
              <div className={styles.test}>
                <img className={styles.image_content} src={elem.img} alt="item" />
              </div>
            ))}
          </div>
          <div className={styles.title_container}>
            <p className={styles.title}>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <div className={styles.container}>
    <div className={styles.container_menu}>
      <p className={styles.menu_link}>My Library</p>
      <p className={styles.menu_link}>Explore</p>
    </div>
    <div className={styles.container_menu}>
      <TextInput placeholder="Search for routies" />
    </div>
    <div className={styles.container_content}>
      <div className={styles.content} />
      <div className={styles.content} />
      <div className={styles.content} />
    </div>
  </div>
));

export { LibraryContainer };
