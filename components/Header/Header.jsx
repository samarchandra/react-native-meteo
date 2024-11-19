import { Txt } from "../Txt/Txt";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { s } from "./Header.style";

export function Header({city}){
    const nav = useNavigation()
    return <View style={s.container}>
        <TouchableOpacity onPress={()=>nav.goBack()}>
        <View style={s.back_button}>
            <Txt>{"<"}</Txt>
        </View>
        </TouchableOpacity>
        <View style={s.header_text}>
            <Txt>{city.toUpperCase()}</Txt>
            <Txt style={s.subtitle_text}>7 days Forecast</Txt>
        </View>
    </View>
}