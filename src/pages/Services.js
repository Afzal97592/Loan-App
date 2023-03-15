import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import {Fontisto} from 'react-native-vector-icons'
import {Entypo} from 'react-native-vector-icons'
import {Octicons} from 'react-native-vector-icons'
import {FontAwesome5} from 'react-native-vector-icons'
import { Link, useNavigate } from "react-router-native";


const Services = ({navigation}) => {
//  const navigate = useNavigate()

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.leftSection}
           onPress={
            // ()=>{navigate('/los')}
          ()=>navigation.navigate('LosPage'
          // {state:'Afzal'}
          )
          }
          >
            <Ionicons name="people" size={70} color="#2E80EB" />
            <Text style={styles.text}>LOS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightSection}>
            <MaterialCommunityIcons
              name="human-male-male"
              size={70}
              color="#2E80EB"
            />
            <Text style={styles.text}>Leades</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.leftSection}>
            <Fontisto name="person" size={70} color="#2E80EB" />
            <Text style={styles.text}>FI</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightSection}>
            <Entypo
              name="area-graph"
              size={70}
              color="#2E80EB"
            />
            <Text style={styles.text}>Dashboard</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.leftSection}>
            <Octicons name="tasklist" size={70} color="#2E80EB" />
            <Text style={styles.text}>Task Count</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightSection}>
            <FontAwesome5
              name="calculator"
              size={70}
              color="#2E80EB"
            />
            <Text style={styles.text}>Emi Calculator</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.leftSection}>
            <FontAwesome5 name="wrench" size={70} color="#2E80EB" />
            <Text style={styles.text}>Repair Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightSection}>
            <Ionicons
              name="people"
              size={70}
              color="#2E80EB"
            />
            <Text style={styles.text}>KYC Creation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  topSection: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
    marginTop: 30,
  },
  iconsContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  leftSection: {
    width: "45%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    //    elevation:1,
    margin: 10,
  },
  rightSection: {
    width: "45%",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    //    elevation:1,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    letterSpacing: 1,
    color: "#525252",
  },
});
