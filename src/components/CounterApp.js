import React, { useState } from 'react';
function CounterApp() {
  const [count, setCount] = useState(0);
  const [isHoveringIncrement, setIsHoveringIncrement] = useState(false);
  const [isHoveringDecrement, setIsHoveringDecrement] = useState(false);
  const [isHoveringReset, setIsHoveringReset] = useState(false);
  //const [isActive, setIsActive] = useState(false);

  const resetCount = () => {
    setCount(0); // Directly set the count back to 0 using setCount
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
        <h1>Click Counter</h1>
      {count > 10 && <p style={styles.warning}>Count is over 10!</p>}
      <p style={styles.count}>{count}</p>
      <button
        style={{
          ...styles.button,
          ...(isHoveringDecrement && styles.buttonHover),
        }}
        onClick={increment}
        onMouseEnter={() => setIsHoveringDecrement(true)}
        onMouseLeave={() => setIsHoveringDecrement(false)}
      >
        Increment
      </button>
      <button
        style={{
          ...styles.button,
          ...(isHoveringReset && styles.buttonHover),
        }}
        onClick={resetCount}
        onMouseEnter={() => setIsHoveringReset(true)}
        onMouseLeave={() => setIsHoveringReset(false)}
      >
        Reset
      </button>
      <button
        style={{
          ...styles.button,
          ...(isHoveringIncrement && styles.buttonHover),
        }}
        onClick={decrement}
        onMouseEnter={() => setIsHoveringIncrement(true)}
        onMouseLeave={() => setIsHoveringIncrement(false)}
      >
        Decrement
      </button>
    </div>
  );
}

const styles = {
    container: {
      textAlign: 'center',
      fontFamily: 'Arial',
      backgroundColor: '#000000',
      padding: '10px 20px',
      margin: '100px auto',
      borderRadius: '10px',
      color: 'white',
      width: '500px',
      height: '300px',
      alignItems: 'center', 
      justifyContent: 'center',
    },
    count: {
      fontSize: '3rem',
      margin: '20px 0',
    },
    warning: {
      color: 'red',
      marginBottom: '10px',
    },
    button: {
      padding: '20px 20px',
      margin: '10px 20px',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: '#fff',
      color: 'black',
      borderRadius: '10px',
      transition: 'background-color 0.3s ease', // Corrected property name
      border: 'none',
    },
    buttonHover: {
      backgroundColor: '#333', // A slightly darker shade for hover
      color: 'white',
    },
    buttonActive: {
      backgroundColor: '#555',
      color: 'white',
    },
  };

export default CounterApp;