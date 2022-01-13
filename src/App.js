import './App.css';
import { Button } from '@material-ui/core';
import MenuButton from './Component/MenuButton';
import { motion,useViewportScroll } from "framer-motion"

function App() {
  const { scrollYProgress } = useViewportScroll()
  return (
    <div className="relative font-bold ">
      <img src="./assets/img/background.png" className=" absolute top-0 left-0 background"/>
      <div className="p-0 text-white text-center w-full pt-8 ">
        <div className="">
          <img src="./assets/img/mark1.png" className="m-4 inline w-16"/>
          <img src="./assets/img/mark2.png" className="m-4 inline w-16"/>
        </div>
        <p className="text-lg">Welcome to</p>
        <p className="text-3xl">MGL Eco-system</p>
        <p className="text-lg">Empowering the text generation of Defi eco-system</p>
        <div className="flex flex-wrap justify-around mt-28">     
              <MenuButton title={'Exchange'} button={'See More'} />
            
              <MenuButton title={'DeFi'} button={'See More'} />
            
              <MenuButton title={'Coming Soon'} button={'See More'} />      
        </div>
        <img src="./assets/img/earth.png" className="w-4/6 m-auto pt-12"/>
      </div>
    </div>
  );
}

export default App;
