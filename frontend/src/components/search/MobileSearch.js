import React, { useState } from 'react';
import MobileSearchBox from './MobileSearchBox';
import '../../static/mobSearch.css';

const MobileSearch = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const handleShowSearch = () => {
        setShowSearch(!showSearch);
        setSearchPerformed(false);
    }

    const handleSearchPerformed = () => {
        setShowSearch(false); // Hide the search box
        setSearchPerformed(true); // Indicate that the search was performed
    }

    return (
        <div style={{ width: "100%" }}>
            <div className="mob-search-btn" onClick={handleShowSearch}>
                <svg width="30" height="34" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15625 10.7996C5.15625 7.23737 8.04401 4.34961 11.6062 4.34961C15.1685 4.34961 18.0562 7.23737 18.0562 10.7996C18.0562 14.3618 15.1685 17.2496 11.6062 17.2496C8.04401 17.2496 5.15625 14.3618 5.15625 10.7996ZM11.6062 2.84961C7.21559 2.84961 3.65625 6.40895 3.65625 10.7996C3.65625 15.1903 7.21559 18.7496 11.6062 18.7496C13.5315 18.7496 15.2969 18.0652 16.6725 16.9265L20.975 21.229C21.2679 21.5219 21.7428 21.5219 22.0356 21.229C22.3285 20.9361 22.3285 20.4612 22.0356 20.1683L17.7332 15.8659C18.8719 14.4903 19.5562 12.7249 19.5562 10.7996C19.5562 6.40895 15.9969 2.84961 11.6062 2.84961Z" fill="#024786" />
                </svg>

            </div>

            <div className={`mob-search-cont ${showSearch && !searchPerformed ? "mob-search-cont-drop" : ""} d-flex justify-content-center align-items-center`} style={{ height: "150px", backgroundColor: "#fff", position: "relative", right: "275px", zIndex: "9999999" }}>
                <MobileSearchBox handleSearchPerformed={handleSearchPerformed} />
            </div>
        </div>
    );
}

export default MobileSearch;
