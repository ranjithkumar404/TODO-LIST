import React, { useState, useEffect } from "react";
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

function App() {
  const [val, setVal] = useState('')
  const [list, setList] = useState([])

  const fun = (e) => {
    e.preventDefault();
    if (val.trim() == "") {
      alert("Add something")
    }
    else {

      setList([...list, val]);
      setVal("");
    }
  }
  const dlt = (x) => {
 setList((a) => {
 let y = a.filter((r) => x !== r)
 return y;
    })

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
                <div className="justify-between flex items-center bg-slate-500/20 rounded-md mx-auto mt-2 w-[300px] p-2" key={a}>
                  <p>{i}</p>
                  <div className="flex space-x-3">
                    <FiEdit className="cursor-pointer" size={20} />
                    <AiFillDelete onClick={() => dlt(i)} className="cursor-pointer" size={20} />
                  </div>
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
