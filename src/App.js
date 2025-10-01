import { useEffect, useState } from 'react';
import ProgressBar from './components/ProgressBar';
import './Styles.css';

function App() {
  const [value, setValue] = useState(0)

useEffect(()=>{
    setInterval(()=>{ 
        setValue((val) => val + 1)
    }, 100)
}, [])
  return (
    <div className="App">
     <span>Progress Bar</span>
     <ProgressBar value={value}/>
    </div>
  );
}

export default App;
