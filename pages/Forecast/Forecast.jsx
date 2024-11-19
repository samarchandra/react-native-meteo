import { View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { s } from "./Forecast.style";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header";
import { ForecastListItem } from "../../components/ForecastListItem/ForecaseListItem";
export function Forecast(){
    const {params} = useRoute()
    const data = params.dailyWeather
    const result = data.time.map((date, index) => ({
        date,
        sunrise: data.sunrise[index],
        sunset: data.sunset[index],
        temperatureMax: data.temperature_2m_max[index],
        weatherCode: data.weathercode[index],
        windSpeedMax: data.windspeed_10m_max[index]
    }));
    console.log(params)
    return <View>
      <View>
         <Header city={params.city}/>
         </View>
         <View style={s.forecastList}>
         {result.map((item, index) => (
       <ForecastListItem key={index} dailyData={item}/>
      ))}
         </View>
    </View>
}