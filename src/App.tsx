
import { computed, effect,signal, untracked } from '@preact/signals-react';
import './App.css'

const name = signal("Jane");
const surname = signal("Doe");
const fullName = computed(() => name.value + " " + surname.value);
function foo(){
  return name.value = "Joe"
}

effect(() => {
  console.log(fullName.value);
  name.value = untracked(foo)
});

function App() {

  

  return (
    <>
      <button onClick={foo}>
        {fullName}
      </button>
    </>
  )
}

export default App
