import { useEffect, useState } from "react";

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
        `${date.getHours()} : ${date.getMinutes()}`
    ]
}

export default useServerTime;