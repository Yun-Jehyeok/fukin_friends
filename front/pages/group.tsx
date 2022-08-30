import { useAppDispatch } from "hooks/reduxHooks";
import { useStringInput } from "hooks/useInput";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/configureStore";
import { userActions } from "src/store/reducers/userReducer";
import { SlideContainer, SlideItem, GroupButton, GroupContainer, GroupFormTitle, GroupInput, GroupTitle, GroupWrap, GroupInfo, GroupErrMsg, GroupButtonContainer, MemberList, MemberItem, MemberImg, MemberName, SelectMember, NoSearchResult } from "styles/styleRepo/groupStyle";

const CreateGroup: NextPage = () => {
    const [slideIdx, setSlideIdx] = useState('0');
    const [errMsg, setErrMsg] = useState('');
    const [group, setGroup] = useState('');
    const [showMemberList, setShowMemberList] = useState(false);

    const { searchedUser } = useSelector((state: RootState) => state.user);

    const groupName = useStringInput('');

    const dispatch = useAppDispatch();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
          target: { value },
        } = e;
        
        if(value) {
            setShowMemberList(true);
            dispatch(userActions.userSearchRequest(value))
        } else {
            setShowMemberList(false);
        }

        setGroup(value);
    };

    const handleNext = () => {
        if(groupName.value) {
            setSlideIdx('1');
            setErrMsg('')
        } else {
            setErrMsg('* 그룹명은 필수로 입력해야합니다.')
        }
    }
    const handlePrev = () => {
        setSlideIdx('0');
        setShowMemberList(false);
    }

    const confirmHandler = () => {
        window.location.href = "/";
    }

    return (
        <GroupContainer>
            {
                slideIdx === '0' ? 
                    <GroupTitle>FUKIN FRIENDS<br/>세팅을 시작합니다</GroupTitle> :
                    <GroupTitle>조금만 힘내세요<br/>마지막 단계입니다</GroupTitle>
            }
            <SlideContainer slideIdx={slideIdx}>
                <SlideItem>
                    <GroupWrap>
                        <GroupFormTitle>첫 그룹을 만들어주세요</GroupFormTitle>
                        <GroupInput placeholder="그룹명을 입력하세요." {...groupName} />
                        {errMsg ? <GroupErrMsg>{errMsg}</GroupErrMsg> : ''}
                        <GroupButton>
                            <button onClick={handleNext}>다음</button>
                        </GroupButton>
                    </GroupWrap>
                </SlideItem>
                <SlideItem>
                    <GroupWrap>
                        <GroupFormTitle>그룹원을 추가해주세요</GroupFormTitle>
                        <GroupInput placeholder="그룹원을 검색하세요" onChange={onChange} />
                        {
                            showMemberList ? 
                                (
                                    <MemberList>
                                        {searchedUser && searchedUser.length > 0 ? 
                                            searchedUser.map(item => {
                                                return (
                                                    <MemberItem key={item.id}>
                                                        <div>
                                                            <MemberImg></MemberImg>
                                                            <MemberName>{item.name}</MemberName>
                                                        </div>
                                                        <SelectMember>선택</SelectMember>
                                                    </MemberItem>
                                                )
                                            })
                                            : (
                                                <NoSearchResult>검색된 유저가 없습니다.</NoSearchResult>
                                            )}
                                    </MemberList>
                                )
                                : ''
                        }
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
        </GroupContainer>
    )
}

export default CreateGroup;
