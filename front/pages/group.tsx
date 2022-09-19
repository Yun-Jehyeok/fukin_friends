import { useAppDispatch } from "hooks/reduxHooks";
import { useStringInput } from "hooks/useInput";
import { NextPage } from "next";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";
import {
  SlideContainer,
  SlideItem,
  GroupButton,
  GroupFormTitle,
  GroupInput,
  GroupTitle,
  GroupWrap,
  GroupErrMsg,
  GroupButtonContainer,
  MemberList,
  MemberItem,
  MemberImg,
  MemberName,
  SelectMember,
  NoSearchResult,
  SelectedMemberList,
  SelectedItem,
} from "styles/styleRepo/groupStyle";

import deleteImg from "public/img/delete.png";
import { groupActions } from "src/store/reducers/groupReducer";
import { AuthContainer } from "styles/styleRepo/authFormStyle";

interface ISelectedMember {
  id: string | undefined;
  name: string | undefined;
}

const CreateGroup: NextPage = () => {
  const [slideIdx, setSlideIdx] = useState("0");
  const [errMsg, setErrMsg] = useState("");
  const [group, setGroup] = useState("");
  const [showMemberList, setShowMemberList] = useState(false);
  const [selectedMember, setSelectedMember] = useState<ISelectedMember[]>([]);

  const { user, searchedUser } = useSelector((state: RootState) => state.user);

  const groupName = useStringInput("");
  const dispatch = useAppDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (value) {
      setShowMemberList(true);
      dispatch(userActions.userSearchRequest({ name: value }));
    } else {
      setShowMemberList(false);
    }

    setGroup(value);
  };

  const handleSelectMember = (e: React.MouseEvent<HTMLElement>) => {
    let member: ISelectedMember = {
      id: e.currentTarget.dataset.key,
      name: e.currentTarget.dataset.name,
    };

    let hasMember = false;
    selectedMember.map((item) => {
      if (item.id === member.id) {
        hasMember = true;
      }
    });

    if (!hasMember) {
      setSelectedMember([...selectedMember, member]);
    }
  };

  const deleteMember = (e: React.MouseEvent<HTMLElement>) => {
    let selected = selectedMember.filter(
      (item) => item.id !== e.currentTarget.dataset.id
    );
    setSelectedMember(selected);
  };

  const handleNext = () => {
    if (groupName.value) {
      setSlideIdx("1");
      setErrMsg("");
    } else {
      setErrMsg("* 그룹명은 필수로 입력해야합니다.");
    }
  };
  const handlePrev = () => {
    setSlideIdx("0");
    setShowMemberList(false);
  };

  const confirmHandler = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();

      let memberList: string[] = [];

      selectedMember.map((item) => {
        if (item) {
          memberList.push(item.id || "");
        }
      });

      let group = {
        userId: user.id,
        title: groupName.value,
        member: memberList,
      };

      dispatch(groupActions.createGroupRequest({ group }));
    },
    [dispatch, user, selectedMember]
  );

  return (
    <AuthContainer>
      {slideIdx === "0" ? (
        <GroupTitle>
          FUKIN FRIENDS
          <br />
          세팅을 시작합니다
        </GroupTitle>
      ) : (
        <GroupTitle>
          조금만 힘내세요
          <br />
          마지막 단계입니다
        </GroupTitle>
      )}
      <SlideContainer slideIdx={slideIdx}>
        <SlideItem>
          <GroupWrap>
            <GroupFormTitle>첫 그룹을 만들어주세요</GroupFormTitle>
            <GroupInput placeholder="그룹명을 입력하세요." {...groupName} />
            {errMsg ? <GroupErrMsg>{errMsg}</GroupErrMsg> : ""}
            <GroupButton>
              <button onClick={handleNext}>다음</button>
            </GroupButton>
          </GroupWrap>
        </SlideItem>
        <SlideItem>
          <GroupWrap>
            <GroupFormTitle>그룹원을 추가해주세요</GroupFormTitle>
            {selectedMember && selectedMember.length > 0 ? (
              <SelectedMemberList>
                <div>
                  {selectedMember.map((item) => {
                    return (
                      <SelectedItem key={item.id}>
                        <div data-id={item.id} onClick={deleteMember}></div>
                        <div>{item.name}</div>
                        <Image src={deleteImg}></Image>
                      </SelectedItem>
                    );
                  })}
                </div>
              </SelectedMemberList>
            ) : (
              ""
            )}
            <GroupInput placeholder="그룹원을 검색하세요" onChange={onChange} />
            {showMemberList ? (
              <MemberList>
                {searchedUser && searchedUser.length > 0 ? (
                  searchedUser.map((item) => {
                    return (
                      <MemberItem
                        key={item.id}
                        data-key={item.id}
                        data-name={item.name}
                        onClick={handleSelectMember}
                      >
                        <div>
                          <MemberImg></MemberImg>
                          <MemberName>{item.name}</MemberName>
                        </div>
                        <SelectMember>선택</SelectMember>
                      </MemberItem>
                    );
                  })
                ) : (
                  <NoSearchResult>검색된 유저가 없습니다.</NoSearchResult>
                )}
              </MemberList>
            ) : (
              ""
            )}
            <GroupButtonContainer>
              <GroupButton>
                <button onClick={handlePrev}>이전</button>
              </GroupButton>
              <GroupButton>
                <button onClick={confirmHandler}>확인</button>
              </GroupButton>
            </GroupButtonContainer>
          </GroupWrap>
        </SlideItem>
      </SlideContainer>
    </AuthContainer>
  );
};

export default CreateGroup;
