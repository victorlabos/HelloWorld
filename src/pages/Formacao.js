import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <view>
            <text>formação</text>

            <button
                title="Voltar" 
                onPress={() => navigation.goBack ()}

            />
        </view>
    );
}

export default Formacao;