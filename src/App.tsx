
import { computed, effect, signal, untracked } from '@preact/signals-react';
import './App.css'

const firstName = signal("Jane");
const lastName = signal("Doe");
const fullName = computed(() => firstName.value + " " + lastName.value);

function foo() {
  return firstName.value = "Joe"
}

effect(() => {
  console.log(fullName.value);
  firstName.value = untracked(foo)
});

function App() {
  return (
    <button onClick={foo}>
      {fullName}
    </button>
  )
}

export default App
