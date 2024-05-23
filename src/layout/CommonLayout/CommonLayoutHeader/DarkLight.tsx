import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../utils/constant";
import { useState } from "react";

const DarkLight: React.FC = () => {
  const [moonlight, setMoonlight] = useState(false);

  const MoonlightToggle = (light: boolean) => {
    setMoonlight(!light);
    moonlight?document.body.classList.remove("dark"):document.body.classList.add("dark")
  
  };
  return (
    <li  onClick={() => MoonlightToggle(moonlight)}>
      <a  href={Href}>
        <DynamicFeatherIcon iconName={moonlight ? "Sun" : "Moon"} />
      </a>
    </li>
  );
};

export default DarkLight;
