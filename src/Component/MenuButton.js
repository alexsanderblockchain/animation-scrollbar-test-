import Skeleton from "@material-ui/lab/Skeleton";
import React from 'react';
import { motion } from "framer-motion"

function MenuButton(props) {
  return (
    <div className="">
    <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity:[0,0.5,1]
            }}
            transition={{ duration: 1 }}
            >
      <p className="mb-4 text-xl">{props.title}</p>
      <div className="w-64 h-36 box ">
        <Skeleton variant="rectangular" height={'100%'} margin={'24px'} />
      </div>
      <button className="mt-4 mybutton">{props.button}</button>

      </motion.div>
    </div>
  );
}

export default MenuButton;
