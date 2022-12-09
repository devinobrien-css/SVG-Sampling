import { useState } from 'react';
import { TriuneBrain } from './triune';

function App() {
  const [brainState,setBrainState] = useState("neo")

  return (
    <div className='w-3/5 mx-auto shadow-xl rounded-xl my-24 p-4'>
        <p>Click on a Section of the brain to learn more</p>
      <div className='flex'>
        <div className='w-1/2'>
          <TriuneBrain setState={setBrainState}/>
        </div>
        <div className='w-1/2'>
          {brainState}
        </div>
      </div>
    </div>
  );
}
export default App;
