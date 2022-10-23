import { useState } from "react";
import type { NextPage } from "next";
import CardUser from "components/card-user";
import CardActivities from "components/card-activities";
import Container from "components/container";
import { Item } from "interfaces";

export async function getServerSideProps() {
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";
  const res = await fetch(`${baseURL}/data.json`);
  const items = await res.json();
  return {
    props: {
      items,
    },
  };
}

type Props = {
  items: Item[];
};

const Home: NextPage = ({ items }: Props) => {
  const [period, setPeriod] = useState<string>("daily");

  return (
    <>
      <Container>
        <CardUser onClick={(val) => setPeriod(val)} />
        {items.map((item, i) => (
          <CardActivities
            key={i}
            title={item.title}
            period={period}
            timeframesCurrent={item.timeframes[period]?.current}
            timeframesPrevious={item.timeframes[period]?.previous}
          />
        ))}
      </Container>
    </>
  );
};

export default Home;
