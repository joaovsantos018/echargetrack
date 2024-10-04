import react from "react";
import { View, Text} from 'react-native';

export default function ResultLogin({props}) {
    return (
        <View>
            <Text> {props.messageResultLogin}  </Text>
            <Text>{props.resultLogin}</Text>
        </View>
    );
}
