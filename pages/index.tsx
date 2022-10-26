import Head from "next/head";
import Image from "next/image";
import { Htag, Button, P } from "../components";
export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"primary"} arrow={"down"}>
        click
      </Button>
      <Button appearance={"ghost"} arrow={"right"}>
        click
      </Button>
      <P size="m">GO back</P>
    </div>
  );
}
