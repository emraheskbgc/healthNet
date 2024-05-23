import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Close, Href,  Messages } from "../../../utils/constant";
import RightOption from "./RightOption";
import { Input } from "reactstrap";
import UserMessage from "./UserMessage";
import useOutsideDropdown from "@/utils/useOutsideDropdown";

const HeaderMessage: React.FC = () => {
  const { isComponentVisible, ref, setIsComponentVisible } =useOutsideDropdown(false);

  return (
    <li className="header-btn custom-dropdown dropdown-lg btn-group message-btn">
      
      <div className={`dropdown-menu dropdown-menu-right ${isComponentVisible ? "show" : ""}`} ref={ref}>
    
       
        <UserMessage />
      </div>
    </li>
  );
};

export default HeaderMessage;
