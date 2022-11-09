import { useState } from "react";
import StoryEn from "./Story-En";
import StoryKo from "./Story-Ko";
import {} from "./css/BackgroundStory.css";

const BackgroundStory = () => {
  const [langugae, setLangugae] = useState("KOREAN");
  let content = null;
  let contextControl = null;
  if (langugae === "ENGLISH") {
    content = <StoryKo />;
  } else {
    content = <StoryEn />;
  }
  contextControl = (
    <input
      className="transLang"
      type="button"
      value={langugae}
      onClick={() => {
        if (langugae === "KOREAN") {
          setLangugae("ENGLISH");
        } else {
          setLangugae("KOREAN");
        }
      }}
    />
  );

  return (
    <div>
      {content}
      {contextControl}
    </div>
  );
};

export default BackgroundStory;
