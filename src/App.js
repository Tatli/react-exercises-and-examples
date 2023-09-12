import ExampleConditionalRenderingBooleanOperator from './ExampleConditionalRenderingBooleanOperator';
import ExampleConditionalRenderingTernaryOperator from './ExampleConditionalRenderingTernaryOperator';
import ExamplePropsDestructuring from './ExamplePropsDestructuring';

export default function App() {
  return (
    <>
      <h2>Conditional Rendering with Ternary Operator</h2>
      <ExampleConditionalRenderingTernaryOperator />
      <hr />
      <h2>Conditional Rendering using Boolean (logical AND) Operator</h2>
      <ExampleConditionalRenderingBooleanOperator />
      <hr />
      <h2>Props Destructing</h2>
      <ExamplePropsDestructuring />
    </>
  );
}
