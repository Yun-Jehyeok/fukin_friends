import { NextPage } from "next";
import Image from "next/image";
import cat from "public/img/cat1.jpg";
import { Cont } from "styles/styleRepo/global";
import ViewHeader from "../Header";
import {
  FeedCon,
  FeedContent,
  FeedCreator,
  FeedCreatorAndDate,
  FeedDate,
  FeedImg,
  FeedItem,
  FeedItemCon,
  FeedTag,
} from "./style";

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
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <FeedItem key={item}>
                <FeedImg>
                  <Image src={cat} alt="cat" width={370} height={255} />
                </FeedImg>
                <FeedItemCon>
                  <FeedCreatorAndDate>
                    <FeedCreator></FeedCreator>
                    <div>Jehyeok</div>
                    <FeedDate></FeedDate>
                    <div>14 Octorbor, 2022</div>
                  </FeedCreatorAndDate>
                  <FeedContent>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard test dummy text ever since the
                    1500s
                  </FeedContent>
                  <FeedTag>
                    {["TAG1", "TAG2", "TAG3"].map((item) => (
                      <div key={item}># {item}</div>
                    ))}
                  </FeedTag>
                </FeedItemCon>
              </FeedItem>
            );
          })}
        </div>
      </FeedCon>
    </Cont>
  );
};

export default Feed;
