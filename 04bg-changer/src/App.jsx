import { useState } from "react"

function App() {

  const [color, setColor] = useState("grey");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" bar flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 bg-red-600 rounded-full py-2 shadow-lg "
            >
              RED
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 bg-green-600 rounded-full py-2 shadow-lg "
            >
              GREEN
            </button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 bg-yellow-600 rounded-full py-2 shadow-lg "
            >
              YELLOW
            </button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 bg-blue-600 rounded-full py-2 shadow-lg "
            >
              BLUE
            </button>

            <button
              onClick={() => setColor("lavender")}
              className="outline-none px-4 rounded-full py-2 shadow-lg "
              style={{ backgroundColor: "lavender" }}
            >
              LAVENDER
            </button>

            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 rounded-full py-2 shadow-lg "
              style={{ backgroundColor: "olive" }}
            >
              OLIVE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
