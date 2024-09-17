import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Screens Importing
import SplashScreen from '../screens/Splash/index';
import HomeScreen from '../screens/HomeTabs/Home';
import BottomTabItem from '../common/Components/BottomTabItem';
import Color from '../libs/Colors';
import VerticalVideoScroll from '..//screens/HomeTabs/Videos';
import {
  IC_TAB_AVATAR,
  IC_TAB_GAMES,
  IC_TAB_GAMES_WHITE,
  IC_TAB_HOME,
  IC_TAB_HOME_FOCUSED,
  IC_TAB_MEDIA,
  IC_TAB_MEDIA_FOCUSED,
  IC_TAB_REPORTS,
  IC_TAB_REPORTS_WHITE,
} from '../utils/ImageSource';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
      }}>
      <Stack.Screen name="HomeTab" component={HomeScreen} />
    </Stack.Navigator>
  );
}

let isVideo: boolean = false;
// // Home Tabs New
function HomeTabs() {
  return (
    <BottomTab.Navigator
      screenListeners={({navigation, route}) => ({
        tabPress: e => {
          // Prevent default action
          e.preventDefault();
          console.log('SCREEN: ', route.name);
          isVideo = route.name === 'Videos';
          navigation.navigate(route.name, {
            screen: route.name,
            params: null,
          });
        },
      })}
      sceneContainerStyle={{backgroundColor: Color.whiteColor}}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor:
            route.name === 'Videos' ? Color.black : Color.whiteColor,
        },
      })}>
      {/* All Items */}
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          unmountOnBlur: true,
          tabBarLabel: () => {
            return null;
          },
          tabBarActiveTintColor: Color.black,
          tabBarInactiveTintColor: Color.darkGray,
          // title: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? (
              <BottomTabItem
                imageSource={IC_TAB_HOME_FOCUSED}
                focus={focused}
                title={'Home'}
                isVideo={isVideo}
              />
            ) : (
              <BottomTabItem
                imageSource={IC_TAB_HOME}
                focus={focused}
                isVideo={isVideo}
                title={'Home'}
              />
            ),
        }}
      />

      {/* Videos Tab */}
      <BottomTab.Screen
        name="Videos"
        component={VerticalVideoScroll}
        options={{
          unmountOnBlur: true,
          tabBarLabel: () => {
            return null;
          },
          tabBarActiveTintColor: Color.black,
          tabBarInactiveTintColor: Color.darkGray,
          tabBarIcon: ({focused}) => {
            return focused ? (
              <BottomTabItem
                imageSource={IC_TAB_MEDIA_FOCUSED}
                focus={focused}
                isVideo={isVideo}
                title={'Design'}
              />
            ) : (
              <BottomTabItem
                imageSource={IC_TAB_MEDIA}
                focus={focused}
                isVideo={isVideo}
                title={'Design'}
              />
            );
          },
        }}
      />

      <BottomTab.Screen
        name="Games"
        component={VerticalVideoScroll}
        options={{
          unmountOnBlur: true,
          tabBarLabel: () => {
            return null;
          },
          tabBarActiveTintColor: Color.black,
          tabBarInactiveTintColor: Color.darkGray,
          tabBarIcon: ({focused}) =>
            focused ? (
              <BottomTabItem
                imageSource={IC_TAB_GAMES}
                focus={focused}
                title={'Games'}
                isVideo={isVideo}
              />
            ) : (
              <BottomTabItem
                imageSource={isVideo ? IC_TAB_GAMES_WHITE : IC_TAB_GAMES}
                focus={focused}
                title={'Games'}
                isVideo={isVideo}
              />
            ),
        }}
      />

      {/* Setting Tab Render */}
      <BottomTab.Screen
        name="Reports"
        component={VerticalVideoScroll}
        options={{
          unmountOnBlur: true,
          tabBarLabel: () => {
            return null;
          },
          tabBarActiveTintColor: Color.black,
          tabBarInactiveTintColor: Color.darkGray,
          tabBarIcon: ({focused}) =>
            focused ? (
              <BottomTabItem
                imageSource={IC_TAB_REPORTS}
                focus={focused}
                title={'Reports'}
                isVideo={isVideo}
              />
            ) : (
              <BottomTabItem
                imageSource={isVideo ? IC_TAB_REPORTS_WHITE : IC_TAB_REPORTS}
                focus={focused}
                isVideo={isVideo}
                title={'Reports'}
              />
            ),
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={VerticalVideoScroll}
        options={{
          unmountOnBlur: true,
          tabBarLabel: () => {
            return null;
          },
          tabBarActiveTintColor: Color.black,
          tabBarInactiveTintColor: Color.darkGray,
          tabBarIcon: ({focused}) =>
            focused ? (
              <BottomTabItem
                imageSource={IC_TAB_AVATAR}
                focus={focused}
                title={'Account'}
                isVideo={isVideo}
              />
            ) : (
              <BottomTabItem
                imageSource={IC_TAB_AVATAR}
                focus={focused}
                title={'Account'}
                isVideo={isVideo}
              />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default () => <AppNavigator />;
