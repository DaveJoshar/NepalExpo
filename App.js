import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import ListItem from "./src/components/ListItem/ListItem.js";
import PlaceInput from "./src/components/PlaceInput/PlaceInput.js"
import PlaceList from "./src/components/PlaceList/PlaceList"
import placeImage from './src/assets/lumbini.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
export default class App extends Component {
  state = {
    placeName:' ',
    places:[],
    selectedPlace:null
  }
  // // to handle or take text input in textInput
  // placeNameChangedHandler = (val)=>{
  //   this.setState({
  //     placeName:val
  //   });
    
  // };

  placeAddedHandler = (placeName) =>{
    
    this.setState(prevState => {
        return{
          // concat to pervious state places
          // image object is stores in image of the state places
            places : prevState.places.concat({
              key: Math.random(),
              name:placeName,
              image: placeImage
              
               //  // to get from web
               // image: {
               //   uri: "url of picture";
               //  }
              
            })
        };
    });
  }
// to delete when taped
  placeDeletedHandler = () => {
    //return false if index passed is equal to i
    //filter returns new array satisfying specific criteria
    this.setState(prevState => {
      return{
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace:null
      }
    });
  }
  modalClosedHandler = () =>{
    this.setState({
      selectedPlace:null
    });
  }
  placeSelectedHandler = key => {
      this.setState(prevState => {
        return{
          selectedPlace:prevState.places.find(place =>{
            return place.key === key;
          })
        };
      });   
  };

  render(){

  return (
    <View style={styles.container}>
        <PlaceDetail
            selectedPlace ={this.state.selectedPlace}
            onItemDeleted = {this.placeDeletedHandler}
            onModalClosed = {this.modalClosedHandler}
        />
        
        <PlaceInput 
            onPlaceAdded={this.placeAddedHandler}
        />
        
        <PlaceList  
            places={this.state.places} 
            onItemSelected={this.placeSelectedHandler}
        />
    </View>
  )
}}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    justifyContent: 'flex-start',
    marginLeft:25
  }
  
});
