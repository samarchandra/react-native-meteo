import { View,Image } from "react-native";
import { s } from "./ForecastListItem.style";
import { Txt } from "../Txt/Txt";
import {getWeatherInterpretation} from "../../utils/meteo_utils"


export function ForecastListItem({dailyData}){
    const interpretation = getWeatherInterpretation(dailyData.weatherCode)
    const dateString = dailyData.date
    const date = new Date(dateString);
    const formattedDate = dateString.split('-').reverse().slice(0, 2).join('/');
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayName = daysOfWeek[date.getDay()];
    return <View style={s.container}>
        <Image style={s.image} source={interpretation.image}/>
        <Txt style={s.forecast_data_text}>{dayName}</Txt>
        <Txt style={s.forecast_data_text}>{formattedDate}</Txt>
        <Txt style={s.forecast_data_text}>{Math.round(dailyData.temperatureMax)}°</Txt>
    </View>
}