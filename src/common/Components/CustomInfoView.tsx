import React from 'react';
import {StyleSheet, Pressable, Text, View, Image} from 'react-native';
//** Interfaces */
import {CustomInfoViewProps} from '../../Interfaces/index';
/** Colors */
import Colors from '../../libs/Colors';
/** Fonts */
import {SF_PRO_600} from '../../utils/fonts';

const CustomInfoView = ({Icon, title, callBack}: CustomInfoViewProps) => {
  return (
    <Pressable onPress={callBack} style={{marginVertical: 3}}>
      <View style={{margin: 5}}>
        <Image source={Icon} style={styles.iconStyles} resizeMode={'contain'} />
        {title && <Text style={styles.titleStyles}>{title}</Text>}
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  titleStyles: {
    color: Colors.whiteColor,
    fontFamilty: SF_PRO_600,
    fontSize: 14,
  },
  iconStyles: {
    width: 25,
    height: 25,
  },
});

export default CustomInfoView;
