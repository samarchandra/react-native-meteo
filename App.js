import { s } from "./App.style";
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Home } from "./pages/Home/Home";
import { Alert, ImageBackground } from "react-native";
import background from "./assets/background.png";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPI } from "./api/meteo";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Forecast } from "./pages/Forecast/Forecast";

const Stack = createNativeStackNavigator();

const navTheme = {
  colors: {
    background: "transparent",
  },
};

export default function App() {
  const [currentCoordinates, setCurrentCoordinates] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });
  async function onSubmit(cityName) {
    try {
      const coords = await MeteoAPI.fetchCoordsByCityName(cityName);
      setCurrentCoordinates({
        lat: coords.lat,
        lng: coords.lng,
      });
    } catch {
      Alert.alert("Enter valid city name");
    }
  }
  useEffect(() => {
    getCoordinates();
  }, []);
  useEffect(() => {
    if (currentCoordinates) {
      getCurrentWeather(currentCoordinates);
      getCurrentCity(currentCoordinates);
    }
  }, [currentCoordinates]);
  async function getCurrentWeather(coords) {
    const weatherData = await MeteoAPI.fetchWeatherByCoords(coords);
    setWeather(weatherData);
  }
  async function getCurrentCity(coords) {
    const cityData = await MeteoAPI.fetchCityByCoords(coords);
    setCity(cityData);
  }
  async function getCoordinates() {
    const { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCurrentCoordinates({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCurrentCoordinates({ lat: "48.85", lng: "2.35" });
    }
  }
  return (
    <NavigationContainer theme={navTheme}>
      <ImageBackground
        style={s.imageBackground}
        source={background}
        imageStyle={s.bgImage}
      >
        <SafeAreaProvider>
          <SafeAreaView style={s.safeArea}>
            {isFontLoaded && weather && city && (
              <Stack.Navigator
                screenOptions={{ headerShown: false, animation: "fade" }}
                initialRouteName="Home"
              >
                <Stack.Screen name="Home">
                  {() => (
                    <Home weather={weather} city={city} onSubmit={onSubmit} />
                  )}
                </Stack.Screen>
                <Stack.Screen name="Forecast">
                  {() => <Forecast />}
                </Stack.Screen>
              </Stack.Navigator>
            )}
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </NavigationContainer>
  );
}
