import React, { useEffect } from "react";

export const useAnimation = (
    // ref: React.RefObject<HTMLDivElement>,
    setAnimationRunning: React.Dispatch<React.SetStateAction<boolean>>,
    // animationClassName: string,
    animationTime: number,
    delayBetweenAnimaion: number,
    callback: Function, 
    // deps?: React.DependencyList | undefined,
): void => {
    // console.log('in');
    useEffect(()=>{

        console.log('use effect');
        const tick = setInterval(()=>{
            // console.log("애니메이션 시작");
            setAnimationRunning(true)
            // 애니메이션이 실행될 때 실행하는 콜백함수
            callback();
            // 애니메이션 실행이 끝나면 해당 클래스를 제거해줌
            setTimeout(()=>{
                // console.log("애니메이션 끝");
                setAnimationRunning(false);
            },animationTime);
        },delayBetweenAnimaion);
        return () => clearTimeout(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

}