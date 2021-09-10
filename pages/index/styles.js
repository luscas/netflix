import styled from "styled-components";

export const Layout = styled.div`
  background-color: #141414;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
  display: flex;
`;
export const Header = styled.div`
  background: linear-gradient(0deg, transparent, #010101);
  width: 100vw;
  padding: 1.275rem 3.275rem 0 3.275rem;
`;
export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;
export const WhosWatch = styled.div`
  font-size: 3.5vw;
  color: #fff;
`;
export const Avatars = styled.div`
  gap: 2em;
  display: flex;
  margin-top: 2.5em;
`;
export const ButtonManageProfile = styled.button`
  background: none;
  font-size: 1.2vw;
  color: grey;
  border: 1px solid grey;
  padding: 0.5em 1.5em;
  cursor: pointer;
  letter-spacing: 2px;
  margin-top: 3rem;
  &:hover {
    border-color: #fff;
    color: #fff;
  }
`;
