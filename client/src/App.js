import ContainerPrincipal from './components/ContainerPrincipal';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header/>
      <BrowserRouter>                    
              <Routes>
                <Route path="/" exact={true} element={<ContainerPrincipal/>} ></Route>
              </Routes>
        </BrowserRouter>       
    </div>
  );
}

export default App;
