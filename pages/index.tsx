import Head from "next/head";
import Image from "next/image";
import { Htag, Button, P, Tag, Rating, Input, TextArea } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  console.log(menu);
  const [rating, setRating] = useState<number>(3);
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"primary"} arrow={"down"}>
        click
      </Button>
      <Button appearance={"ghost"} arrow={"right"}>
        click
      </Button>
      <P size="m">GO back</P>
      <Tag size="m" color={"red"}>
        Hello
      </Tag>
      <Tag size="s" color={"ghost"}>
        Hello
      </Tag>
      <Tag size="m" color={"primary"}>
        Hello
      </Tag>
      <Tag size="m" color={"green"}>
        Hello
      </Tag>
      <Tag size="m" color={"grey"}>
        10
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable={true} />
      <Input placeholder="text" />
      <TextArea placeholder="text" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "top-page/find",
    { firstCategory }
  );
  return { props: { menu, firstCategory } };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
