import { AdvancedTxtView } from "../AdvancedTxtView/AdvancedTxtView";
import { s } from "./MeteoAdvanced.style";
import { View } from "react-native";

export function MeteoAdvanced({advancedData}){
    
    return <View style={s.container}>
        {advancedData.map((item, index) => (
       <AdvancedTxtView key={index} title={item.title} value={item.value}/>
      ))}
            
    </View>
}