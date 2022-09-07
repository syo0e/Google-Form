import { Wrapper } from './style';

type QuestionProps = {
  type: 'short' | 'long';
};

const NarrativeQuestion = ({ type }: QuestionProps) => {
  return (
    <Wrapper type={type}>
      <input />
    </Wrapper>
  );
};
export default NarrativeQuestion;
