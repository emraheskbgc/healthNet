import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Close, NotificationHeader } from "../../../utils/constant";
import NotificationLists from "./NotificationLists";
import FriendRequest from "./FriendRequest";
import useOutsideDropdown from "@/utils/useOutsideDropdown";

const Notification: React.FC = () => {
  const { isComponentVisible, ref, setIsComponentVisible } =useOutsideDropdown(false);
  return (
    <li className="header-btn custom-dropdown dropdown-lg btn-group notification-btn">
      <a  className={`main-link ${isComponentVisible ? "show" : ""}`}>
        <DynamicFeatherIcon iconName="Bell"  onClick={() => setIsComponentVisible(!isComponentVisible)}/>
        <span className="count warning">2</span>
      </a>
      <div ref={ref} className={`dropdown-menu dropdown-menu-right ${isComponentVisible ? "show" : ""}`} >
        <div className="dropdown-header">
          <span>{NotificationHeader}</span>
          <div className="mobile-close" onClick={() => setIsComponentVisible(!isComponentVisible)}>
            <h5>{Close}</h5>
          </div>
        </div>
        
      </div>
    </li>
  );
};

export default Notification;
