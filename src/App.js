
import './App.css';
import { Card } from './Components/Card/Card';

import bg from "./assets/bg-cafe.jpg";
function App() {
  return (
    <div className='page'>
    <div className="container">
   <img src={bg} className="background" alt=""/>
   <div className='card-container'>
        <h2 className='header'>Our Collection</h2>
        <h3 className='description'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</h3>
       <div className='span-container'> <span className='all'>All Products</span> <span className='avail'>Available Now</span></div>
       <div className='coffee-cards'>
        <Card/>
       </div>
    </div>
   </div>
    </div>
  );
}

export default App;
