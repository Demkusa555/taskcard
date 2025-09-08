import { useEffect, useState } from "react";
import ImageButton from "./ImageButon";

function TaskCard({ status, img, title, desc }) {
  const [color, setColor] = useState("normal");

  useEffect(() => {
    setColor(status);
  }, [status]);

  return (
    <div className={`tasks status-${color}`}>
      <div className="timg">
        <ImageButton image={img} />
        <div>
          <h2 style={{ fontSize: "20px", fontWeight: "700" }}>{title}</h2>
          {desc && <p style={{ color: "#6a707b" }}>{desc}</p>}
        </div>
      </div>

      {status && <ImageButton status={status} />}
    </div>
  );
}

export default TaskCard;
