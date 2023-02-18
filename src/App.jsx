import './App.module.css';
import { CadastroPessoal } from './components/cadastroPessoal/CadastroPessoal.jsx';
import './global.css'; // css GLOBAL
import './script.js'; /// js GLOBAL

/*PRIME-REACT*/
//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//core
import 'primereact/resources/primereact.min.css';
//icons
import 'primeicons/primeicons.css';

function App() {
  return <CadastroPessoal />;
}

export default App;
