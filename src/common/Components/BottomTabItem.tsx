import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
/** Components */
import {TabItemProps} from '../../Interfaces/index';
//** Styles */
import Color from '../../libs/Colors';
/** Fonts */
import {SF_PRO_REGULAR_400} from '../../utils/fonts';

const BottomTabItem = ({imageSource, focus, title, isVideo}: TabItemProps) => {
  const styles = createStyles(focus, isVideo);
  return (
    <View style={[styles.tabMainView]}>
      {focus && <View style={styles.roundedBox} />}
      <Image
        source={imageSource}
        style={styles.imageStyle}
        resizeMode={'contain'}
      />
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const createStyles = (focus: boolean, isVideo: boolean) =>
  StyleSheet.create({
    imageStyle: {
      width: 26,
      height: 26,
    },
    tabMainView: {
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      paddingHorizontal: 15,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    roundedBox: {
      width: 55,
      height: 3,
      marginBottom: 5,
      marginHorizontal: 10,
      backgroundColor: isVideo ? Color.whiteColor : Color.bgButtonColor,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    titleStyle: {
      color: isVideo ? Color.whiteColor : Color.fontColorCommon,
      textAlign: 'center',
      alignSelf: 'center',
      fontSize: 10,
      fontFamily: SF_PRO_REGULAR_400,
    },
  });

export default BottomTabItem;
