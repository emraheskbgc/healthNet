import { FC } from "react"
import OptionList from "./OptionList"
import PostStats from "./PostStats"

const RightHeader:FC = () => {
  return (
    <div className="header-right">
        
        <OptionList/>
    </div>
  )
}

export default RightHeader