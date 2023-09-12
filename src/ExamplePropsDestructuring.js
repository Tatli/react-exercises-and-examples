function Tweet() {
  return (
    <>
      <h2>Name : Tatli</h2>
      <div>I like React</div>
      <div>Likes: 12</div>
    </>
  );
}

export default function ExamplePropsDestructuring() {
  return (
    <div>
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}
