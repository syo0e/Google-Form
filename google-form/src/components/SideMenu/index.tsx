import { ShowIcon, AddIcon } from '../../assets';
import { Wrapper } from './Style';

const SideMenu = () => {
  return (
    <Wrapper>
      <div className="container">
        <ShowIcon />
        <AddIcon />
      </div>
    </Wrapper>
  );
};

export default SideMenu;
