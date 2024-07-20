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
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.34961 10.7996C4.34961 7.23737 7.23737 4.34961 10.7996 4.34961C14.3618 4.34961 17.2496 7.23737 17.2496 10.7996C17.2496 14.3618 14.3618 17.2496 10.7996 17.2496C7.23737 17.2496 4.34961 14.3618 4.34961 10.7996ZM10.7996 2.84961C6.40895 2.84961 2.84961 6.40895 2.84961 10.7996C2.84961 15.1903 6.40895 18.7496 10.7996 18.7496C12.7249 18.7496 14.4903 18.0652 15.8659 16.9265L20.1683 21.229C20.4612 21.5219 20.9361 21.5219 21.229 21.229C21.5219 20.9361 21.5219 20.4612 21.229 20.1683L16.9265 15.8659C18.0652 14.4903 18.7496 12.7249 18.7496 10.7996C18.7496 6.40895 15.1903 2.84961 10.7996 2.84961Z"
                        fill="#024786"
                    />
                </svg>
            </div>

            <div className={`mob-search-cont ${showSearch && !searchPerformed ? "mob-search-cont-drop" : ""} d-flex justify-content-center align-items-center`} style={{ height: "150px", backgroundColor: "#fff", position: "relative", right: "275px", zIndex: "9999999" }}>
                <MobileSearchBox handleSearchPerformed={handleSearchPerformed} />
            </div>
        </div>
    );
}

export default MobileSearch;
