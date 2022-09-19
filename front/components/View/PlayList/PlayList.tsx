import { NextPage } from "next";
import { Container } from "styles/styleRepo/global";
import PlayListItems from "./PlayListItems/PlayListItems";

const PlayList: NextPage = () => {
  return (
    <Container>
      <PlayListItems />
    </Container>
  );
};

export default PlayList;
