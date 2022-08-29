import { useStringInput } from "hooks/useInput";
import { NextPage } from "next";
import { GroupButton, GroupContainer, GroupFormTitle, GroupInput, GroupTitle, GroupWrap } from "styles/styleRepo/groupStyle";

const CreateGroup: NextPage = () => {
    const groupName = useStringInput('');

    return (
        <GroupContainer>
            <GroupWrap>
                <GroupTitle>FUKIN FRIENDS<br/>세팅을 시작합니다.</GroupTitle>
                <GroupFormTitle>그룹명을 입력해주세요</GroupFormTitle>
                <GroupInput placeholder="그룹명을 입력하세요." {...groupName} />
                <GroupButton>다음</GroupButton>
            </GroupWrap>
        </GroupContainer>
    )
}

export default CreateGroup;
