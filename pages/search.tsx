import Head from "next/head";
import Image from "next/image";
import { Htag, Button, P, Tag, Rating } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

function Search(): JSX.Element {
  const [rating, setRating] = useState<number>(3);
  return <>search</>;
}

export default withLayout(Search);

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
