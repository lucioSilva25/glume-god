import React from 'react'
import { View, Button, Dimensions, StyleSheet, center} from 'react-native'
import{NativeBaseProvider, Text,Box, Avatar, HStack,VStack, Center, Badge, Spacer, Flex,Icon, Foundation} from'native-base'

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
    labels: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
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
      
      <Text bold fontSize="2xl" padding="10px"> Hola!👋 </Text>
            <HStack space={190}>
      <Text bold fontSize="3xl" padding="10px">Luca Pablo</Text>


      
      <Avatar bg="green.500" source={{
      uri: "https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/open_graph_image/public/fdl_content_import_it/luca-sacchi.jpg?itok=KZld-OLy"
    }}>
       
      </Avatar>
  
    </HStack>
     
      
      
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
      
  

    <VStack py="8" space={8} alignItems="center" justifyContent="center" flexDirection="row">
    <VStack  width="380" height="250" m="3" w="140" borderRadius="xl" p="3" bg="green.200" space={2} alignItems="center" justifyContent="center">
        
            <Text bold fontSize="lg" textAlign="center" _dark={{
            color: "green.800"
          }}>
              Grupo Sanguineo
            </Text>
          </VStack>
          <VStack width="380" height="250" m="3" w="140" borderRadius="xl" p="3" bg="green.200" space={2} alignItems="center" justifyContent="center">
        
            <Text bold fontSize="lg" textAlign="center" _dark={{
            color: "green.200"
          }}>
              Peso (Kg)
            </Text>
          </VStack>
          </VStack>
    
 
      </NativeBaseProvider>
      
     

      


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