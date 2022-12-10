import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route,Routes} from 'react-router'
import Login from './components/Login';
import PageTwo from './components/Page-2';
function App() {
  return (
    <Router>
    
    <Routes >
     <Route path = "/" element = {<Login />} ></Route>
     <Route path = "page-2" element={<PageTwo />} ></Route>
    </Routes>
  </Router>
  );
}

export default App;
