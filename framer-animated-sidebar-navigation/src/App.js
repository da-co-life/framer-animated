import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./sidebar";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Documents from "./Pages/Documents";
import Calender from "./Pages/Calender";
import styled from "styled-components";
import Projects from './Pages/Projects';
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display:felx;
  justify-content:center;
  align-items: center;

  h1{
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  return (
    <>
      <Sidebar />
      <BrowserRouter>

        <Pages>
          <AnimatePresence>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/team" component={Team} />
              <Route path="/calender" component={Calender} />
              <Route path="/documents" component={Documents} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </AnimatePresence>
        </Pages>

      </BrowserRouter>

    </>
  );
}

export default App;
