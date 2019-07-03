import { AsyncStorage, Platform } from "react-native";
import firebase from "react-native-firebase";
import moment from "moment";

export function verificationEmail(mail) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(mail);
}

export async function _storeData(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    //   console.warn("done done")
  } catch (error) {
    // Error saving data
  }
}

export async function _retrieveData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      // console.warn(value);
      return value;
    }
  } catch (error) {
    // Error retrieving data
    return null;
  }
}

export async function cleardata() {
  try {
    AsyncStorage.removeItem("userInfo");
    AsyncStorage.removeItem("logged");
  } catch (error) {
    // Error retrieving data
    return null;
  }
}

export function NumberWithSpaces(x) {
  return Math.floor(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function numberOfDaysReservation(start, end) {
  let startDate = moment(start);
  let endDate = moment(end);

  let numberDaysReservation = endDate.diff(startDate, "days") + 1;
  return numberDaysReservation;
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

export function generatorMessageID() {
  return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4();
}

export async function convertCoinValue(from, to) {
  try {
    let response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=" +
        from +
        "&vs_currencies=" +
        to
    );
    let responseJson = await response.json();

    if (responseJson[from][to] !== undefined) {
      return responseJson[from][to];
    } else {
      return;
    }
  } catch (error) {
    console.error(error);
  }
}

export function getStatusColor(status) {
  let color =
    status == "Pending"
      ? "#FDC058"
      : status == "Confirmed"
      ? "#17A370"
      : status == "Canceled"
      ? "#FC2A53"
      : status == "Completed"
      ? "#A3A3BD"
      : null;

  return color;
}

export function snapshotToArray(snapshot) {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item["key"] = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr.reverse();
}
