import './App.css';
import Navbar from './Components/Navbar';
import Input from './Components/Input';
// import Btn from './Components/Btn';
import Photo from './Components/Photo';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Input/> 
      {/* <Btn/> */}
      <Photo/>
      <h1 className='Nothing--'>
          
      </h1>
    </div>
  );
}

export default App;
