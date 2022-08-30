import { useStringInput } from "hooks/useInput";
import { NextPage } from "next";
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { GroupButton, GroupContainer, GroupFormTitle, GroupInput, GroupTitle, GroupWrap } from "styles/styleRepo/groupStyle";
import { useRef, useState } from "react";

const CreateGroup: NextPage = () => {
    const [swiper, setSwiper] = useState(null);
    const [index, setIndex] = useState(0);
    
    const groupName = useStringInput('');

    SwiperCore.use([Navigation]);

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    const swiperParams = {
        navigation: { prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current },
        onBeforeInit: (swiper: any) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.update();
        },
        onSwiper: setSwiper,
        onSlideChange: (e: any) => setIndex(e.activeIndex)
    }

    return (
        <GroupContainer>
            <GroupWrap>
                <GroupTitle>FUKIN FRIENDS<br/>세팅을 시작합니다.</GroupTitle>
                <Swiper {...swiperParams} ref={setSwiper}>
                    <SwiperSlide>
                        <GroupFormTitle>첫 그룹을 만들어주세요</GroupFormTitle>
                        <GroupInput placeholder="그룹명을 입력하세요." {...groupName} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GroupFormTitle>첫 그룹을 만들어주세요</GroupFormTitle>
                        <GroupInput placeholder="그룹명을 입력하세요." {...groupName} />
                    </SwiperSlide>
                    <GroupButton ref={navigationPrevRef}>다음</GroupButton>
                </Swiper>
            </GroupWrap>
        </GroupContainer>
    )
}

export default CreateGroup;
