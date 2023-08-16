import React, {useState} from 'react';
import Main from '../components/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMobile = () => {
        setIsOpen(!isOpen)
    }

  return (
      <>
      <Sidebar isOpen={isOpen} toggleMobile={toggleMobile}/>
      <Navbar toggleMobile={toggleMobile}/>
      <Main />
      </>
  );
};

export default Home;
