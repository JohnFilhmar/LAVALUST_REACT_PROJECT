import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import TopNavigationBar from './components/topnavigationbar';
import BottomFooter from './components/bottomfooter.js';
import Login from './components/login';
import Register from './components/register';
import Mainpage from "./components/mainpage";


function App() {

  return (
          <Router>
            <AppContent />
          </Router>
  );
}

const AppContent = () => {
  const location = useLocation();
  const isLogIn = location.pathname === '/' || location.pathname === '/register';

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          {!isLogIn && <TopNavigationBar />}
          <div className="container mx-auto">
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/mainpage" component={Mainpage}/>
              </Switch>
          </div>
        </div>
        <footer className="border-t-4">
          {!isLogIn && <BottomFooter />}
        </footer>
      </div>
    </>
  );

}
export default App;
