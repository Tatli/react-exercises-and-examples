import ExampleArrayMapping from './ExampleArrayMapping';
import ExampleClassToFuntion from './ExampleClassToFuntion';
import ExampleConditionalRenderingBooleanOperator from './ExampleConditionalRenderingBooleanOperator';
import ExampleConditionalRenderingTernaryOperator from './ExampleConditionalRenderingTernaryOperator';
import ExampleFormsWithControlledComponents from './ExampleFormsWithControlledComponents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExamplePropsDestructuring from './ExamplePropsDestructuring';
import ExampleStylingOptions from './ExampleStylingOptions';

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
      <hr />
      <h2>Mapping over arrays</h2>
      <ExampleArrayMapping />
      <hr />
      <h2>Form with Controlled Components</h2>
      <ExampleFormsWithControlledComponents />
      <hr />
      <h2>Lifting State Up</h2>
      <ExampleLiftingStateUp />
      <hr />
      <h2>Class to Functional Component</h2>
      <ExampleClassToFuntion
        user={{
          details: 'details',
          name: 'Tatli',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png?width=400',
        }}
      />
      <hr />
      <h2>Example Styling Options</h2>
      <ExampleStylingOptions />
    </>
  );
}
