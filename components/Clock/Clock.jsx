import { useEffect, useState } from "react"
import { Txt } from "../Txt/Txt"
import { s } from "./Clock.style"
import { Text, useWindowDimensions } from "react-native"
import { nowToHHMM } from "../../utils/date_time"

export function Clock(){
    const [time, setTime] = useState(nowToHHMM())
    useEffect(()=>{
        const intervalID = setInterval(() => {
            setTime(nowToHHMM());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        }
    },[])
return <Txt>{time}</Txt>
}