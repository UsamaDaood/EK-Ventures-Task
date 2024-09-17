import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import Video from 'react-native-video';

/** Redux */
import {useDispatch} from 'react-redux';
import {getVideosAsync} from '../../features/getVideos/thunks/index';
/** Common Colors */
import Colors from '../../libs/Colors';
/** Images SOurces */
import {
  IC_CAmERA_VIDEO,
  IC_COMMENT_VIDEO,
  IC_DOTS_VIDEO,
  IC_HEART_VIDEO,
} from '../../utils/ImageSource';
/** Components */
import {toastShow} from '../../libs/toast';
import CustomInfoView from '../../common/Components/CustomInfoView';
/** Interfaces */
import {VideoProps} from '../../Interfaces/index';
/** Styles */
import {styles} from '../../Styles/VideoShortsStyles';

const {height, width} = Dimensions.get('window');

const VerticalVideoScroll: React.FC<VideoProps> = ({navigation, route}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [hasError, setHasError] = useState<number | null>(null);
  const videos = route?.params?.vidoes;
  const [resultVid, setResultVid] = useState<any>(videos);
  const dispatch = useDispatch<any>();

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
    !videos && getVideos().catch();
  }, [videos]);

  const handleRetry = () => {
    setHasError(null);
  };

  const getVideoUri = (item: any) => {
    return Platform.OS === 'ios' ? item.urls.hls : item.urls.mp4;
  };

  const renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <View style={styles.videoContainer}>
        {hasError === item.id ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>Failed to load video</Text>
            <TouchableOpacity onPress={handleRetry} style={styles.retryButton}>
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <Video
              source={{
                uri: getVideoUri(item),
              }}
              style={styles.video}
              paused={currentIndex !== index}
              resizeMode="cover"
              repeat={true}
              onLoadStart={() => setIsBuffering(true)}
              onBuffer={({isBuffering}) => setIsBuffering(isBuffering)}
              onLoad={() => setIsBuffering(false)}
              onError={() => setHasError(item.id)}
            />
            {isBuffering && (
              <ActivityIndicator
                style={styles.bufferingIndicator}
                size="large"
                color={Colors.whiteColor}
              />
            )}
            <View style={styles.mediaView}>
              <Text style={styles.mediaText}>Media</Text>
              <Image
                source={IC_CAmERA_VIDEO}
                style={{width: 25, height: 25}}
                resizeMode={'contain'}
              />
            </View>
            {/* Bottom Options */}
            <View style={styles.bottomOptions}>
              <CustomInfoView
                title="281 k"
                Icon={IC_HEART_VIDEO}
                callBack={() => {}}
              />
              <CustomInfoView
                title="281 k"
                Icon={IC_COMMENT_VIDEO}
                callBack={() => {}}
              />
              <CustomInfoView Icon={IC_DOTS_VIDEO} callBack={() => {}} />
            </View>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={resultVid}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.y / height);
          setCurrentIndex(index);
        }}
      />
    </View>
  );
};

export default VerticalVideoScroll;
