import React from "react";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }: any) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container} style={{ width: "100%" }}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} cat={undefined} />
        <Menu />
      </div>
    </div>
  );
}
