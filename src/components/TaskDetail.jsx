import TextArea from "./TextArea";
import TextInput from "./TextInput";
import ImageButton from "./ImageButon";
import { useState } from "react";
import iconList from "../data/iconsList";

const statuslist = [
  {
    id: 1,
    name: "In Progress",
    status: "progress",
  },
  {
    id: 2,
    name: "Completed",
    status: "complete",
  },
  {
    id: 3,
    name: "Won't do",
    status: "wontdo",
  },
];

function TaskDetail({ close, setAllTask }) {
  const [newTaks, setNewTask] = useState({
    name: "",
    desc: "",
    icon: "",
    status: "",
  });

  function handleChangeTask(value, key) {
    setNewTask((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  function handleSave() {
    if (newTaks.name && newTaks.desc && newTaks.icon && newTaks.status) {
      console.log("filled");
    } else {
      window.alert("sheavse!!");
      return;
    }

    setAllTask((prev) => {
      return [...prev, { id: Date.now(), ...newTaks }];
    });

    setNewTask({
      name: "",
      desc: "",
      icon: "",
      status: "",
    });
  }

  return (
    <div className="taskdetail">
      <div className="taskname">
        <div>
          <div className="thead">
            <h2>Task Deatils</h2>
            <button
              onClick={close}
              style={{
                borderRadius: "8px",
                border: "1px solid #E3E8EF",
                backgroundColor: "white",
                padding: "6px",
              }}
            >
              <img
                src="src/assets/image/close_ring_duotone-1.svg"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </button>
          </div>

          <div className="text">
            <TextInput
              handleChangeTask={handleChangeTask}
              name={"Task Name"}
              keyname={"name"}
              defaultvalue={newTaks.name}
            />

            <TextArea
              name={"description"}
              handleChangeTask={handleChangeTask}
              keyname={"desc"}
              defaultvalue={newTaks.desc}
            />

            <div className="Ticon">
              <h5
                style={{
                  color: "#97A3B6",
                  textTransform: "capitalize",
                  paddingBottom: "10px",
                }}
              >
                Icon
              </h5>
              <div className="ticon">
                {iconList.map((icon) => {
                  return (
                    <icon.Icon
                      key={icon.id}
                      className={`add-new-icon`}
                      style={{
                        background:
                          newTaks.icon === icon.id ? "#F5D565" : "#e3e8ef",
                      }}
                      onClick={() => {
                        handleChangeTask(icon.id, "icon");
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="Tstatus">
              <h5
                style={{
                  color: "#97A3B6",
                  textTransform: "capitalize",
                  paddingBottom: "10px",
                }}
              >
                status
              </h5>
              <div className="status3">
                {statuslist.map((status) => {
                  return (
                    <div
                      key={status.id}
                      className="status1"
                      onClick={() => {
                        handleChangeTask(status.status, "status");
                      }}
                      style={{
                        borderColor:
                          newTaks.status === status.status
                            ? "#3662E3"
                            : "#e3e8ef",
                      }}
                    >
                      <ImageButton status={status.status} />
                      <p>{status.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="Tbuton">
          <button className="Tbutton">
            delete <img src="src/assets/image/Trash.svg" alt="" />
          </button>
          <button className="tbutton" onClick={handleSave}>
            save <img src="src/assets/image/Done_round.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
