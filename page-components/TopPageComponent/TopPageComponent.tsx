import React from "react";
import { TopPageComponentProps } from "./TopPageComponent.props";
import { Card, HhData, Htag, Tag } from "../../components";
import styles from "./TopPageComponent.module.css";
import { TopLevelCategory } from "../../interfaces/page.interface";
import Advantages from "../../components/Advantages/Advantages";

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={"h1"}>{page.title}</Htag>
        {products && (
          <Tag color={"grey"} size={"m"}>
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>

      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>

      <div className={styles.hhTitle}>
        <Htag tag={"h2"}>Вакансии - {page.category}</Htag>
        <Tag color={"red"} size={"m"}>
          hh.ru
        </Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag={"h2"}>Приемущесва</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}

      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}

      <Htag tag={"h2"}>Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} size={"m"} color={"primary"}>
          {t}
        </Tag>
      ))}
    </div>
  );
};
