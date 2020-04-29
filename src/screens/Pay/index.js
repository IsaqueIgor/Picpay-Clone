import React from 'react';
import { MaterialCommunityIcons , AntDesign } from '@expo/vector-icons';

import { 
    Wrapper,
    Container,
    Header, 
    SearchContainer,
    SearchInput
} from './styles';

export default function Pay () {
    return(
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e'/>
                    <SearchContainer>
                        <SearchInput type="text" placeholder="A quem voce quer pagar?" />
                    </SearchContainer>
                </Header>
            </Container>
        </Wrapper>
    );
}