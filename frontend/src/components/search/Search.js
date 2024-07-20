import React, { useState, useContext, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VisaContext from "../../context/Visa/VisaContext";
import SearchBox from "./SearchBox";
import '../../static/search.css';

const Search = () => {
  const context = useContext(VisaContext);
  const { countries } = context;
  const [filteredCountry, setFilteredCountry] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const closeModalButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (closeModalButtonRef.current) {
      closeModalButtonRef.current.click();
      setSearchTerm(""); // Reset the search term when the modal closes
    }
  }, [location]);

  return (
    <div>
      <button
        type="button"
        className="main-search-btn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ background: "transparent", border: "none" }}
      >
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
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ background: "transparent" }}
      >
        <div className="modal-dialog">
          <div
            className="modal-content"
            style={{
              width: "850px",
              transform: "translateX(-150px)",
              background: "transparent",
              border: "none"
            }}
          >
            <div className="modal-body" style={{ width: "100%", background: "transparent" }}>
              <div
                className="container"
                style={{
                  width: "100%",
                  height: "600px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  flexDirection: "column"
                }}
              >
                <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <span className="search-right-cont"></span>
                <button
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    position: "relative",
                    border: "none",
                    borderRadius: "10px",
                    left: "415px",
                    bottom: "72px",
                    padding: "18px 20px",
                    fontSize: "16px",
                    backgroundColor: "#fff"
                  }}
                  type="button"
                  data-bs-dismiss="modal"
                >
                  <ion-icon
                    style={{ fontSize: "36px", color: "red", background: "transparent" }}
                    name="close-circle-outline"
                  ></ion-icon>
                </button>
                <button
                  ref={closeModalButtonRef}
                  style={{ display: "none" }}
                  data-bs-dismiss="modal"
                ></button>
              </div>
              {/* <h1>
                this is search
              </h1> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
