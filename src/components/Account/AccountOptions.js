import React, { useState } from 'react';
import { View } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { ListItem, Icon } from '@rneui/themed'; 
import { styles } from './InfoUser/InfoUser.styles'
import { map } from "lodash";
import { Modal } from '../../components/Shared';
import { ChangeDisplayNameForm } from '../Account/ChangeDisplayNameForm';
import { ChangeEmailForm } from '../Account/ChangeEmailForm';
import { ChangePasswordForm } from '../Account/ChangePasswordForm';

export function AccountOptions(props) {

 const {onReload} = props;

 const [showModal, setShowModal] = useState(false);
 const [renderComponent, setRenderComponent] = useState(null);

 const onCloseOpenModal = () => setShowModal((prevState) => !prevState);

 const selectedComponent = (key) => {
        if(key == 'displayName'){
            setRenderComponent(<ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload}/>);
        }

        if(key == 'email'){
            setRenderComponent(<ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload}/>)
        }

        if(key == "password"){
            setRenderComponent(<ChangePasswordForm onClose={onCloseOpenModal} onReload={onReload}/>)
        }

        onCloseOpenModal();

 }

  const menuOptions = getMenuOptions(selectedComponent);



  return (
    <View>
        {map(menuOptions,(menu, index)=>(

            <ListItem 
                    key={index} 
                    Component={TouchableScale}
                    friction={90} 
                    tension={100} // propiedades de touch 
                    activeScale={0.85} 
                    bottomDivider 
                    topDivider
                    pad={20}
                    onPress={menu.onPress}>
                    <Icon 
                        type={menu.iconType} 
                        name={menu.iconNameLeft}
                        color={menu.iconColorLeft}
                    />
                <ListItem.Content >
                    <ListItem.Title style={{fontWeight: 'bold'}}>{menu.title}</ListItem.Title>
                </ListItem.Content>
                    <Icon 
                        type={menu.iconType}
                        name={menu.iconNameRight}
                        color={menu.iconColorRight}
                    />
            </ListItem>

        ))}
        <Modal show={showModal} close={onCloseOpenModal} style={styles.modal}>
            {renderComponent}
        </Modal>
    </View>
  )
}


function getMenuOptions(selectedComponent){
    return [
        {
            title: "Cambiar nombre y apellido",
            iconType: "material-community",
            iconNameLeft: "account-box",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("displayName"),
        },
        {
            title: "Cambiar email",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("email"),
        },
        {
            title: "Cambiar contraseña",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectedComponent("password"),
        }
    ];
}

