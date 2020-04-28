import React from 'react';

import { Container, Option, Img, Label } from './styles';

import icons from './images-helper';


export default function Suggestions(){
    return(
        <Container>
            {icons.map((icon) => (
                <Option key={icon.key}>
                    <Img source={icon.img} />
                    <Label>{icon.label}</Label>
                </Option>
            ))}
        </Container>
    );
}