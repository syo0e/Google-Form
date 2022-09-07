import styled from 'styled-components';
import { QuestionBox, TitleBox } from './components';

const App = () => {
  return (
    <Wrapper>
      <TitleBox />
      <QuestionBox />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  margin-top: 100px;
`;
