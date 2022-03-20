import styled from "@emotion/styled";

export const MainContainer = styled.div`
  //overflow: hidden;
  overflow-y: hidden;
  height: 100%;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
  gap: 10px 2px;
  grid-template-areas:
      "one six eleven"
      "two seven twelvethirteen"
      "three eight twelvethirteen"
      "four nine fourteen";
`;

export const BoxOne = styled.div`
  grid-area: one;
  height: 100%;
  width: 100%;
`;

export const BoxTwo = styled.div`
  grid-area: two;
  height: 100%;
  width: 100%;
`;

export const BoxThree = styled.div`
  grid-area: three;
  height: 100%;
  width: 100%;
`;

export const BoxFour = styled.div`
  grid-area: four;
  height: 100%;
  width: 100%;
`;

export const BoxSix = styled.div`
  display: flex;
  grid-area: six;
  height: 100%;
  width: 100%;
`;

export const BoxSeven = styled.div`
  display: flex;
  grid-area: seven;
  height: 100%;
  width: 100%;
`;

export const BoxEight = styled.div`
  display: flex;
  grid-area: eight;
  height: 100%;
  width: 100%;
`;

export const BoxNine = styled.div`
  display: flex;
  grid-area: nine;
  height: 100%;
  width: 100%;
`;

export const BoxEleven = styled.div`
  display: flex;
  padding-top: 5%;
  justify-content: center;
  grid-area: eleven;
  height: 100%;
  width: 100%;
`;

export const BoxTwelveThirteen = styled.div`
  display: flex;
  //justify-content: center;
  grid-area: twelvethirteen;
  height: 100%;
  width: 100%;
`;

export const GIFholder = styled.div`
  margin: auto;
  width: 45vh;
  height: 40vh;
  border: 3px black solid;
  border-radius: 5px;
  margin-top: 1rem;
  &>img {
    width: 45vh;
    height: 40vh;
  }
`;

export const BoxFourteen = styled.div`
  grid-area: fourteen;
  height: 100%;
  width: 100%;
`;

export const Banner = styled.div`
  display: flex;
  padding-top: 10px;
  height: 250px;
  width: 100%;
  &>img {
    height: 100%;
    width: 100%;
  }
`;