import React from 'react'
import {  View, StyleSheet, FlatList } from 'react-native'
import { menuItems } from '../../constants';
import { SettingItemCard } from '../../components/settings/settingsCard';
import { useNavigation } from "@react-navigation/native"
export const Settings = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <FlatList data={menuItems} renderItem={({ item }) =>
        <View style={{ marginTop: 10 }} key={item.id}>
          <SettingItemCard settingName={item.name} iconName={item.iconName}  handleClick={() =>   navigation.navigate(item.redirect)}/>
        </View>}
        keyExtractor={item => item.id} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});