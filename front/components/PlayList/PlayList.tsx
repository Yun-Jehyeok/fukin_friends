import { NextPage } from "next";
import PlayListItems from "./PlayListItems";

const PlayList: NextPage = () => {
  return (
    <div className="w-full">
      <PlayListItems />
    </div>
  );
};

export default PlayList;
