import platform from "./assets/image/Logo.svg";
import pencil from "./assets/image/pencil.svg";
import TaskCard from "./components/TaskCard";
import logo from "./assets/image/Logo.svg";
import TaskDetail from "./components/taskDetail";
import { useState } from "react";

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

  console.log(allTask);

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

      <TaskCard status={"progress"} img={logo} title={"Task In Progress"} />
      <TaskCard status={"complete"} img={logo} title={"Task Completed"} />
      <TaskCard status={"wontdo"} img={logo} title={"Task Won't Do"} />

      {allTask.map((task) => {
        return (
          <TaskCard
            status={task.status}
            img={task.icon}
            title={task.name}
            desc={task.desc}
          />
        );
      })}

      <div
        onClick={() => {
          handleclick();
        }}
      >
        <TaskCard status={"add"} img={logo} title={"Add new task"} />
      </div>
    </div>
  );
}

export default App;
