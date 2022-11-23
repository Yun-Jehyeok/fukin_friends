import { NextPage } from "next";
import { Cont } from "styles/styleRepo/global";
import ViewHeader from "../Header";
import { FeedCon } from "./style";

const Feed: NextPage = () => {
  return (
    <Cont>
      <ViewHeader
        title="Feed Page"
        desc="It's Just Feed Page"
        url="/feed/create"
        url_title="Create Feed"
      />
      <FeedCon>
        <div>test</div>
      </FeedCon>
    </Cont>
  );
};

export default Feed;
