import React from "react";
import { View, Text ,TouchableOpacity, Share} from "react-native";
import styles from "./style";

export default function ResultIMC (props){
    
    const onShare = async ()=> {
        const result = await Share.share({
            message: `Meu IMC hoje é: ${props.resultIMC}`
        })
    }

    return(
        <View style={styles.resultImc}>
            <Text style={styles.info}>{props.message}</Text>
            <Text style={styles.numberImc}>{props.resultIMC}</Text>
            <View style={styles.shareButtonBox}>
                {props.resultIMC?
                <TouchableOpacity
                 style={styles.shareButton}
                 onPress={onShare}
                 >
                    <Text style={styles.shareTxt}>Compartilhar</Text>
                </TouchableOpacity>
                 :
                 ''
                }
            </View>
        </View>
    )
}