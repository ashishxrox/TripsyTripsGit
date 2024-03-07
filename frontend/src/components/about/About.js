import React,{useEffect} from 'react';
import '../../static/about.css'
// import Journey from './Journey';
import OurCulture from './OurCulture';
// import banner from '../../static/assets/aboutImg.jpeg'
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom'


const AboutPage = () => {

  const location = useLocation()

  useEffect(() => {
    ReactGA.initialize('G-QTRPBPD2RZ'); // Initialize ReactGA with your Measurement ID
    ReactGA.pageview(window.location.pathname + window.location.search); // Track page views

}, []);
  return (
    <>
      {/* <div className='banner-section'>
        <img className='banner-img' src={banner} alt='banner-img' />
      </div> */}
      <div className='container mt-5 about-section py-3 px-5' style={{ backgroundColor: "#ffffff" }}>
        <div className='row py-3'>
          <div className='col-12 col-md-6'>
            <h1 className='sub-title'>we are</h1>
            <h1 className='title'>Trispy Trips</h1>
            <p className='mt-3'>
              Tripsy Trips, formerly known as Sarvang Travels, was founded in February 2021, with the main
              aim of understanding our clients’ travel requirements and providing pocket friendly travel
              solutions to all our clients. Along with providing outstanding customer service, we are dedicated

              to providing the best deals and offers to travellers.

              We cater to travel services such as Domestic and International Flight Bookings, Domestic and

              International Hotel Bookings and Tourist Visa Services.

              Whether for work or for leisure, our well experienced team members promise to assist you with

              your requirements to ensure effortless travel experiences.

              We are able to provide our clients with the best value for their money due to our strong
              relationships with hotels across the nation, both luxury and budget friendly. The efficacy of Tripsy

              Trips makes it the most reliable and promising travel agency for you.

              The team is prompt in their replies to your queries which makes all our customers see us as one

              of the most effective and trustworthy travel agency in India.

              Feel free to contact us at any given hour with our team being available to assist you 24 hours a

              day, 7 days a week.</p>
          </div>
          <div className='col-12 col-md-6'>
            <p>
              <b style={{ fontSize: "30px", color: "#000047", fontFamily: "DM Serif Display" }}>Mission </b> Our goal is to manage business travel and vacation dreams by providing individualized, top-notch
              services. As members of the Tripsy Trips management team, we are committed to providing
              excellent services and finest value for our customers that go above and beyond industry

              standards.

              We believe in delivering consistent, ethical, and high-quality service to our clients and community
              will lead to eternal bonds. Our goal is to make a profit that will improve the lives of our employees
              and, in part, benefit the community through initiatives and services. We are certain that our
              business will successfully and pro-actively address the problems of the future through

              collaborative decision-making.
            </p>
            <br />
            <br />
            <br />

            <p>
            <b style={{ fontSize: "30px", color: "#000047", fontFamily: "DM Serif Display" }}>Vision</b> Our vision is to establish our business as market leaders, creative thinkers, and pioneers in the
              travel industry, positioning our company in the market within the best tourism companies both
              domestically and internationally and being recognized for our professionalism yet friendly,

              customer centric and high-quality services.
            </p>
            {/* <p>
              cab, bus & train booking services What makes our story even stronger is the performance of our newly launched segments, like myBiz—our
              comprehensive business travel suite and myPartner—an exclusive platform for travel agents. Entering the Gulf market is our latest feat, where we offer power-packed deals on flights & hotels.
            </p> */}
          </div>
        </div>
      </div>
      {/* <Journey /> */}
      <OurCulture />
    </>
  )
}

export default AboutPage
