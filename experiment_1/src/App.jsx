import { useState, useReducer, useMemo } from 'react';
import './App.css';

function reducer(state, action) {

  if (action.type === "Add") {
    return [
      ...state,
      {
        id: Date.now(),
        title: action.payload,
        completed: false
      }
    ];
  }

  else if (action.type === "Delete") {
    return state.filter((t) => t.id !== action.payload);
  }

  else if (action.type === "Finish") {
    return state.map((t) =>
      t.id === action.payload
        ? { ...t, completed: !t.completed }
        : t
    );
  }

  return state;
}


function App() {

  const student = {
    name: "Sameer",
    email: "SameerHunMai@gmail.com",
    year: "3rd Year",
  };

  const [search, setSearch] = useState("");

  const task = [];

  const [state, dispatch] = useReducer(reducer, task);


  const remaining = useMemo(() => {
    return state.reduce(
      (sum, t) => t.completed === false ? sum + 1 : sum,
      0
    );
  }, [state]);


  const total = useMemo(() => {
    return state.length;
  }, [state]);


  return (
    <>
      <h1><strong>STUDY HUB</strong></h1>

      <h1>
        Welcome, {student.name} ({student.year})
      </h1>

      <div>
        <h2>Name: {student.name}</h2>
        <h2>Email: {student.email}</h2>
        <h2>Year: {student.year}</h2>
      </div>

      <h2>Total Tasks: {total}</h2>
      <h2>Remaining Tasks: {remaining}</h2>

      <input
        type="text"
        placeholder="Task"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
      />

      <button
        onClick={() => {

          if (search.trim().length === 0) {
            return;
          }

          dispatch({
            type: "Add",
            payload: search.trim()
          });

          setSearch("");
        }}
      >
        Add Task
      </button>


      {state.map((t) => (

        <div key={t.id}>

          <span>
            {t.title} - {t.completed ? "Completed" : "Pending"}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: "Finish",
                payload: t.id
              })
            }
          >
            {t.completed ? "Undo" : "Finish"}
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "Delete",
                payload: t.id
              })
            }
          >
            Delete
          </button>

        </div>

      ))}

    </>
  );
}

export default App;