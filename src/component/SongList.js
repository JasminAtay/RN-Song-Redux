import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux'

const SongList = ({songs}) => {
    console.log(`props: `, songs);
    return (
        <View>            
            <FlatList
            ListHeaderComponent={()=> <Text>Songs List</Text>}
                style={{padding:10}}
                data={songs}
                keyExtractor={(item) => item.title}
                renderItem={({item}) =>(
                    <Row
                        id={item.id}
                        title={item.title}
                        onPress={() => navigation.navigate('Details', {post: item})}
                    />
                )}
            />
            
        </View>
    )
}

const mapStateToProps = (state) => {
    console.log(`state: `,state);
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);

const styles = StyleSheet.create({})
