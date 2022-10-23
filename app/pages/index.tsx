import type { NextPage } from "next";
import CardUser from "components/card-user";
import CardActivities from "components/card-activities";
import Container from 'components/container'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <CardUser />
        {[...new Array(6)].map((_, i) => (
          <CardActivities key={i} />
        ))}
      </Container>
    </>
  );
};

export default Home;
