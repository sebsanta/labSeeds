import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MuestraScreen } from "../screens/Muestras/MuestraScreen";
import { AddMuestrasScreen } from "../screens/Muestras/AddMuestrasScreen";
import { MuestraScreenDetalle } from "../screens/Muestras/MuestraScreenDetalle";
import { AddLecturaScreen} from '../screens/Muestras/AddLecturaScreen';
import {screen} from "../utils";


const Stack = createNativeStackNavigator();

export function MuestraStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={screen.muestra.muestras} component={MuestraScreen} options={{title: "Listado de muestras registradas"}}/>
            <Stack.Screen name={screen.muestra.addMuestra} component={AddMuestrasScreen} options={{title: "Agregar muestra"}}/>
            <Stack.Screen name={screen.muestra.muestra} component={MuestraScreenDetalle} options={{title: "Detalle de muestra"}}/>
            <Stack.Screen name={screen.muestra.addLecturaScreen} component={AddLecturaScreen} options={{title: "Nueva lectura"}}/>
        </Stack.Navigator>
    )
}