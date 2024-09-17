import { StyleSheet, Dimensions } from "react-native";
import Colors from "../libs/Colors";
import { SF_PRO_600, SF_PRO_FONT_MEDIUM_500, SF_PRO_REGULAR_400 } from "../utils/fonts";
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  centered: {
    flex: 1,
    backgroundColor: Colors.whiteColor,
  },
  playView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playImage: {
    width: 18,
    height: 18,
    marginHorizontal: 10,
  },
  mediaText: {
    fontFamily: SF_PRO_600,
    fontSize: 20,
    color: Colors.fontColorCommon,
    marginBottom: 10,
  },
  userNameStyle: {
    alignSelf: 'center',
    alignText: 'center',
    marginVertical: 10,
    fontSize: 22,
    fontFamily: SF_PRO_600,
    color: Colors.fontColorCommon,
  },
  tapBelowTextStyle: {
    fontSize: 20,
    fontFamily: SF_PRO_FONT_MEDIUM_500,
    color: Colors.fontColorCommon,
  },
  tapViewStyle: {
    flexDirection: 'row',
    backgroundColor: Colors.bgCardColor,
    marginTop: 20,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heartViewStyle: {
    backgroundColor: 'green',
    padding: 18,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  largeFontStyle: {
    fontFamily: SF_PRO_600,
    fontSize: 17,
    color: Colors.fontColorCommon,
  },
  smallFontStyle: {
    fontFamily: SF_PRO_REGULAR_400,
    color: Colors.fontColorCommon,
    fontSize: 14,
  },
  iconHeartStyle: {
    width: 34,
    height: 26,
  },
  iconArraowRight: {
    width: 6,
    height: 12,
    margin: 10,
  },
  card: {
    width: 250,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
  },
  image: {
    width: 208,
    height: 370,
    marginRight: 10,
    borderRadius: 10,
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.bgButtonColor,
    marginVertical: 20,
  },
  cameraImageStyle: {
    width: 21,
    height: 20,
    marginRight: 10,
  },
  uploadTextStyle: {
    color: Colors.whiteColor,
    fontSize: 16,
    fontFamily: SF_PRO_FONT_MEDIUM_500,
  },
  video: {
    width: width - 150,
    height: 440,
    backgroundColor: '#000',
    marginRight: 10,
  },
  videoContainer: {
    marginRight: 10,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
});
