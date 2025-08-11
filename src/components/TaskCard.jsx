import { useEffect, useState } from "react";
import ImageButton from "./ImageButon";

function TaskCard({ status, img }) {
  const [color, setColor] = useState("normal");

  useEffect(() => {
    setColor(status);
  }, [status]);

  return (
    <div className={`tasks status-${color}`}>
      <ImageButton image={img} />
      <div>
        <h2>Task in Progress</h2>
        <p>Lorem ipsum dolor, sit amet consectetur</p>
      </div>
      <ImageButton status={status} />
    </div>
  );
}

export default TaskCard;
