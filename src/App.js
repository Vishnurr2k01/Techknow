
import Main from "./components/incognito/Main";
import { BrowserRouter as Router ,Route ,Routes} from "react-router-dom";
import Login from '../src/components/incognito/Login'
import Signup from '../src/components/incognito/Signup'
import Error from "../src/components/incognito/Error";
import Not_found from "./components/incognito/Not_found";
function App() {

  
  return (
<Router>

<Routes>
  <Route path="/" element={<Main />} exact>
</Route>

<Route path="/login" element={<Login/>} exact>
</Route>


<Route path="/signup" element={<Signup />} exact>
</Route>

<Route path="/err" component={<Error/>} exact >
  </Route>
  <Route path="/notfound" element={<Not_found />} exact>
</Route>



  </Routes>
</Router>


  );
}

export default App;
