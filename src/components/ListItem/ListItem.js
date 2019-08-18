import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';

const listItem =(props) =>{
	//view doesnot have onPress prop
	// TOuchable can only have one child which could be view with text or text only
	// here image resize mode is by default cover
	return(
		<TouchableOpacity onPress={props.onItemPressed}>
			<View style={styles.listItem} >
				<Image style={styles.placeImage} source={props.placeImage}/>
				<View style={styles.textContainer}>
					<Text style={styles.placeName}>{props.placeName}</Text>
					<Text style={styles.placeDetail}>Some detail about the location</Text>
					<Text style={{textAlign: 'right', fontSize: 12, color:'#c4c2b9'  }}>123</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listItem:{
		width:"100%",
		padding:10,
		marginBottom:5,
		flexDirection: 'row',
		alignItems:'center',

	},
	placeImage:{
		height:50,
		width:50,
		borderRadius:50/2
	},
	textContainer:{
		borderBottomWidth: 1,
		marginLeft:25,
		height:70,
		width:'80%',
		borderBottomColor: '#c4c2b9'
	},
	placeName:{
		paddingTop: 20,
		fontSize:14,
		textAlign: 'left',

	},
	placeDetail:{
		fontSize: 12,
		color: '#c4c2b9',
		textAlign: 'left' 

	}
});

export default listItem;