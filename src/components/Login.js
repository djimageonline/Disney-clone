import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <ContentImageblock>
          <ContentImageLogo src="/images/content-image-logo-one.svg" alt=" " />
          <DescriptionOne>Enter your email to create or restart your subscription.</DescriptionOne>
          <Signup>GET ALL THREE</Signup>
          <DescriptionTwo>
            All of these and more now streaming.
            <a href="/">
              {" "}
              <u>Terms Apply</u>
            </a>
          </DescriptionTwo>
          <ContentImageLogoTwo src="/images/content-image-logo-two.png" alt="" />
        </ContentImageblock>
        <BackgroundImage />
      </Content>
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
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

// Added Background Image with all movies.  Made sure to cover the entire page and per viewport hieght
const BackgroundImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

// Added the block container for the image
const ContentImageblock = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
`;

//Added the Image displaying Hulu, Disney plus and ESPN
const ContentImageLogo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

// Implemented the button and styled to fit with hover color change
const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0482ee;
  }
`;

// Implements description above signup button
const DescriptionOne = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 16px;
  line-heigth: 1.5;
  margin: 18px 0 24px;
  letter-spacing: 1px;
`;

// Implements description below signup button
const DescriptionTwo = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 16px;
  margin: 18px 0 24px;
  line-heigth: 1.5;
  letter-spacing: 1px;
`;

//Added the Image displaying Disney, Pixar, MArvel, StartWars, NG
const ContentImageLogoTwo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
