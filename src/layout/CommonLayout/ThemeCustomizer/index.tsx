import React, { FC, useState } from "react";
import ThemeSettings from "./ThemeSettings";
import SettingPage from "./SettingPage";

const ThemeCustomizer: FC = () => {
  const [settingPageOpen, setSettingPageOpen] = useState(false);
  return (
    <>
      
      <SettingPage
        settingPageOpen={settingPageOpen}
        setSettingPageOpen={setSettingPageOpen}
      />
    </>
  );
};

export default ThemeCustomizer;
