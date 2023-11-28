import React from "react";
import { View, Text, StyleSheet } from 'react-native'


export default function App() {
  return (
    <View style={styles.root}><Text style={[styles.text, { textAlign: 'center', textAlignVertical: 'center', fontSize: 36 }]}>Bevásárlólisták</Text>
      <View
        style={[
          styles.container,
          {
            backgroundColor: '#e1e4e8',
          },
        ]}>
        {/* zIndex: 0 */}
        <View style={[styles.item, { backgroundColor: '#5cc9f5', flexDirection: 'row'}]} > 
        <Text style={[styles.text, { textAlign: 'center', textAlignVertical: 'center' }]}>Tesco</Text></View>  
        
        {/* zIndex: 1 */}
        <View style={[styles.item, { backgroundColor: '#5cc9f5', flexDirection: 'row' }]} >
        <Text style={[styles.text, { textAlign: 'center', textAlignVertical: 'center' }]}>Lidl</Text></View>  

        {/* zIndex: 2 */}
        <View style={[styles.item, { backgroundColor: '#5cc9f5', flexDirection: 'row' }]} >
        <Text style={[styles.text, { textAlign: 'center', textAlignVertical: 'center' }]}>Penny</Text></View> 

        {/* zIndex: 3 */}
        <View style={[styles.item, { backgroundColor: '#5cc9f5', flexDirection: 'row' }]} >
        <Text style={[styles.text, { textAlign: 'center', textAlignVertical: 'center' }]}>KIK</Text></View> 

        {/* zIndex: 4 */}
        <View style={[styles.item, { backgroundColor: '#5cc9f5', flexDirection: 'row' }]} >
        <Text style={[styles.text, { textAlign: 'center', textAlignVertical: 'center' }]}>EuroFamily</Text></View>

        {/* zIndex: 5 */}
        <View style={[styles.item, { backgroundColor: '#5cc9f5', flexDirection: 'row' }]} >
        <Text style={[styles.text, { textAlign: 'center', textAlignVertical: 'center' }]}>Interspar</Text></View>  
      </View>
       
    </View>
 
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 650,
    width: 300,
    borderRadius: 16,
    padding: 16,
    borderWidth: 4,
    borderColor: 'rgba(0,0,0,0.2)',
  },
  item: {
    borderWidth: 4,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 96,
    width: 260,
    borderRadius: 8,
  },
});
