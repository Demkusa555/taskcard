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
          <h2>{title}</h2>
          {desc && <p>{desc}</p>}
        </div>
      </div>

      {status && <ImageButton status={status} />}
    </div>
  );
}

export default TaskCard;
