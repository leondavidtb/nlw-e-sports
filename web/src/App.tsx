interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

function App() {
  return (
    <>
      <Button title="aaa" />
      <Button title="bbb" />
      <Button title="ccc" />
      <Button title="ddd" />
    </>
  );
}

export default App;
