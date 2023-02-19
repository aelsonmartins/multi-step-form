// Global
import './global.css'; // css GLOBAL
import './script.js'; /// js GLOBAL

/*PRIME-REACT*/
//theme
import 'primereact/resources/themes/lara-light-indigo/theme.css';
//core
import 'primereact/resources/primereact.min.css';
//icons
import 'primeicons/primeicons.css';

//Components
import { SideBar } from './components/SideBar';
import { CadastroPessoal } from './components/cadastroPessoal/CadastroPessoal.jsx';
import { ButtonNextStep } from './components/ButtonNextStep';

// Styles
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <main>
        <CadastroPessoal />
        <ButtonNextStep />
      </main>
    </div>
  );
}

export default App;
