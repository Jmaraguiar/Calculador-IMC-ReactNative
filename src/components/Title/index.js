import React from "react";
import { StyleSheet,View, Text } from "react-native";
import styles from "./style";

export default function Title (){
    
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>IMC Health</Text>
        </View>
    )
}


