import { useState } from 'react';

export default function ExampleFormsWithControlledComponents() {
  const [userNameInput, setUserNameInput] = useState('');
  // 1. create a state variable
  const [label, setLabel] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>Username:{label}</div>
      {/* 2. connect the state with the input field */}
      <input
        value={userNameInput}
        // 3. update the value of the input field and the state by onChange event with currentTarget.value and the setUserNameInput
        onChange={(event) => setUserNameInput(event.currentTarget.value)}
      />
      {userNameInput}
      {/* 4. Sets label to input fields value (apparently not related to Controlled Components) */}
      <button onClick={() => setLabel(userNameInput)}>update label</button>
    </form>
  );
}
