import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import TopNavigationBar from './components/topnavigationbar';
import BottomFooter from './components/bottomfooter.js';
import Login from './components/login';
import Register from './components/register';
import Mainpage from "./components/mainpage";


function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="container mx-auto">
          <Router>
            <AppContent />
          </Router>
        </div>
      </div>
    </div>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isLogIn = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      {!isLogIn && <TopNavigationBar />}
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/mainpage" component={Mainpage}/>
        </Switch>
      {!isLogIn && <BottomFooter />}
    </>
  );

}
export default App;
