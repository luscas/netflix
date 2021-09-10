import styled from "styled-components";

export const Profile = styled.div`
  max-width: 10vw;
  flex-direction: column;
  display: flex;
`;
export const Avatar = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  width: 10vw;
  height: 10vw;
  border-radius: 6px;
  border: 2px solid;
  ${Profile}:hover & {
    border-color: #fff;
  }
`;
export const Name = styled.div`
  font-size: 1.3vw;
  color: grey;
  text-align: center;
  padding: 1rem 0;

  ${Profile}:hover & {
    color: #fff;
  }
`;
export const Locked = styled.div`
  text-align: center;
  pointer-events: none;
`;
