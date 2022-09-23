import React from 'react'
import { View, Button, Dimensions, StyleSheet, center} from 'react-native'
import{NativeBaseProvider, Text,Box} from'native-base'

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