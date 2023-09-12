function Tweet(props) {
  return (
    <>
      <h2>Name : {props.user}</h2>
      <div>I like {props.message}</div>
      <div>Likes: {props.likes}</div>
    </>
  );
}

export default function ExamplePropsDestructuring() {
  return (
    <>
      <div>
        <Tweet user="Tatli" message="I like react" likes={12} />
        <Tweet user="Recep" message="I like trains" likes={600} />
      </div>
      <h3>Not all the types are rendered by React:</h3>
      <h4>String</h4> string
      <h4>Number</h4> {12}
      <h4>Boolean</h4> {true}
      {/* Boolean true will not render */}
      <h4>Null, Undefined, NaN</h4>
      {null}
      {undefined}
      {NaN}
      <h4>Array</h4>
      {[1, 2, 3, 4, 5]}
      <h4>Object rendered due to JSON.stringify</h4>
      {JSON.stringify({ name: 'Osman' })}
    </>
  );
}
