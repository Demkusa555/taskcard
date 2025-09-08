import { LuMessageCircleMore } from "react-icons/lu";
import TextArea from "./TextArea";
import TextInput from "./TextInput";
import { PiCoffee } from "react-icons/pi";
import { IoLaptopSharp } from "react-icons/io5";
import { CgGym } from "react-icons/cg";
import { SiBookstack } from "react-icons/si";
import { IoIosAlarm } from "react-icons/io";
import ImageButton from "./ImageButon";

const iconList = [
  { id: 1, Icon: IoLaptopSharp },
  { id: 2, Icon: LuMessageCircleMore },
  { id: 3, Icon: PiCoffee },
  { id: 4, Icon: CgGym },
  { id: 5, Icon: SiBookstack },
  { id: 6, Icon: IoIosAlarm },
];

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

function TaskDetail({ close }) {
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
            <TextInput name={"Task Name"} />

            <TextArea name={"description"} />

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
                  return <icon.Icon key={icon.id} className="add-new-icon" />;
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
                    <div className="status1">
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
          <button className="tbutton">
            save <img src="src/assets/image/Done_round.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetail;
