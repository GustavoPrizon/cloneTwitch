import React from 'react';
import { Text } from 'react-native';

import { 
  List, 
  ChannelContainer, 
  Avatar, 
  Column, 
  UserName, 
  Info, 
  LeftSide, 
  RightSide, 
  WhiteCircle, 
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <UserName>rtocketset_oficial</UserName>
          <Info>30 new videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle/>
      </RightSide>
    </ChannelContainer>
  )
  return (
    <List>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
      <ChannelItem/>
    </List>
  );
};

export default ChannelList;
