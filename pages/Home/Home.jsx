import { MeteoBasic } from "../../components/Meteobasic/MeteoBasic"
import { Txt } from "../../components/Txt/Txt"
import { s } from "./Home.style"
import { View } from "react-native"
import {getWeatherInterpretation} from "../../utils/meteo_utils"
import { MeteoAdvanced } from "../../components/MeteoAdvanced/MeteoAdvanced"
import { SearchBar } from "../../components/SearchBar/SearchBar"
export function Home({weather, city, onSubmit}){
    const interpretation = getWeatherInterpretation(weather.current_weather.weathercode)
    const time = weather.current_weather.time
    const advancedData = [{
        title: "Sunrise",
        value: weather.daily.sunrise[0].toString().split("T").at(-1)
    },{
        title: "Sunset",
        value: weather.daily.sunset[0].toString().split("T").at(-1)
    },{
        title: "WindSpeed",
        value: weather.daily.windspeed_10m_max[0].toString().split("T").at(-1) + " " + weather.daily_units.windspeed_10m_max
    }]
    return <>
    <View style={s.basic_info}><MeteoBasic time={time} temperature={weather.current_weather.temperature} interpretation = {interpretation} city={city} dailyWeather = {weather.daily}/></View>
    <View style={s.search_bar}><SearchBar onSubmit = {onSubmit}/></View>
    <View style={s.advanced_info}><MeteoAdvanced advancedData={advancedData}/></View>
    </>
}