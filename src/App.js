import './App.css';
import Navbar from './Components/Navbar';
import Utils from './Components/Utils';

function App() {
  const logo = "TextUtils";
  return (
    <>
    <Navbar logo={logo} />
    {/* <Navbar /> */}
    <Utils />
    </>
  );
}

export default App;
