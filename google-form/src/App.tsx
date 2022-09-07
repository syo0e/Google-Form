import styled from 'styled-components';
import { QuestionBox, TitleBox, SideMenu } from './components';

const App = () => {
  return (
    <Wrapper>
      <TitleBox />
      <QuestionBox />
      <SideMenu />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  margin-top: 100px;
  position: relative;
`;
