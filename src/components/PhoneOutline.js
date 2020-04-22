import React, {useContext, useEffect} from "react";

import SocketContext from "../contexts/socket";

export const phoneOutlineRef = React.createRef();

export default function PhoneOutline() {
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    socket.on('setPhoneBounds', (phoneBounds) => {
      const { width, height, x, y } = phoneBounds;
      phoneOutlineRef.current.style.width = width;
      phoneOutlineRef.current.style.height = height;
      phoneOutlineRef.current.style.left = x;
      phoneOutlineRef.current.style.top = y;
    });
  }, []);

  return (
    <div
      ref={phoneOutlineRef}
      id="phoneOutline"
    />
  );
}
