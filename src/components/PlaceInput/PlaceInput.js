import React, {Component} from 'react';
import {Text,TextInput,Button,View, StyleSheet, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Back from '../Back/Back.js';
export default class placeInput extends Component{
	
	state = {
	    placeName:''
  	}
  	// to handle or take text input in textInput
	  placeNameChangedHandler = (val)=>{
	    this.setState({
	      placeName:val
	    });
	    
	  };
	  // if empty none is returned
	  placeSubmitHandler = () =>{
	    if(this.state.placeName.trim() === ""){
	      
	      return;
	    }
	    this.props.onPlaceAdded(this.state.placeName);
	    
	  }
		render()
		{
			return(
				
				<View style={styles.inputContainer}>
			        <Back/>
			        <TextInput
			          onChangeText={this.placeNameChangedHandler}
			          placeholder="Search"
			          style={styles.placeInput}
			        />
			       <Icon.Button name="search" color="black" backgroundColor="white" onPress={this.placeSubmitHandler}/>
            		
          			
		      	</View>

			);
		}
}

const styles = StyleSheet.create({
	inputContainer:{
    // flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%"

  },
  placeInput:{
    width:"70%",
  },
  placeButton:{
    width:"30%"
  }
});