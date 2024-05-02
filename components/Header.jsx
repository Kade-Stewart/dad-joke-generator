import styled from "styled-components";

const HeaderContainer = styled.header`
  display: grid;
  overflow: hidden;
  background-color: #053d38;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 10px;
  border-bottom: #a3ccab;
  border-style: solid;
  border-width: 2px;
`;

const TitleContainer = styled.div`
  grid-column-start: 2;
  text-align: center;
  color: #f26800;
  font-size: 20px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>Dad Joke Generator</h1>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
