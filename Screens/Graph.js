import React from 'react'
import { View, Button, Dimensions, StyleSheet, center} from 'react-native'
import{NativeBaseProvider, Text,Box, Avatar, HStack,} from'native-base'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const Graph = ({ navigation }) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }
    ]
  }

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 100,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 100,
    color: (opacity = 1) => `rgb(0, 153, 51, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };



  const data1 = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };




  return (

    <View style={styles.container}>

      <NativeBaseProvider>
      <Text bold>👋 Hola!</Text>
      <Text bold fontSize="3xl"> Luca Pablo</Text>
      
      
        <LineChart
        data={data}
        width={380}
        height={220}
        chartConfig={chartConfig}
        style={{
          alignItems: 'center',
          marginTop: 80,
          marginBottom:50,

        }
        }
      />
      
      <HStack justifyContent="center" space={2}>
      <Avatar bg="green.500" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
       
      </Avatar>
      <Avatar bg="cyan.500" source={{
      uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
       
      </Avatar>
      <Avatar bg="indigo.500" source={{
      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
       
      </Avatar>
      <Avatar bg="amber.500" source={{
      uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }}>
       
      </Avatar>
    </HStack>;
      </NativeBaseProvider>
      
     

      <ProgressChart
        data={data1}
        width={Dimensions.get('window').width}
        height={200}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}

      />


    </View>
  )
}

export default Graph

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
  },

});