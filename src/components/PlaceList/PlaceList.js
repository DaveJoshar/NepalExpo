import React from 'react';
import {View, FlatList,StyleSheet, Text} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = props =>{
	// to output the places array using map function
    // const placesOutput = props.places.map((place,i) => (
    //     <ListItem 
    //     	key={i} placeName={place} 
    //     	onItemPressed={()=>props.onItemDeleted(i)}/>
    // ));
    // data prop define what data it is going to render
	// without data list is not render
	return(
		
		<View>
			<Text style={styles.attractionLarge}> Attraction </Text>
			<Text style={styles.attractionSmall}> 25 Attraction points </Text>
			<FlatList style={styles.listContainer}
					data={props.places}
					renderItem={(info)=>(
						<ListItem
			        		placeName={info.item.name}
			        		placeImage={info.item.image}
			        		keys={info.item.key}
			        		onItemPressed={()=>props.onItemSelected(info.item.key)}
	        			/>
					)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	listContainer:{
    	width:"100%",
    	marginTop:10,
  	},
  	attractionLarge:{
  		fontWeight: "bold",
  		fontSize: 30,
  		marginTop: 30
  	},
  	attractionSmall:{
  		fontSize: 14,
  		marginTop: 4,
  		marginLeft: 5,
  		color: '#c4c2b9'
  	},
}
);
export default PlaceList;