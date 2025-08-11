import { useEffect, useState } from "react";
import done from "../assets/image/Done.svg";
import time from "../assets/image/Time.svg";
import close from "../assets/image/close.svg";

function ImageButton({ status, image }) {
  const [currentStatus, setCurrentStatus] = useState("normal");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    setCurrentStatus(status);
  }, [status]);

  useEffect(() => {
    if (image) {
      setImageSrc(image);
    } else {
      if (status === "wontdo") {
        setImageSrc(close);
      } else if (status === "complete") {
        setImageSrc(done);
      } else if (status === "progress") {
        setImageSrc(time);
      } else {
        setImageSrc("");
      }
    }
  }, [image]);

  if (!imageSrc) return;

  return (
    <div className={`button-image button-${currentStatus}`}>
      <img src={imageSrc} alt="#" />
    </div>
  );
}

export default ImageButton;
