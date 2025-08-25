import TextArea from "./TextArea";
import TextInput from "./TextInput";

function TaskDetail({ close }) {
  return (
    <div className="taskdetail">
      <div className="taskname">
        <div>
          <div className="thead">
            <h2>Task Deatils</h2>
            <button onClick={close}>
              <img src="src/assets/image/close_ring_duotone-1.svg" />
            </button>
          </div>

          <div className="text">
            <TextInput name={"Task Name"} />

            <TextArea name={"description"} />

            <div className="Ticon">
              <h5>Icon</h5>
              <div className="ticon">
                <img src="src/assets/image/Logo.svg" alt="" />
                <img src="src/assets/image/Logo.svg" alt="" />
                <img src="src/assets/image/Logo.svg" alt="" />
                <img src="src/assets/image/Logo.svg" alt="" />
                <img src="src/assets/image/Logo.svg" alt="" />
                <img src="src/assets/image/Logo.svg" alt="" />
              </div>
            </div>

            <div className="Tstatus">
              <h5>status</h5>
              <div className="status3">
                <div className="status2">
                  <div className="status1">
                    <img src="src/assets/image/Logo.svg" alt="" />
                    <p>In Progress</p>
                  </div>
                  <div className="status1">
                    <img src="src/assets/image/Logo.svg" alt="" />
                    <p>Completed</p>
                  </div>
                </div>

                <div className="status1">
                  <img src="src/assets/image/Logo.svg" alt="" />
                  <p>Won't do</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Tbuton">
          <button className="Tbutton">
            delete <img src="src/assets/image/Trash.svg" alt="" />
          </button>
          <button className="tbutton">
            save <img src="src/assets/image/Done_round.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
