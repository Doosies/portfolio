// import { useEffect } from "react";

import { RefObject, useEffect, useState } from "react";

// type RectType = typeof ReactDOM;
const useRect = (t: RefObject<HTMLDivElement>) => {
    const [rect, setRect] = useState({
        x: 0, y: 0,
        top: 0, bottom: 0,
        left: 0, right: 0,
        height: 0,width: 0,
    });

    useEffect(() => {
        setRect(t.current!.getBoundingClientRect());
    }, []);

    
    
    return rect;
}

export default useRect;