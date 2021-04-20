import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SongDetail from '../component/SongDetail'
import SongList from '../component/SongList'


const SongScreen = () => {
    return (
        <View>
            <SongDetail/>
            <SongList/>
        </View>
    )
}

export default SongScreen

const styles = StyleSheet.create({})
