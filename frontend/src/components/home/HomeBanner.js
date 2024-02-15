import React from 'react'
import '../../static/banner.css'
import img from '../../static/assets/bg-4.jpeg'

const HomeBanner = () => {
    const myStyle = {
        width: "100%",
        aspectRatio:"2/3"


    }
    return (
        <div  className="home-banner"style={myStyle}>
            {/* <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://img.veenaworld.com/wp-content/uploads/2020/01/david-marcu-VfUN94cUy4o-unsplash.jpg" className="d-block w-100" alt="..."/></div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://www.thestatesman.com/wp-content/uploads/2023/01/iStock-1019326950.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/15/full/1705287542-902.jpg?im=FeatureCrop,size=(826,465)" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
            <img src={img} alt=""/>
        </div>
    )
}

export default HomeBanner
