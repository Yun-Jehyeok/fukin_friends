import { useState } from "react";

export default function useTapToggle() {
  const [isToggle, setToggle] = useState(false);
  const toggle = isToggle ? (
    <div className="absolute top-12 left-2">
      <div className="relative w-2 h-2 rotate-45 bg-baseRed top-1 left-4"></div>
      <div className="w-fit h-fit bg-baseRed rounded-3 text-white p-2 text-xs">
        엔터를 입력하여 태그를 입력할 수 있습니다. 태그를 클릭하면 태그가
        삭제됩니다.
      </div>
    </div>
  ) : (
    ""
  );
  return { setToggle, toggle };
}
