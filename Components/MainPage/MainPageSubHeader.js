import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainPageSubHeader = () => {
    return (
        <View style={headerContainer}>
            <Text style={headerText}>Travelology</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#56D2C7',
        height: 70,
        marginTop: 45,
        justifyContent: 'center',
    },
    headerText: {
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    }
});

const { headerContainer, headerText } = styles;

export default MainPageSubHeader;