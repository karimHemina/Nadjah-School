import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Home from './pages/HomePage/Home';
import SignUp from './pages/SingupPage/SignUp';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path = "/" exact component={Home} />
        <Route path = "/services" exact ><h1>Services Coming Soon</h1></Route>
        <Route path = "/products" exact ><h1>Products Coming Soon</h1></Route>
        <Route path = "/sign-up" exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
