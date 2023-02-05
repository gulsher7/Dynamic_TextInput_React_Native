//import liraries
import React, { useCallback, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

// create a component


const cloneDeep = (data: (string | object)[]) => {
  return  JSON.parse(JSON.stringify(data))
}

const App = () => {

  const [myInputs, setMyInputs] = useState([{ text: '' }])


  const onAdd = useCallback(() => {

    let previouInputs = [...myInputs]
    previouInputs.push({ text: '' })
    console.log(previouInputs)
    setMyInputs(previouInputs)
  }, [myInputs])

  const onChangeText = useCallback((text: string, i: number) => {

    let y = [...myInputs]
    y[i] = { text: text }
    console.time("answer time");

    // let x = myInputs.map((item, index) => {
    //   if (i == index) {
    //     return { ...item, text: text }
    //   }
    //   return item
    // })

    setMyInputs(y)
    console.timeEnd("answer time");
  }, [myInputs])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <Pressable
          onPress={onAdd}
          style={{
            marginBottom: 8
          }}>
          <Text>Add+</Text>
        </Pressable>
        <ScrollView>
          {myInputs.map((val, i) => {
            return (
              <TextInput
                key={String(i)}
                value={val.text}
                placeholder="Enter text"
                style={styles.inputStyle}
                onChangeText={text => onChangeText(text, i)}
              />
            )
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  inputStyle: {
    backgroundColor: '#DADADA',
    height: 42,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8
  }
});

//make this component available to the app
export default App;
