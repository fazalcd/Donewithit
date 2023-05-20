import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  View,
  Button
} from "react-native";
import { myHijriDateFormat } from "../components/ArabicCalendar";
import { salahDetails } from "../Data/salahDetails";
import SalahCard from "../components/SalahCard";
import AnnouncementComponent from "../components/AnnouncementComponent";

export default function HomeScreen() {
  const today = new Date();
  const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
  const date = today.toLocaleDateString("en-US", options);

  // convert the date to Arabic calendar date using your preferred method
  const arabicDate = myHijriDateFormat(today);

  const salahTiles = () => {
    return salahDetails.map((salah, idx) => {
      return <SalahCard key={idx} leftText={salah.prayer} rightText={salah.time} />;
    });
  };

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.arabicDate}>{arabicDate}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <AnnouncementComponent/>
      {salahTiles()}
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 300,
    width: 300,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  dateContainer: {
    position: "absolute",
    top: 40,
    left: 20
  },
  date: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666"
  },
  arabicDate: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
