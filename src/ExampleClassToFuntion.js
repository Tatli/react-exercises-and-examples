import { useState } from 'react';

export default function ExampleClassToFunctionClass({ user }) {
  const [detailsShown, setDetailsShown] = useState(false);

  if (user === undefined) return 'User not found!';

  return (
    <>
      <img src={user.image} alt={user.imageAlt} />
      <h1>{user.name}</h1>
      <button onClick={() => setDetailsShown(!detailsShown)}>
        {detailsShown ? 'Hide' : 'Show'} Details
      </button>
      {detailsShown && <p>{user.details}</p>}
    </>
  );
}

/* Make it work by only adding something to the glean conversion

// export default ExampleClassToFunctionClass;

// const ExampleClassToFunctionClass = (props) => {
//   const [detailsShown, setDetailsShown] = useState(false);
//   const state = useRef({
//     detailsShown: false,
//   });
//   const { user } = props;
//   if (user === undefined) return 'User not found!';
//   return (
//     <>
//       <img src={user.image} alt={user.imageAlt} />
//       <h1>{user.name}</h1>
//       <button
//         onClick={() => {
//           // if we add setDetailsShown(!setDetailsShown) manually it will work
//           setDetailsShown(!setDetailsShown);
//         }}
//       >
//         {detailsShown ? 'Hide' : 'Show'} Details
//       </button>
//       {detailsShown && <p>{user.details}</p>}
//     </>
//   );
// };

// export default ExampleClassToFunctionClass;
*/

// Original Conversion from original class

// const ExampleClassToFunctionClass = (props) => {
//   const [detailsShown, setDetailsShown] = useState(false);
//   const state = useRef({
//     detailsShown: false,
//   });
//   const { user } = props;
//   if (user === undefined) return 'User not found!';
//   return (
//     <>
//       <img src={user.image} alt={user.imageAlt} />
//       <h1>{user.name}</h1>
//       <button onClick={() => {}}>
//         {detailsShown ? 'Hide' : 'Show'} Details
//       </button>
//       {detailsShown && <p>{user.details}</p>}
//     </>
//   );
// };

// export default ExampleClassToFunctionClass;

// Original Class file

// import React from 'react';

// export default class ExampleClassToFunctionClass extends React.Component {
//   state = {
//     detailsShown: false,
//   };

//   render() {
//     const { user } = this.props;

//     if (user === undefined) return 'User not found!';

//     return (
//       <>
//         <img src={user.image} alt={user.imageAlt} />
//         <h1>{user.name}</h1>
//         <button
//           onClick={() =>
//             this.setState({ detailsShown: !this.state.detailShown })
//           }
//         >
//           {this.state.detailsShown ? 'Hide' : 'Show'} Details
//         </button>
//         {this.state.detailsShown && <p>{user.details}</p>}
//       </>
//     );
//   }
// }
