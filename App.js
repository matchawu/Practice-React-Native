/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  // add
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    // add
    let pic = {
      uri: 'http://golancourses.net/2012spring/wp-content/uploads/2012/02/sunflower.gif'
    };
    return (
      <View style={styles.container}>
        
        <Image source={pic} style={{width: 250, height: 254}} />
        <Text style={styles.welcome}>
          Welcome to ObaSun!
        </Text>
        <Blink style={styles.blink} text='O B A S U N' />
        {/* <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text> */}
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
        {/* <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} /> */}
        

        {/* <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
        </View> */}

        {/* scroll view */}
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Image source={require('./img/bear.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>

        {/* flatlist */}
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

        {/* SectionList concept:group */}
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
      
    );
  }
}
// add
// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('AwesomeProject', () => FixedDimensionsBasics);
//add
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };
    // text input added
    // this.state = {text: ''};
    // doesn't work

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}
//add end

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    // flexDirection: 'row',
    //默認值是豎直軸( column)方向
    justifyContent: 'center',
    //flex-start、center、flex-end、space-around以及space-between
    //default: center!
    alignItems: 'center',
    //alignItems可以決定其子元素沿著次軸的排列方式
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigblue: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'orange',
  },
  // add
  // blink: {
  //   fontSize: 50,
  // }
  // doesn't work!!!

  // flatlist added
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  //sectionlist added
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
