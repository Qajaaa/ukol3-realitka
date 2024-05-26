import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/Header';
import { Estate } from '../components/Estate/Estate';


const currentPath = window.location.pathname;
const estateId = currentPath.split('/').pop().split('.')[0];
console.log(estateId)

const response = await fetch(
  `https://apps.kodim.cz/daweb/trening-api/apis/realitka/${estateId}`
);

const data = await response.json();

document.querySelector('#root').innerHTML += render(
  <>
  <Header />
  <br />
  <Estate data = {data}/>
  </>
);
