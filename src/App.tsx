import React from 'react';
import './App.css';
import './assets/_main.css';
import MainLayout from './layouts'
import ManageWorking from './containers/ManageWorking'

function App() {
  return (
    <MainLayout>
      <div className="App">
        <ManageWorking/>
      </div>
    </MainLayout>
  );
}

export default App;
