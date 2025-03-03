import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import SessionTimeout from './components/SessionTimeout';

function App() {
  return (
    <div className='container'>
      <SessionTimeout />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;