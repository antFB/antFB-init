/* tslint:disable:no-console */
import { View, AppRegistry ,Text} from 'react-native';
import { DatePicker, List } from 'antFB-mobile';
import React from 'react';
import { createForm } from 'rc-form';
import ToastAndroid from './src/ToastAndroid';


let MobileDemo = React.createClass({
  render() {
    ToastAndroid.show('调用了原生接口！！', ToastAndroid.SHORT);
    return (<View style={{ marginTop: 20 }}>
      <Text style={{textAlign:'center',marginBottom:20,fontWeight:'bold',fontSize:25}}>AntFB-mobile Start Kit.</Text>
      <List>
        <List.Body>
          
          <DatePicker
            mode="datetime"
            {...this.props.form.getFieldProps('datetime')}
          >
            <List.Item
              arrow="horizontal"
              last
            >
              选择时间
            </List.Item>
          </DatePicker>
        </List.Body>
      </List>
    </View>);
  }
});

MobileDemo = createForm()(MobileDemo);

AppRegistry.registerComponent('MobileDemo', () => MobileDemo);
