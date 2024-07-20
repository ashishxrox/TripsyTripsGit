import React,{useContext} from 'react';
import Search from './Search';
import PackageBody from './PackageBody';
import PackageBanner from './PackageBanner';
import Faq from '../Faq/Faq';
import SortBy from './SortBy';
import Filter from './Filter';

import '../../static/package.css';
import FaqContext from '../../context/FaqCont/FaqContext';

const Visa = () => {
    const context = useContext(FaqContext)
    const {genFaq} = context
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <PackageBanner />

            <div className="visa-title mt-5 d-flex justify-content-end align-items-end flex-column" style={{ height: "15vh", width: "90%", backgroundColor: "#fff" }}>
                <div className="head-box my-1 d-flex justify-content-between align-items-center" style={{ flexBasis: "25%", height: "80%", width: "100%" }}>
                    <h2 style={{ fontSize: "46px", fontWeight: "500", fontFamily: "Clash Display" }}>Our Packages</h2>
                    <div className="d-flex justify-content-center align-items-center flex-row">
                        {/* <h6 className='mx-2' style={{fontSize:"18px", fontWeight:"500"}}>Sort By: </h6>
                        <div><SortBy/> </div>
                        <div><Filter/> </div> */}
                    </div>
                </div>
                {/* <div className="v-options-box my-1" style={{ flexBasis: "35%", height: "100%", width: "70%", }}>
                </div> */}
            </div>

            <div className="visa-body-div" style={{ width: "95%" }}>
                <PackageBody />
            </div>
            <Faq content={genFaq} />
        </div>
    );
};

export default Visa;
