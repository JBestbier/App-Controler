import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Appslist from './Components/applist';
import AppForm from './Components/appForm';


//return app content
function App() {

  return ( 

    <div className = "App">

    <br/>

      <h2>Applications :</h2>

      <br/>

    {/* imported component to display list content */}
      <Appslist />

      <br/>

    {/* imported component to add new project to table */}
      <AppForm />

    </div>

  );

}

//export above contents
export default App;