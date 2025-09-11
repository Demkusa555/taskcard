import { useEffect, useState } from "react";
import ImageButton from "./ImageButon";
import TaskDetail from "./taskDetail";
import UpdateTask from "./UpdateTask";

function TaskCard({ status, img, title, desc, open }) {
  const [color, setColor] = useState("normal");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setColor(status);
  }, [status]);

  const closePopUp = () => {
    setToggle(false);
  };

  return (
    <>
      <div
        className={`tasks status-${color}`}
        onClick={() => {
          setToggle((prev) => !prev);
          if (open) {
            open();
          }
        }}
      >
        <div className="timg">
          <ImageButton image={img} />
          <div>
            <h2 style={{ fontSize: "20px", fontWeight: "700" }}>{title}</h2>
            {desc && <p style={{ color: "#6a707b" }}>{desc}</p>}
          </div>
        </div>

        {status && <ImageButton status={status} />}
      </div>
      {toggle && <UpdateTask close={closePopUp} />}
    </>
  );
}

export default TaskCard;
