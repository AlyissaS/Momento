import {View, Text, Pressable,StyleSheet } from 'react-native';
import React from 'react';
import { Link} from 'expo-router';

const QuestionScreen = () => {
  	
  	return (
    		<View style={styles.questionScreen}>
      			<View style={styles.rectangleParent}>
                  <Pressable style={styles.groupChild}>
                    <Link style={styles.next} href={"../functions/list"}>
        				<Text style={styles.next}>Next</Text>
                    </Link>
                    </Pressable>
      			</View>
      			<Text style={[styles.welcomeToMemory, styles.thisIsWhereFlexBox]}>Welcome to Memory Quiz</Text>
      			<Text style={[styles.thisIsWhere, styles.thisIsWhereFlexBox]}>This is where we test your memory help figure out what is missing while helping your brain exercise. Click next to continue.</Text>
    		</View>);
};

const styles = StyleSheet.create({
    linkStyle:{
        top: 0
    },
  	thisIsWhereFlexBox: {
    		color: "#000",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "Belgrano-Regular",
    		position: "absolute"
  	},
  	groupChild: {
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		borderRadius: 20,
    		backgroundColor: "#2d4962",
    		left: 0,
    		top: 0,
    		height: 81,
    		width: 332,
    		position: "absolute"
  	},
  	next: {
    		color: "#fff",
    		justifyContent: "center",
    		alignItems: "center",
    		display: "flex",
    		textAlign: "center",
    		fontFamily: "Belgrano-Regular",
    		fontSize: 40,
    		left: 0,
    		top: 0,
    		height: 81,
    		width: 332,
    		position: "absolute"
  	},
  	rectangleParent: {
    		top: 466,
    		left: 49,
    		height: 81,
    		width: 332,
    		position: "absolute"
  	},
  	welcomeToMemory: {
    		top: 201,
    		left: 9,
    		width: 411,
    		height: 129,
    		fontSize: 40,
    		color: "#000"
  	},
  	thisIsWhere: {
    		top: 330,
    		fontSize: 14,
    		width: 400,
    		height: 96,
    		left: 20
  	},
  	questionScreen: {
    		backgroundColor: "#ffbd94",
    		flex: 1,
    		width: "100%",
    		height: 932,
    		overflow: "hidden"
  	}
});

export default QuestionScreen;