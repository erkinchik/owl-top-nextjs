import Head from "next/head";
import Image from "next/image";
import { Htag, Button, P, Tag, Rating } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";
import { API } from "../helpers/api";

function Search(): JSX.Element {
  return <>search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });
  return { props: { menu, firstCategory } };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
