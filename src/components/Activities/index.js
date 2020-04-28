import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  PaidValue,
  EarnedValue,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../../assets/avatar.png';
import avatar2 from '../../../assets/avatar2.png';

//TODO: Buscar atividades da API

export default function Activities(){
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar2} />
                    <Description>
                        <Bold>@Amigo01</Bold> pagou a <Bold>Voce</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Amigo01</UserName>
                </CardBody>

               <CardFooter>
                    <Details>
                        <EarnedValue>R$ 50,00</EarnedValue>

                        <Divider />

                        <Feather name="lock" color="#9999a1" size={14} />
                        <Date>há 2 Dias</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#9999a1" />
                            <OptionLabel>1</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#9999a1" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} width='20px' />
                    <Description>
                        <Bold>Voce</Bold> fez uma <Bold>recarga de celular</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Isaque Igor</UserName>
                </CardBody>

               <CardFooter>
                    <Details>
                        <PaidValue>R$ 25,00</PaidValue>

                        <Divider />

                        <Feather name="unlock" color="#9999a1" size={14} />
                        <Date>há 5 Dias</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#9999a1" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#9999a1" />
                            <OptionLabel>2</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
      </Container>
    )
}