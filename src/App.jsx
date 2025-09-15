import platform from "./assets/image/Logo.svg";
import pencil from "./assets/image/pencil.svg";
import TaskCard from "./components/TaskCard";
import logo from "./assets/image/Logo.svg";
import TaskDetail from "./components/taskDetail";
import { useState } from "react";

import Add_round_duotone from "../src/assets/image/Add_round_duotone.svg";
import alarm from "../src/assets/image/alarm.webp";
import gym from "../src/assets/image/gym.jpg";
import coffe from "../src/assets/image/coffe.jpg";

//we have 4 status NORMAL, COMPLETED, PROGRESS, WONTDO

function App() {
  const [allTask, setAllTask] = useState([]);

  const [toggle, setToggle] = useState(false);

  const handleclick = () => {
    setToggle(true);
  };

  const closePopUp = () => {
    setToggle(false);
  };

  function handleDelete(id) {
    setAllTask((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  return (
    <div className="board">
      <div className="title">
        <img src={platform} alt="#" />
        <h1>My Task Board</h1>
        <img src={pencil} alt="#" />
      </div>
      <div>
        <p>Tasks to keep organaised</p>
      </div>
      <TaskCard status={"progress"} img={alarm} title={"Task In Progress"} />
      <TaskCard status={"complete"} img={gym} title={"Task Completed"} />
      <TaskCard status={"wontdo"} img={coffe} title={"Task Won't Do"} />
      {allTask.map((task) => {
        return (
          <TaskCard
            key={task.id}
            status={task.status}
            img={task.icon}
            title={task.name}
            desc={task.desc}
            handleDelete={handleDelete}
            id={task.id}
          />
        );
      })}
      <div
        className="TT"
        onClick={() => {
          handleclick();
        }}
      >
        <TaskCard
          status={"add"}
          img={Add_round_duotone}
          title={"Add new task"}
        />
      </div>

      {toggle && <TaskDetail close={closePopUp} setAllTask={setAllTask} />}
    </div>
  );
}

export default App;
