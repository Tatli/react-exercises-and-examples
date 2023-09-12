import { useState } from 'react';

function LightBulb(props) {
  return <div>light bulb is {props.isOn ? 'on 🌞' : 'off 🌚'}</div>;
}

function Switch(props) {
  return (
    <button
      onClick={() => {
        props.setIsOn(!props.isOn);
      }}
    >
      toggle
    </button>
  );
}
export default function ExampleLiftingStateUp() {
  // 1. useState in the parent component
  const [isOn, setIsOn] = useState(true);

  return (
    <div>
      {/* 2. use state as props in the children components */}
      <LightBulb isOn={isOn} />
      <Switch setIsOn={setIsOn} isOn={isOn} />
    </div>
  );
}
