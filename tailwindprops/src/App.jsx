import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "edsondsouza",
    age: 21,
  };
  let myArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username="chai aur code" btnText="click me" />
      <Card username="dsouzaedson" btnText="visit me" someObj={myArr} />
    </>
  );
}

export default App;
