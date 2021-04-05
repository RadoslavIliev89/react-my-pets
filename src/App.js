import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import CreatePet from './components/CreatePet/CreatePet';
import EditPetDetails from './components/EditPetDetails/EditPetDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { useEffect, useState } from 'react';
import { auth } from './utils/firebase'

import './utils/firebase';
import './App.css';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);



  return (
    <div className="container">
      <Header userEmail={user?.email} isAuthenticated={Boolean(user)} />

      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/pets/details/:petId" exact component={PetDetails} />
        <Route path="/pets/details/:petId/edit" component={EditPetDetails} />
        <Route path="/pets/create" component={CreatePet} />
        <Route path="/login" component={Login} />
        <Route path="/logout" render={({ history }) => {
          auth.signOut()
            .then(() => {
              history.push('/')
            });
        }} />
        <Route path="/register" component={Register} />
      </Switch>

      <Footer />

    </div>
  );
}

export default App;
