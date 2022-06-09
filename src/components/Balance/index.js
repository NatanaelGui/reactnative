import React from 'react';
import {
    View,
    Text,
    StyleSheet,
 } from 'react-native';

export default function Balance() {
 return (
    <View style={styles.container}>

        <View style={styles.item}>
            <Text style={styles.item}>Saldo</Text>
                </View>
                    <Text style={styles.correncySymbol}>R$</Text>
                    <Text style={styles.Balance}>15.000,00</Text>
                <View>
        </View>

        <View style={styles.item}>
            <Text style={styles.item}>Gastos</Text>
                </View>
                    <Text style={styles.correncySymbol}>R$</Text>
                    <Text style={styles.Balance}>390,00</Text>
                <View>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle:{
        
    }
})