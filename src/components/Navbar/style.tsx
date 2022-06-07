import styled from "@emotion/styled";

export const Whole = styled.div` // 이거 나중에 글로벌로 빼기
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
`;

export const NavItems = styled.nav`
  //background: linear-gradient(90deg, rgb(110, 94, 254) 0%, rgb(73,63,252,1) 100%);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const NavbarLogo = styled.h1`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
`;

export const FaReact = styled.i`
  margin-left: 0.5rem;
  font-size: 1.6rem;
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
`;

export const Bar = styled.i`
  color: white;
`;

export const MenuIcon = styled.div`
  display: none;
`;