import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TokyoSubHeader = () => {
    return (
        <View style={headerContainer}>
            <Text style={headerText}>Tokyo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#56D2C7',
        height: 60,
        justifyContent: 'center',
        marginHorizontal: 3,
        marginTop: 3
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

export default TokyoSubHeader;