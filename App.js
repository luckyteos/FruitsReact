import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

class Test extends Component {
    render() {
        let pic = {
            uri: "https://cdn1.medicalnewstoday.com/content/images/articles/323/323783/fresh-pineapple-sliced-on-chopping-board.jpg"
        }
        return (
        <View style = {{backgroundColor: "#F2D06B", flex:1, flexDirection: "column", alignItems: "stretch"}}>
            <View style = {{flexDirection: "column", flex: 2}}>
                <Image source={pic} style = {{height: 300, flex: 4}}/>
                <View style = {{flex: 1}}>
                    <Text style = {{color: "#736332", fontSize: moderateScale(26), textAlign : "center", fontFamily: "sans-serif"}}>10 ways to cook a Pineapple</Text>
                </View>
            </View>
            <View style = {{flex: 1}}>

            </View>
        </View> 
         );
    }
}

export default Test;