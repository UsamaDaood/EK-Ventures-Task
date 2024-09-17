import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  Pressable,
  Platform,
} from 'react-native';
/** Images Sources */
import {
  IC_ARROW_RIGHT,
  IC_CAMERA,
  IC_HEART_WHITE,
  IC_PLAY,
} from '../../utils/ImageSource';
import Video from 'react-native-video';
/** Redux */
import {useDispatch} from 'react-redux';
import {getVideosAsync} from '../../features/getVideos/thunks/index';
/** Components */
import CommonHeader from '../../common/Components/CommonHeader';
import {toastShow} from '../../libs/toast';
/** Interfaces */
import {MainScreenProps} from '../../Interfaces/index';
/** Styles */
import {styles} from '../../Styles/HomeStyles';

const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
  const dispatch = useDispatch<any>();
  const [resultVid, setResultVid] = useState<any>();

  // render Header
  const renderHeader = () => {
    return <CommonHeader />;
  };

  const getVideos = async () => {
    dispatch(getVideosAsync())
      .unwrap()
      .then((result: any) => {
        console.log('RESULT: VIDEOS ', result);
        setResultVid(result);
        toastShow('success', 'Successfully fethced.');
      })
      .catch(() => {
        toastShow('error', 'Something wrong');
      });
  };

  useEffect(() => {
    getVideos().catch();
  }, []);

  // render Tap View
  const renderTapView = () => {
    return (
      <View style={{}}>
        <Text style={styles.tapBelowTextStyle}>Please tap below</Text>

        {/* Tap View */}
        <View style={[styles.tapViewStyle]}>
          {/* Heart VIew */}
          <View style={styles.heartViewStyle}>
            <Image
              source={IC_HEART_WHITE}
              style={styles.iconHeartStyle}
              resizeMode={'contain'}
            />
          </View>

          {/* Middle View */}
          <View style={{alignItems: 'center'}}>
            <Text style={styles.largeFontStyle}>Large Font Title</Text>
            <Text style={styles.smallFontStyle}>SubTitle</Text>
          </View>

          {/* Arrow Icon */}
          <Image
            source={IC_ARROW_RIGHT}
            style={styles.iconArraowRight}
            resizeMode={'contain'}
          />
        </View>
      </View>
    );
  };
  const getVideoUri = (item: any) => {
    return Platform.OS === 'ios' ? item.urls.hls : item.urls.mp4;
  };

  // render Play View
  const renderPlayView = () => {
    return (
      <View style={{marginTop: 20}}>
        <View style={styles.playView}>
          <Image
            source={IC_PLAY}
            style={styles.playImage}
            resizeMode={'contain'}
          />
          <Text style={styles.mediaText}>Media</Text>
        </View>

        <FlatList
          data={resultVid}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                console.log('LOG:: ');
                navigation.navigate('HomeTabs', {
                  screen: 'Videos',
                  params: {vidoes: resultVid},
                });
              }}>
              <View style={styles.videoContainer}>
                <Video
                  source={{
                    uri: getVideoUri(item),
                  }}
                  style={styles.video}
                  paused={true}
                  resizeMode="cover"
                  repeat={true}
                />
              </View>
            </Pressable>
          )}
        />
      </View>
    );
  };

  // render Button
  const renderButton = () => {
    return (
      <View style={styles.buttonStyle}>
        <Image
          source={IC_CAMERA}
          style={styles.cameraImageStyle}
          resizeMode={'contain'}
        />
        <Text style={styles.uploadTextStyle}>Upload</Text>
      </View>
    );
  };

  return (
    <View style={styles.centered}>
      {renderHeader()}
      <ScrollView>
        <Text style={styles.userNameStyle}>Hello John,</Text>
        <View style={{marginHorizontal: 20}}>
          {renderTapView()}
          {/* render Media View */}
          {renderPlayView()}
          {/* render Button */}
          {renderButton()}
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
