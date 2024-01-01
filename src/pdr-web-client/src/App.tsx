import { Outlet } from 'react-router-dom';
import Header from "./components/Header";
import './custom.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
