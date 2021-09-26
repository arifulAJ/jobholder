
import './App.css';
import Emplaye from './component/Emplaye/Emplaye';
import Header from './component/Header/Header';
import Navbar from './component/navbar/Navbar';


function App() {
  return (
    <div className="body">
       <Navbar></Navbar>
      <Header></Header>
     
     <Emplaye></Emplaye>
     
    </div>
  );
}

export default App;
