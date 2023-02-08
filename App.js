import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//KOMPONENTLERIN DAXIL EDILDIYI YER START
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import TrustedByCompanies from './components/TrustedByCompanies';
//KOMPONENTLERIN DAXIL EDILDIYI YER END
function App() {
  return (
    <>

      <div className='wrapper'>
        <Navbar />
        <Introduction/>
        <TrustedByCompanies/>
        </div>

    </>
  );
}

export default App;
