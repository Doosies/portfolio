import { useMemo } from "react"

export const useComponentWillMount = (func: Function) => {
    useMemo(()=>{func()},[]);
}