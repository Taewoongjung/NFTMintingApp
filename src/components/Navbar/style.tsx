import styled from "@emotion/styled";

export const Whole = styled.div` // 이거 나중에 글로벌로 빼기
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
`;

export const NavItems = styled.nav`
  background: linear-gradient(90deg, rgb(110, 94, 254) 0%, rgb(73,63,252,1) 100%);
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

export const