import { useState } from "react";

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="flex justify-center w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >
        <h1 className="font-bold text-white text-3xl mt-6">Bg Changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-2xl bg-white">
            <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{backgroundColor: "red"}} onClick={() => setColor("red")}
            >Red</button>
            <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{backgroundColor: "indigo"}} onClick={() => setColor("indigo")}
            >Indigo</button>
            <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{backgroundColor: "purple"}} onClick={() => setColor("purple")}
            >Purple</button>
            <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{backgroundColor: "violet"}} onClick={() => setColor("violet")}
            >Violet</button>
            <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{backgroundColor: "green"}} onClick={() => setColor("green")}
            >Green</button>
            <button className="outline-none px-4 py-1 shadow-lg rounded-full text-white"
            style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}
            >Blue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
