import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed"
import {MuestraStack} from "./MuestraStack";
import {RankingStack} from "./RankingStack";
import {SearchStack} from "./SearchStack";
import { AccountStack } from "./AccountStack";
import { screen } from "../utils";

const Tab = createBottomTabNavigator();


export function AppNavigation(){
    return(
        <Tab.Navigator screenOptions={({ route })=> (
            {
                tabBarActiveTintColor: "#33A5FF",
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarInactiveTintColor: "#646464",
                tabBarIcon: ({ color ,size }) => screenOptionsTab(route, color, size),
            })}
        >
            <Tab.Screen name={screen.muestra.tab} component={MuestraStack} options={{title: "Muestras"}}/>
            <Tab.Screen name={screen.search.tab} component={SearchStack} options={{title: "Search"}}/>
            <Tab.Screen name={screen.ranking.tab} component={RankingStack} options={{title: "Ranking"}}/>
            <Tab.Screen name={screen.account.tab} component={AccountStack} options={{title: "Account"}}/>
        </Tab.Navigator>
    )
}

function screenOptionsTab(route, color, size){
    let iconName;

    if(route.name === screen.muestra.tab){
        iconName = "water-check";
    }
    if(route.name === screen.ranking.tab){
        iconName = "weather-fog";
    }
    if(route.name === screen.search.tab){
        iconName = "magnify-expand";
    }
    if(route.name === screen.account.tab){
        iconName = "account-key";
    }

    return (
        <Icon 
            type="material-community" 
            name={iconName}
            color = { color }
            size = { 28 } 
            
        />
    )
}


