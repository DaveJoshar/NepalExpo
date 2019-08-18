import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet} from 'react-native';
import Back from '../Back/Back.js';
import Icon from 'react-native-vector-icons/FontAwesome'
const PlaceDetail = props =>{
	let modalContent = null;
	let modalImage = null;
	if(props.selectedPlace){
		modalImage = (
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={props.selectedPlace.image}/>
				</View>
			);

		modalContent = (
			<View>
				
				<Text style={styles.placeName}>
					{props.selectedPlace.name} {"\n"}
					<Text style={{color:'#c4c2b9',fontSize: 12}}>Lumbinī is a Buddhist pilgrimage site.</Text>
				</Text>
				<View style={styles.placeTable}>
					<View style={{position:'absolute', left:0,width:"30%" }}>
						<Text><Text style={{fontWeight:'bold'}}>1998</Text>{"\n"}Established</Text>
					</View>
					<View style={{width:"30%", position:'absolute',left:90}}>
						<Text><Text style={{fontWeight:'bold'}}>Nepal</Text>{"\n"}Supported by</Text>
					</View>
					<View style={{width:"20%", position:'absolute', right:60}}>
						<Icon.Button name="headphones" backgroundColor='white' size={25} onPress={()=>{alert('Audio icon');}} color="black"/>
					</View>
					<View style={{width:"20%", position:'absolute', right:0}}>
						<Icon.Button name="video-camera" backgroundColor='white' size={25} onPress={()=>{alert('Video icon');}} color="black"/>
					</View>
				</View>
				<Text style={{fontSize: 16, textAlign: 'center',color:'#828282'}}>	
					<Text>Time: 9:00 AM to 4:00 PM</Text>{"\n"}
					<Text>Prayers Time: 9:00 AM to 4:00 PM</Text>{"\n"}
					<Text>Special Events: Sunday 9:00 AM to 4:00 PM</Text>
				</Text>


			</View>
		)
	}

	return(
		<Modal onRequestClose = {props.onModalClosed} visible={props.selectedPlace!==null} animationType="slide">

			<View>
				<Back click={props.onModalClosed}/>
				{modalImage}
				<View style={styles.modalContent}>
					{modalContent}
				</View>
				
			</View>
		</Modal>


	)
	// <View>
	// 	<Button title="delete" color="red" onPress={props.onItemDeleted}/>
	// 	<Button title="Close" onPress={props.onModalClosed}/>
	// </View>
	
}

const styles = StyleSheet.create({
	modalContent:{
		backgroundColor: 'white',
		borderTopLeftRadius: 12,
		borderTopRightRadius: 12
	},
	image:{
		width:'100%',
		height:210,
		position:'absolute' 
	},
	placeName:{
		fontWeight: 'bold',
		textAlign:'justify',
		padding:20,
		fontSize: 22,
		fontWeight: 'bold' 
	},
	imageContainer:{
		width:'100%',
		height:200,
	},
	placeTable:{
		width:'90%',
		height:60,
		marginLeft:20,
		borderBottomWidth: 1,
		borderBottomColor: '#c4c2b9',
		fontSize: 14
	}
});
export default PlaceDetail;