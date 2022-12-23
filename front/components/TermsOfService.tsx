import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import noCheck from "public/img/check-mark.png";
import check from "public/img/check.png";
import { useState } from "react";

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
    <div className="w-full min-w-[1320px] h-full min-h-screen p-0 pt-24 pb-24 flex justify-center flex-col bg-[#f4f9fc]">
      <div className="w-[40%] my-0 mx-auto">
        <div className="mb-12 text-5xl text-[#5455dd] font-bold text-center">
          <Link href="/">FUKIN FRIENDS</Link>
        </div>
        <div>
          <div className="font-bold mb-4 text-lg text-black">
            <span className="mr-2 cursor-pointer" onClick={onClickFirstTOS}>
              <Image
                className="top-[5px]"
                src={firstCheck ? check : noCheck}
                alt="non-check"
                width={24}
                height={24}
              />
            </span>
            FUKIN FRIEND 이용 약관 동의{" "}
            <span className="text-[#5455dd] relative bottom-[2px] text-base">
              (필수)
            </span>
          </div>
          <div className="w-full p-4 bg-white border border-[#e8e8e8] text-black text-sm max-h-[120px] overflow-y-scroll mb-6 leading-5">
            1. 목적 : 지원자 개인 식별, 지원의사 확인, 입사전형의 진행, 고지사항
            전달, 입사 지원자와의 원활한 의사소통, 지원이력 확인 및 면접
            불합격자 재지원 제한
            <br />
            <br />
            2. 항목 : 아이디(이메일주소), 비밀번호, 이름, 생년월일, 휴대폰번호
            <br />
            <br />
            3. 보유기간 : 회원 탈퇴 시까지 보유
          </div>
        </div>
        <div>
          <div className="text-black text-lg font-bold mb-4">
            <span className="mr-2 cursor-pointer" onClick={onClickSecondTOS}>
              <Image
                className="top-[5px]"
                src={secondCheck ? check : noCheck}
                alt="non-check"
                width={24}
                height={24}
              />
            </span>
            개인정보 수집 및 이용 동의{" "}
            <span className="text-[#5455dd] relative bottom-[2px] text-base">
              (필수)
            </span>
          </div>
          <div className="w-full p-4 bg-white border border-[#e8e8e8] text-black text-sm max-h-[120px] overflow-y-scroll mb-6 leading-5">
            1. 목적 : 지원자 개인 식별, 지원의사 확인, 입사전형의 진행, 고지사항
            전달, 입사 지원자와의 원활한 의사소통, 지원이력 확인 및 면접
            불합격자 재지원 제한
            <br />
            <br />
            2. 항목 : 아이디(이메일주소), 비밀번호, 이름, 생년월일, 휴대폰번호
            <br />
            <br />
            3. 보유기간 : 회원 탈퇴 시까지 보유
          </div>
        </div>
        <div className="text-sm text-[#282828] mb-4">
          * 위 개인정보 수집에 대한 동의를 거부할 권리가 있으며,{" "}
          <span className="w-full underline">
            FUKIN FRIENDS 이용이 제한될 수 있습니다.
          </span>
          <br />
        </div>
        {errMsg ? (
          <div className="w-full h-6 text-sm text-red-600 mb-2">
            FUKIN FRIENDS 이용약관과 개인정보 수집 및 이용 모두 동의해주세요.
          </div>
        ) : (
          ""
        )}
        <div className="w-full flex justify-between">
          <div
            className="w-[calc(50%-8px)] h-14 text-white text-lg border-none outline-none cursor-pointer leading-[56px] text-center bg-[#8e8e8e] hover:bg-gray-500"
            onClick={cancel}
          >
            취소
          </div>
          <div
            className="w-[calc(50%-8px)] h-14 text-white text-lg border-none outline-none cursor-pointer leading-[56px] text-center bg-[#5455dd] hover:bg-[#3d3ebe]"
            onClick={handleCheckTerms}
          >
            확인
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
