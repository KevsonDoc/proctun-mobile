import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const TopMenu = () => {
  return (
      <>
        <StatusBar backgroundColor="#000000" barStyle="light-content"/>
        <View style={styles.container}>
            <Text style={styles.text}>PRCTUN</Text>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        height: "8.5%",
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: "#2A7AE4",
        shadowColor: "rgba(0,0,0, 1)",
        shadowOffset: {
        	width: 0,
        	height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 20,
    },
    text: {
        color: "#FFFFFF",
        textAlign: "center",
        marginTop: "5%",
        fontSize: 20,
        letterSpacing: 20,
        fontFamily: "Bourgeois-Book"
    },
});

export default TopMenu;