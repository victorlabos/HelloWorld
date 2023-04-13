import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = ({navigation}) => {
    return (
        <view>
            <text>Pagina Inicial</text>

            <button
                title="Formação" 
                onPress={() => navigation.navigate('formacao')}

            />
        </view>
    );
}

const estilos = StyleSheet.create ({

});

export default Home;
