
import './App.css';
import React from 'react';
import Layout from './components/layout';
import Location from './components/location';
import Home from './components/home';
import CreateAccount from './components/createAccount';
import MyNavbar from './components/nav';
import PlantSpecs from './components/plantSpecs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from './components/context';



function App () {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
<Router>
<UserContext.Provider  value={{ users: [{ name: 'Nicky', email: 'nicky@mit.edu', password: 'secret'}] }}>   
<MyNavbar />

          <div className="container" style={{padding: "20px"}}>
            <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/layout/" element={<Layout />} />
          <Route exact path="/location/" element={<Location />} />
          <Route exact path="/plantSpecs/" element={<PlantSpecs />} />
          <Route exact path="/createAccount/" element={<CreateAccount />} />
          </Routes>
          </div>
          </UserContext.Provider>
       </Router>
  );
  }

export default App;
