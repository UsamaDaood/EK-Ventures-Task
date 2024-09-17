import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
/** Images Sources */
import {
  IC_APP_LOGO,
  IC_MESSAGING,
  IC_NOTIFICATION,
  IC_SEARCH,
} from '../../utils/ImageSource';

const CommonHeader = () => {
  return (
    <View style={styles.headerStyle}>
      <Image
        source={IC_APP_LOGO}
        style={{width: 187, height: 32}}
        resizeMode="contain"
      />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={IC_SEARCH}
          style={styles.iconStyles}
          resizeMode="contain"
        />
        <Image
          source={IC_MESSAGING}
          style={styles.iconStyles}
          resizeMode="contain"
        />
        <Image
          source={IC_NOTIFICATION}
          style={styles.iconStyles}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    padding: 12,
    borderBottomColor: '#C9CCD1',
  },
  iconStyles: {
    width: 20,
    height: 20,
    margin: 9,
  },
});

export default CommonHeader;
