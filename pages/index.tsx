import Head from "next/head";
import Image from "next/image";
import { Htag, Button, P, Tag } from "../components";
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
      <Tag size="l" color={"red"}>
        Hello
      </Tag>
      <Tag size="s" color={"ghost"}>
        Hello
      </Tag>
      <Tag size="l" color={"primary"}>
        Hello
      </Tag>
      <Tag size="l" color={"green"}>
        Hello
      </Tag>
      <Tag size="l" color={"grey"}>
        10
      </Tag>
    </div>
  );
}
