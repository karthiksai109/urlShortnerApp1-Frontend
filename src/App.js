import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Geturl from './Geturl/getUrl'
;

function App() {
  return (
    <div>
    <Router>  
<Routes>
    <Route path="/" element={<Geturl/>}/>
  </Routes>
    
    </Router> 
    </div>
  );
}

export default App;