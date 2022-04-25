import React, { useEffect } from "react";

export const useAnimation = (
    ref: React.RefObject<HTMLDivElement>,
    animationClassName: string,
    delayBetweenAnimaion: number,
    animationTime: number,
    callback: Function, 
    deps?: React.DependencyList | undefined,
): void => {
    useEffect(()=>{
        const tick = () => setInterval(()=>{
            ref.current?.classList.add(animationClassName);
            // 애니메이션이 실행될 때 실행하는 콜백함수
            callback();
            // 애니메이션 실행이 끝나면 해당 클래스를 제거해줌
            setTimeout(()=>{
                ref.current?.classList.remove(animationClassName);
            },animationTime);
        },delayBetweenAnimaion);
        return () =>{tick();}
    },deps);

}