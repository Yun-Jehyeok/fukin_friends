import { NextPage } from "next";
import { Cont } from "styles/styleRepo/global";
import PlayListItems from "./PlayListItems/PlayListItems";

const PlayList: NextPage = () => {
  return (
    <Cont>
      <PlayListItems />
    </Cont>
  );
};

export default PlayList;
