import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MuestraScreen } from "../screens/Muestras/MuestraScreen";
import {AddMuestrasScreen} from "../screens/Muestras/AddMuestrasScreen";
import {screen} from "../utils";


const Stack = createNativeStackNavigator();

export function MuestraStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.muestra.muestras} component={MuestraScreen} options={{title: "Muestras de almácigos"}}/>
            <Stack.Screen name={screen.muestra.addMuestra} component={AddMuestrasScreen} options={{title: "Agregar muestra"}}/>
        </Stack.Navigator>
    )
}