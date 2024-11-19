import { s } from "./Txt.style"
import { Text, useWindowDimensions } from "react-native"
const IPHONE_15_RATIO = 0.001072961373390558
export function Txt({children, style, ...restProps}){
    const {height} = useWindowDimensions()
    const fontSize = style?.fontSize || s.txt.fontSize
    return <Text style={[s.txt, style, {fontSize: fontSize * IPHONE_15_RATIO * height}]} {...restProps}>{children}</Text>
}