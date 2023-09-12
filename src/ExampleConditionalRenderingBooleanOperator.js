import React, { useState } from 'react';

export default function ExampleConditionalRenderingBooleanOperator() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  return (
    <div>
      {isButtonVisible && <div>Click Me</div>}
      <button onClick={() => setIsButtonVisible(!isButtonVisible)}>
        Toggle
      </button>
    </div>
  );
}
