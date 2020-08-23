import React, { Fragment, useState } from 'react';
import './App.css';
import Counter from "./components/Counter";

function App() {

  let [time, setTime] = useState(true);

  return (
    <div className={`App ${time ? 'day' : 'night'}`}>
      <Counter />
      {
        time ? (
          <Fragment>
            <h3><i>It's Day</i></h3>
            <button onClick={() => setTime(!time)} className="night-btn">Go to Night</button>
          </Fragment>
        ) : (
            <Fragment>
              <h3><i>It's Night</i></h3>
              <button onClick={() => setTime(!time)} className="day-btn">Go to Day</button>
            </Fragment>
          )
      }
    </div >
  );
}

export default App;
