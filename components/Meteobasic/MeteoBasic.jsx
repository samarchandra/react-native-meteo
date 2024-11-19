import { Txt } from "../Txt/Txt";
import { s } from "./Meteobasic.style";
import { View, Image, Touchable, TouchableOpacity } from "react-native";
import { nowToHHMM } from "../../utils/date_time";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export function MeteoBasic({temperature, interpretation, city, dailyWeather}) {
    const nav = useNavigation();
    return <View style={s.container}>
    <View style={s.clock}>
        <Clock/>
    </View>
    <View style={s.city}>
        <Txt>{city}</Txt>
    </View>
    <View style={s.interpretation}>
        <Txt style={s.interpretation_text}>{interpretation.label}</Txt>
    </View>
    <View style={s.temprature_box
    }>
        <TouchableOpacity onPress={()=>nav.navigate("Forecast",{city, dailyWeather})}>
        <Txt style={s.temprature}>{Math.round(temperature)}°</Txt>
        </TouchableOpacity>
        <Image style = {s.temp_image} source = {interpretation.image}/>
    </View>
    </View>
}