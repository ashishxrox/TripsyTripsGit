import React,{useEffect} from 'react'
import Contact from './Contact'
import FlightHotels from './FlightHotels'
import HomeBanner from './HomeBanner'
import HomeIntro from './HomeIntro'
import NavBox from '../navbar/NavBox'
import Reviews from './Reviews'



const Home = ({onLoadStart, onLoadComplete}) => {
  useEffect(() => {
    // Call onLoadStart when the component starts loading
    onLoadStart();

    // Simulate loading delay
    const delay = setTimeout(() => {
      // Call onLoadComplete when the component finishes loading
      onLoadComplete();
      clearTimeout(delay);
    }, 1000); // Adjust the delay as needed
  }, [onLoadStart, onLoadComplete]);

  
  return (
    <div>
      <HomeBanner/>
      <HomeIntro/>
      <NavBox/>
      <FlightHotels/>
      <Reviews/>
      <Contact/>
    </div>
  )
}

export default Home
