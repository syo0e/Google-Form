import { useState } from 'react';
import { useInput } from '../../hooks';
import Dropdown from '../Dropdown';
import { Wrapper, useStyles } from './style';
import { Switch } from '@material-ui/core';
import { TrashIcon, CopyIcon } from '../../assets';

const QuestionBox = () => {
  const classes = useStyles();
  const question = useInput('');
  const [isNecessary, setIsNeccessary] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNeccessary(e.target.checked);
  };
  return (
    <Wrapper>
      <div className="quesiton">
        <input
          className="question-input"
          type="text"
          placeholder="제목없는 질문"
          value={question.value}
          onChange={question.onChange}
        />
        <Dropdown />
      </div>
      <hr />
      <div className="settings">
        <CopyIcon />
        <TrashIcon />
        <div className="switch-label">필수</div>
        <Switch className={classes.colorSecondary} checked={isNecessary} onChange={handleChange}></Switch>
      </div>
    </Wrapper>
  );
};

export default QuestionBox;
