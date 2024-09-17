import {ImageSourcePropType} from 'react-native';

export interface SplashProps {
  navigation: any;
}

export interface MainScreenProps {
  navigation: any;
}

export interface VideoProps {
  navigation: any;
  route: any;
}

export interface CustomInfoViewProps {
  Icon?: ImageSourcePropType;
  title?: string;
  callBack: () => void;
}

export interface TabItemProps {
  imageSource: any;
  focus: boolean;
  isVideo: boolean;
  title: string;
}
