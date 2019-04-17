import '../styles/index.scss';
import characters from './components/characters/characters';
import './helpers/util';

const init = () => {
  characters.getData();
};
init();
