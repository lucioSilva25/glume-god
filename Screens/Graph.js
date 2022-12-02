import React from 'react'
import { View, StyleSheet} from 'react-native'
import{NativeBaseProvider, Text, Avatar, HStack,VStack} from'native-base'
import {LineChart} from "react-native-chart-kit";

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
    color: (opacity = 1) => "#0D8E38",
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
      
      <Text bold fontSize="2xl" padding="5px"> Hola!👋 </Text>
            <HStack space={190}>
      <Text bold fontSize="3xl" marginTop="-25px" padding="10px">Luca Pablo</Text>


      
      <Avatar marginTop="-30px" bg="green.500" source={{
      uri: "https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/open_graph_image/public/fdl_content_import_it/luca-sacchi.jpg?itok=KZld-OLy"
    }}> NB
    <Avatar.Badge bg="green.500" />
       
      </Avatar>
  
    </HStack>
     
      
      
        <LineChart
        data={data}
        width={380}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{
          alignItems: 'center',
          marginTop: 30,

        }
        }
      />
      
  

    <VStack py="8" space={8} alignItems="center" justifyContent="center" flexDirection="row">
    <VStack  width="380" height="200" m="3" w="140" borderRadius="xl" p="3" bg="#147845" space={2} alignItems="center" justifyContent="center">
        
            <Text bold fontSize="lg" color="#ACF4C4" textAlign="center" _dark={{
            
          }}>
              Grupo Sanguineo
            </Text>
          </VStack>
          <VStack width="380" height="200" m="3" w="140" borderRadius="xl" p="3" bg="#147845" space={2} alignItems="center" justifyContent="center">
        
            <Text bold fontSize="lg" color="#ACF4C4" textAlign="center" _dark={{
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