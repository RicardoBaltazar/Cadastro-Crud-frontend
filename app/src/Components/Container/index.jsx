import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto 0;
  border: 1px solid green;
  @media screen and (max-width: 900px) {
    margin: auto;
    height: 110vh;
    padding: 15px;
  }
`;

export default Container;