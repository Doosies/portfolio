import {useEffect, useRef } from "react";

const useMouse = () => {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    const x = useRef(0);
    const y = useRef(0);

    useEffect(() => {
        const update = (e: TouchEvent | MouseEvent) => {
            // let x: number;
            // let y: number;

            if (e instanceof TouchEvent) {
                // setX(e.touches[0].pageX);
                // setY(e.touches[0].pageY);
                x.current = e.touches[0].pageX;
                y.current = e.touches[0].pageY;
            }else {
                // setX(e.pageX);
                // setY(e.pageY);
                x.current = e.pageX;
                y.current = e.pageY;
            }
            
        }
        window.addEventListener('mousemove', update);
        window.addEventListener('touchmove', update);
    },[x,y]);
    console.log(x.current,y.current);
    return [x,y];
}

export default useMouse;