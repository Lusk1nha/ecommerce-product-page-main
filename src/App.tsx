import { Navbar } from './components/Navbar/Navbar';
import GlobalContext from './contexts/GlobalContext';

import './styles/App.scss';

export default function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Navbar />

      </GlobalContext>
    </div>
  );
}
