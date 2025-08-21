function TaskDetail() {
  return (
    <div className="taskdetail">
      <div className="taskname">
        <h2>Task Deatils</h2>
        <div className="Tname">
          <h5>Task Name</h5>
          <input type="text" />
        </div>

        <div className="Tdesc">
          <h5>description</h5>
          <input type="search" />
        </div>

        <div className="Ticon">
          <h5>Icon</h5>
        </div>

        <div className="Tstatus">
          <h5>status</h5>
        </div>

        <div className="Tbuton">
          <button>delete</button>
          <button>save</button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
