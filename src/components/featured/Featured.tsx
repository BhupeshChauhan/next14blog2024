"use client";
import React from "react";
import styles from "./featured.module.css";
import CustomCarousel from "../CustomCarousel";

const FeaturedArrays = [
  {
    title: "Hey, lama dev here! Discover my stories and creative ideas.",
    description:
      "Lorem ipsum dolor sit amet alim consectetur adipisicing elit. Lorem ipsum dolor sit amet alim consectetur adipisicing elit.Lorem ipsum dolor sit amet alim consectetur adipisicing elit.Lorem ipsum dolor sit amet alim consectetur adipisicing elit.",
    img: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hey, lama dev here! ",
    description:
      "Lorem ipsum dolor sit amet alim consectetur adipisicing elit. Lorem ipsum dolor sit amet alim consectetur adipisicing elit.Lorem ipsum dolor sit amet alim consectetur adipisicing elit.Lorem ipsum dolor sit amet alim consectetur adipisicing elit.",
    img: "https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBackground}></div>
      <div className={styles.imageBackgroundBlur}></div>
      <div className={styles.FeaturedTextContainer}>
        <div className={styles.post}>
          <CustomCarousel itemArray={FeaturedArrays} />
        </div>
      </div>
      <div className={styles.FeaturedImgContainer} />
    </div>
  );
};

export default Featured;
