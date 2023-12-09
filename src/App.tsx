
import { signal } from '@preact/signals-react';
import './App.css'

const count = signal(0);

function App() {

  return (
    <>
      <button onClick={() => count.value++}>
        {count.value}
      </button>
    </>
  )
}

export default App
