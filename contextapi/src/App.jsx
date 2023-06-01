import React, { createContext } from 'react';
import Comp1A from './Comp1A';

const FirstName = createContext();
const LastName = createContext();


function App() {
  return (
    <>
      <FirstName.Provider value={'Ankit'}>
        <LastName.Provider value={'Gour'}>
          <Comp1A />
        </LastName.Provider>
      </FirstName.Provider>

    </>
  );
}

export default App;
export { FirstName,LastName };

