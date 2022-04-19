import { useEffect, useState } from "react";

const useServerTime = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setDate(val => new Date());    
        }, 1000);
        
    }, []);

    return [
        date.toLocaleDateString(), 
        `${date.getHours()}시 ${date.getMinutes()}분`];
}

export default useServerTime;