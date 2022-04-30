import { useEffect, useState } from "react";

// 숫자가 한자리면 앞에 0을 붙여줌
const getTime = (time: number): string => {
    // 숫자가 한자리수면
    if (time.toString().length === 1) {
        return `0${time}`;
    }else {
        return time.toString();
    }
}
const useServerTime = () => {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        setInterval(() => {
            setDate(val => new Date());    
        }, 1000);
        
    }, []);

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric" , 
        month: "2-digit" , 
        day: "2-digit" , 
    };

    return [
        date.toLocaleDateString("ko-kr", options),
        `${getTime(date.getHours())} : ${getTime(date.getMinutes())}`
    ]
}

export default useServerTime;