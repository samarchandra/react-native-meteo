import { Txt } from "../Txt/Txt";
import { s } from "./AdvancedTxtView.style";
import { View } from "react-native";

export function AdvancedTxtView({title, value}) {
    return <View style={s.container}>
        <Txt>{value}</Txt>
        <Txt style={s.title_txt}>{title}</Txt>
    </View>
}