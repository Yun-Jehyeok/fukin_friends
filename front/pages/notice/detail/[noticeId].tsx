import { NextPage } from "next";
import { Container } from "styles/styleRepo/global";
import {
  ImportantItem,
  ImportantNotice,
  NoticeBody,
  NoticeDate,
  NoticeDatePlace,
  NoticeHeader,
  NoticeHeaderDescription,
  NoticeHeaderTitle,
  NoticeItemDescription,
  NoticeItemTitle,
  NoticeLeft,
  NoticePlace,
  NoticeRight,
  NoticeSearch,
} from "components/View/Notice/style";
import { Body, AppContainer, ContentWrap } from "styles/styleRepo/style";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import {
  CommentContainer,
  CommentInput,
  LikeBtn,
  NoticeDetailItem,
} from "styles/styleRepo/noticeDetailStyle";
import { useState } from "react";

const noticeDetail = {
  id: 0,
  title: "Out of time - The Weekend",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
  date: "2022-08-12 6:00 PM",
  place: "Yeouinaru station",
};

const importantList = [
  {
    id: 0,
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 1,
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    date: "2022-08-12 6:00 PM",
    place: "Yeouinaru station",
  },
  {
    id: 2,
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    date: "2022-08-17 4:00 PM",
    place: "Hannam-dong Chicken",
  },
];

const Notice: NextPage = () => {
  const [isLiked, setIsLiked] = useState(false);

  const onSearch = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      console.log("Enter...");
    }
  };

  return (
    <AppContainer>
      <Header />
      <Body>
        <ContentWrap>
          <Container>
            <NoticeHeader>
              <div>
                <div>
                  <NoticeHeaderTitle>Notice Detail Page</NoticeHeaderTitle>
                  <NoticeHeaderDescription>
                    It&apos;s Notice Detail Page
                  </NoticeHeaderDescription>
                </div>
              </div>
            </NoticeHeader>
            <NoticeBody>
              <div>
                <NoticeLeft>
                  <NoticeDetailItem key={noticeDetail.id}>
                    <NoticeItemTitle>{noticeDetail.title}</NoticeItemTitle>
                    <NoticeDatePlace>
                      <NoticeDate>
                        <div></div>
                        <div>{noticeDetail.date}</div>
                      </NoticeDate>
                      <NoticePlace>{noticeDetail.place}</NoticePlace>
                    </NoticeDatePlace>
                    <NoticeItemDescription>
                      The last few months, I&apos;ve been working on me, baby
                      <br />
                      There&apos;s so much trauma in my life
                      <br />
                      I&apos;ve been so cold to the ones who loved me, baby
                      <br />
                      I look back now and I realize
                      <br />
                      <br />
                      I remember when I held you
                      <br />
                      You begged me with your drowning eyes to stay
                      <br />
                      I regret I didn&apos;t tell you
                      <br />
                      Now I can&apos;t keep you from loving him, you made up
                      your mind
                      <br />
                      <br />
                      Say I love you girl, but I&apos;m out of time
                      <br />
                      Say I&apos;m there for you, but I&apos;m out of time
                      <br />
                      Say that I&apos;ll care for you, but I&apos;m out of time
                      <br />
                      Said I&apos;m too late to make you mine, out of time
                      <br />
                      <br />
                      If he mess up just a little, baby, you know my line
                      <br />
                      If you don&apos;t trust him a little, then come right
                      back, girl, come right back
                      <br />
                      Gimme one chance, just a little, baby, I&apos;ll treat you
                      right
                      <br />
                      And I&apos;ll love you like I should&apos;ve loved you all
                      the time
                      <br />
                      <br />
                      And I remember when I held you (held you, baby)
                      <br />
                      You begged me with your drowning eyes to stay (never
                      again, baby)
                      <br />
                      And I regret I didn&apos;t tell you
                      <br />
                      Now I can&apos;t keep you from loving him, you made up
                      your mind (uh)
                      <br />
                      <br />
                      Say I love you, girl, but I&apos;m out of time
                      <br />
                      Say I&apos;m there for you, but I&apos;m out of time (no)
                      <br />
                      Say that I&apos;ll care for you, but I&apos;m out of time
                      (hey)
                      <br />
                      Said, I&apos;m too late to make you mine, out of time (ah)
                      <br />
                      <br />
                      Ooh-ooh-ooh, singing (out of time)
                      <br />
                      Said, I had you to myself, but I&apos;m (out of time)
                      <br />
                      Say that I&apos;ll care for you, but I&apos;m out of time
                      <br />
                      But I&apos;m too late to make you mine, out of time (uh)
                      <br />
                      Out of time, out of time
                      <br />
                      <br />
                      Don&apos;t you dare touch that dial
                      <br />
                      Because like the song says, you are out of time
                      <br />
                      You&apos;re almost there, but don&apos;t panic
                      <br />
                      There&apos;s still more music to come before you&apos;re
                      completely engulfed
                      <br />
                      In the blissful embrace of that little light you see in
                      the distance
                      <br />
                      Soon you&apos;ll be healed, forgiven, and refreshed, free
                      from all trauma, pain, guilt, and shame
                      <br />
                      You may even forget your own name, but before you dwell in
                      that house forever
                      <br />
                      Here&apos;s 30 minutes of easy listening to some slow
                      tracks, on 103.5 Dawn FM
                      <br />
                    </NoticeItemDescription>
                  </NoticeDetailItem>
                  <LikeBtn
                    isLiked={isLiked}
                    onClick={() => setIsLiked(!isLiked)}
                  ></LikeBtn>
                  <CommentContainer>
                    <div>Comment</div>
                    <CommentInput
                      maxLength={200}
                      placeholder="Write your comment"
                    />
                  </CommentContainer>
                </NoticeLeft>
                <NoticeRight>
                  <NoticeSearch>
                    <div>Search</div>
                    <input
                      placeholder="Search For Notice"
                      onKeyDown={onSearch}
                    />
                  </NoticeSearch>
                  <ImportantNotice>
                    <div>Important Notice</div>
                    {importantList.map((item) => (
                      <ImportantItem key={item.id}>
                        <div>{item.title}</div>
                        <div>{item.date}</div>
                      </ImportantItem>
                    ))}
                  </ImportantNotice>
                </NoticeRight>
              </div>
            </NoticeBody>
          </Container>
        </ContentWrap>
      </Body>
      <Footer />
    </AppContainer>
  );
};

export default Notice;
