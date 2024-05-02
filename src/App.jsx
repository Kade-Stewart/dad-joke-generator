import { useState } from "react";
import styled from "styled-components";

const PageContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(8, 1fr);
  height: 100vh;
`;

const Container = styled.div`
  background-color: #a3ccab;
  border-radius: 20px;
  height: 100%;
  padding: 15px;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 5;
`;

const Button = styled.button`
  background-color: #053d38;
  border-radius: 20px;
  color: #f26800;
  height: 100%;
  font-size: 50px;
  width: 100%;
  &:hover {
    background-color: #34675c;
  }
`;

const JokeContainer = styled.div`
  background-color: #053d38;
  color: white;
  border-radius: 20px;
  height: 100%;
  padding: 15px;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 6;
  grid-row-end: 7;
  font-size: 20px;
  /* display: none; */
`;

const App = () => {
  const [dadJoke, setDadJoke] = useState("");

  async function getDadJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setDadJoke(data.joke);
  }

  return (
    <>
      <PageContentContainer>
        <Container>
          <Button onClick={getDadJoke}>Press For Dad Joke</Button>
        </Container>
        <JokeContainer>
          <p>{dadJoke}</p>
        </JokeContainer>
      </PageContentContainer>
    </>
  );
};

export default App;
