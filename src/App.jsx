

function App() {


  return (
    <>
      <section className="min-h-screen bg-amber-100 flex justify-center items-center">
        <div className="">
          <h1 className="text-3xl underline text-center pb-5">My tasks</h1>
          <div className="gap-3">
            <input
              type="text"
              className="border-2 border-solid border-black rounded-lg p-3"
            />
            <button className="cursor-pointer border-2 border-solid border-black p-2 rounded-lg">
              Add Task
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
