import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  // data im getting from ./data file which is my default value and its my list
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        {/* how big is my list */}
        <h3>{people.length} birthday today</h3>
        {/* passing my list in: setting up a prop people which is equal to my to  people state value*/}
        <List people={people} />
        {/* to clear the array */}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
