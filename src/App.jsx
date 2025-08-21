import platform from "./assets/image/Logo.svg";
import pencil from "./assets/image/pencil.svg";
import TaskCard from "./components/TaskCard";
import logo from "./assets/image/Logo.svg";
import TaskDetail from "./components/taskDetail";

//we have 4 status NORMAL, COMPLETED, PROGRESS, WONTDO

function App() {
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
      <TaskCard
        status={"normal"}
        img={logo}
        title={"Task To Do"}
        desc={"orem ipsum dolor sit amet consectetur, adipisicing elit"}
      />
      <div>
        <TaskCard status={"add"} img={logo} title={"Add new task"} />
      </div>

      <TaskDetail />
    </div>
  );
}

export default App;
