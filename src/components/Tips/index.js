import React from 'react';

import { Container, Option, Title, Img } from './styles';

import Images from './images-helper';

export default function Tips() {
    return (
      <Container>
        {Images.map((image) => (
          <Option key={image.key} bgColor={image.bgColor}>
            <Title>{image.title}</Title>
  
            <Img source={image.img} />
          </Option>
        ))}
      </Container>
    );
  }