import {motion} from "framer-motion"
import { useState } from "react";
function App() {
  const [change,setChange] = useState(true)
  let str = "flex justify-center items-center h-lvh"
  let str1 = "flex justify-center items-center h-lvh bg-gray-300"
  return (
    <div className={change?str:str1}>
      <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} className="text-9xl">Hello</motion.div>
      <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.2}} className="text-9xl">world</motion.div>
      <button onClick={()=>{
        setChange(p=>!p)
      }}>Change</button>
      </div>
    
  );
}

export default App;
