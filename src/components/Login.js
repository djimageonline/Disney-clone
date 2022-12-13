import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>Content</Content>
    </Container>
  );
};

//This will be outside container of main disney page
// This will also center the content below
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

//This will be the content inside the container of disney page
const Content = styled.div``;

export default Login;
