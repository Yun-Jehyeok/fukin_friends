import { Spin } from "antd";

export default function Spinner() {
  return (
    <div className="w-screen h-screen pointer-events-none bg-black fixed top-0 left-0 z-50 opacity-50 text-white text-center flex justify-center flex-col text-2xl">
      <Spin />
    </div>
  );
}
