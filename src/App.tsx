import "./App.css";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="border border-gray-300 rounded-sm flex items-center gap-5 px-5 py-6">
        <button className="px-5 py-2 bg-green-500 hover:bg-green-800 hover:text-white font-semibold rounded-sm uppercase">
          increment
        </button>
        <h1 className="text-lg font-semibold">0</h1>
        <button className="px-5 py-2 bg-red-500 hover:bg-red-800 hover:text-white font-semibold rounded-sm uppercase">
          decrement
        </button>
      </div>
    </div>
  );
}

export default App;
