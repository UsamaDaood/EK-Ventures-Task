import { StyleSheet,Dimensions } from "react-native";
import Colors from "../libs/Colors";
import { SF_PRO_600 } from "../utils/fonts";
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  videoContainer: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  mediaView: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mediaText: {
    color: Colors.whiteColor,
    fontFamily: SF_PRO_600,
    fontSize: 23,
  },
  bottomOptions: {
    position: 'absolute',
    right: 13,
    bottom: 30,
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  bufferingIndicator: {
    position: 'absolute',
    top: height / 2 - 30,
    left: width / 2 - 30,
  },
  infoContainer: {
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  retryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  retryButtonText: {
    color: 'white',
    fontSize: 16,
  },
});