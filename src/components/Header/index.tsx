import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import colors from '../../styles/colors';

import { Container, Avatar, StatusOnline, RightSide, Buttons } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <StatusOnline />
      </Avatar>
      <RightSide>
        <Buttons>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
          />
        </Buttons>
        <Buttons>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Buttons>
        <Buttons>
          <Feather
            name="search"
            size={26}
            color={colors.black}
          />
        </Buttons>
      </RightSide>
    </Container>
  );
};

export default Header;
