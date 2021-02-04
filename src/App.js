import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css';
import './assets/css/profile.css';
import './assets/css/singleproduct.css';
import './assets/css/products.css';
import './assets/css/cart.css';
import './assets/css/orders.css';

import MainRouting from './routes/routeMain';

function App() {
  return (
    <div className="App">
       <MainRouting/>
    </div>
  );
}

export default App;
