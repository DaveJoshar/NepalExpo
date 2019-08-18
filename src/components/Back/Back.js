import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


const back = (props) =>{
	return(
		<Icon.Button name="angle-left" backgroundColor='white' size={35} onPress={props.click} color="black"/>
	)
};

export default back;