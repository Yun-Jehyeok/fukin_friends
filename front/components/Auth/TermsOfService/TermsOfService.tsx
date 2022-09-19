import type { NextPage } from "next";
import Image from "next/image";
import {
  ErrMsg,
  TOSBox,
  TOSButton,
  TOSButtonContainer,
  TOSContainer,
  TOSLabel,
  TOSLastLabel,
  TOSLogo,
  TOSWrap,
} from "./style";
import noCheck from "public/img/check-mark.png";
import check from "public/img/check.png";
import { useState } from "react";
import Link from "next/link";

interface child {
  checkTOS: (checkTerms: boolean) => void;
}

interface PageTypeProps {
  checkTOS: (checkTerms: boolean) => void;
}

const TermsOfService: NextPage<PageTypeProps> = ({ checkTOS }: child) => {
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const onClickFirstTOS = () => {
    setErrMsg(false);
    setFirstCheck(!firstCheck);
  };
  const onClickSecondTOS = () => {
    setErrMsg(false);
    setSecondCheck(!secondCheck);
  };

  const cancel = () => {
    window.location.href = "/";
  };

  const handleCheckTerms = () => {
    if (firstCheck && secondCheck) {
      checkTOS(true);
      setErrMsg(false);
    } else {
      checkTOS(false);
      setErrMsg(true);
    }
  };

  return (
    <TOSContainer>
      <TOSWrap>
        <TOSLogo>
          <Link href="/">FUKIN FRIENDS</Link>
        </TOSLogo>
        <div>
          <TOSLabel>
            <span onClick={onClickFirstTOS}>
              <Image
                src={firstCheck ? check : noCheck}
                alt="non-check"
                width={24}
                height={24}
              />
            </span>
            FUKIN FRIEND 이용 약관 동의 <span>(필수)</span>
          </TOSLabel>
          <TOSBox>
            1. 목적 : 지원자 개인 식별, 지원의사 확인, 입사전형의 진행, 고지사항
            전달, 입사 지원자와의 원활한 의사소통, 지원이력 확인 및 면접
            불합격자 재지원 제한
            <br />
            <br />
            2. 항목 : 아이디(이메일주소), 비밀번호, 이름, 생년월일, 휴대폰번호
            <br />
            <br />
            3. 보유기간 : 회원 탈퇴 시까지 보유
          </TOSBox>
        </div>
        <div>
          <TOSLabel>
            <span onClick={onClickSecondTOS}>
              <Image
                src={secondCheck ? check : noCheck}
                alt="non-check"
                width={24}
                height={24}
              />
            </span>
            개인정보 수집 및 이용 동의 <span>(필수)</span>
          </TOSLabel>
          <TOSBox>
            1. 목적 : 지원자 개인 식별, 지원의사 확인, 입사전형의 진행, 고지사항
            전달, 입사 지원자와의 원활한 의사소통, 지원이력 확인 및 면접
            불합격자 재지원 제한
            <br />
            <br />
            2. 항목 : 아이디(이메일주소), 비밀번호, 이름, 생년월일, 휴대폰번호
            <br />
            <br />
            3. 보유기간 : 회원 탈퇴 시까지 보유
          </TOSBox>
        </div>
        <TOSLastLabel>
          * 위 개인정보 수집에 대한 동의를 거부할 권리가 있으며,{" "}
          <span>FUKIN FRIENDS 이용이 제한될 수 있습니다.</span>
          <br />
        </TOSLastLabel>
        {errMsg ? (
          <ErrMsg>
            FUKIN FRIENDS 이용약관과 개인정보 수집 및 이용 모두 동의해주세요.
          </ErrMsg>
        ) : (
          ""
        )}
        <TOSButtonContainer>
          <TOSButton onClick={cancel}>취소</TOSButton>
          <TOSButton onClick={handleCheckTerms}>확인</TOSButton>
        </TOSButtonContainer>
      </TOSWrap>
    </TOSContainer>
  );
};

export default TermsOfService;
