import React, { useState, useEffect } from "react";

function App() {
  const [val, setVal] = useState('')
  const [list, setList] = useState([])

  const fun = (e) => {
    e.preventDefault();
  
   
      setList( [...list, val]);

    
    setVal("");
  }

  return (
    <div className="App flex justify-center  h-screen  items-center ">
      <div className="shadow-md p-3 rounded-md gird  place-items-center  w-[700px] ">
        <h1 className="text-2xl text-center">TODO-LIST</h1>
        <div className="">
          <form onSubmit={(e) => fun(e)} className="flex p-1 space-x-3 justify-center" action="">
            <input value={val} onChange={(e) => { setVal(e.target.value) }}
              className="outline-none rounded  p-1 bg-slate-200/50" type="text" />
            <button className="bg-green-500 px-3 py-1 rounded-md text-white">Submit</button>
          </form>
        </div>
        <div>
          {
            list.map((i, a) => {
              return (
                <div key={a}>
                  <p>{i}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
