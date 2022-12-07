import { useState } from "react";

function Myfirstreact() {
  const [light, setLight] = useState(false);

function lightOfOn(){
    setLight(!light)
}


  return (
    <div>
      <img 
      onClick={lightOfOn} 

        src={
          light
            ? "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png  " 
            :"https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
            
        }
      />
    </div>
  );
}

export default Myfirstreact;
