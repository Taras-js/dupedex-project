import React from "react";
import styles from "./Library.module.css";
import TextInput from "../TextInput";

const Library = ({ content }:any) => {
  return content.length ? (
    <div  className={styles.container}>
      <div className={styles.container_menu}>
        <a href="#" className={styles.menu_link}>
          My Library
        </a>
        <a href="#" className={styles.menu_link}>
          Explore
        </a>
      </div>
      <div className={styles.container_menu}>
        <TextInput placeholder="Search for routies" />
      </div>
      <div className={styles.container_content}>
        {content.map((item) => (
          <div className={styles.content}>
            <div className={styles.content_wrapper}>
              {item.products.map((elem) => (
                <div className={styles.test}>
                  <img className={styles.image_content} src={elem.img} />
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
        <div className={styles.content}></div>
        <div className={styles.content}></div>
        <div className={styles.content}></div>
      </div>
    </div>
  );
};

export default Library;