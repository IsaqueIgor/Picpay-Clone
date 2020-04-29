import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
    background: #fff,
    flex: 1;
`;
export const Container = styled.ScrollView``;

export const Header = styled.View`
    height: 50px;
    background: #e4e8ed,
    padding: 0 16px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SearchContainer = styled.View``;

export const SearchInput = styled.TextInput`
  border: solid 1px #dbdbdb;
  width: 280px;
  padding: 7px 33px 0px 10px;
  border-radius: 25px;
  color: #fff;
  font-size: 14px;
  text-align: center;
  background: #fafafa;
`