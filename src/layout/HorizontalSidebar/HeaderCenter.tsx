import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import SvgIconCommon from "@/Common/SvgIconCommon";
import { sideBarData } from "@/Data/Layout";
import { Href } from "../../utils/constant";
import Link from "next/link";
import { FC } from "react";

const HeaderCenter: FC = () => {
  return (
    <div className="header-center d-none d-xl-block">
      <ul className="sidebar-icon">
        {sideBarData.map((data, index) => (
          <li key={index} className={data.tooltipTittle === "newsfeed" ? "active" : ""}>
            <a href={Href}>
              <DynamicFeatherIcon iconName={data.icon} className="bar-icon" />
            </a>
          </li>
        ))}
      
      </ul>
    </div>
  );
};

export default HeaderCenter;
