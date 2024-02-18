import React, { useState, useEffect } from 'react'
import DashboardContext from './DashBoardContext'

const apiURL = 'www.api.tripsytrips.com'

const DashboardState = (props) => {

    const [nonEvisa, setNonEvisa] = useState([])
    const [packages, setPackages] = useState([])
    const [flights, setFlights] = useState([])
    const [hotels, setHotels] = useState([])
    const [insurance, setInsurance] = useState([])
    const [visa, setVisa] = useState([])
    const [docs, setDocs] = useState([])

    useEffect(() => {
        const fetchNonEvisaData = async () => {
            try {
                const response = await fetch(`http://${apiURL}/api/fetchFormData/nonEvisa`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setNonEvisa(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchNonEvisaData();
    }, []);

    useEffect(() => {
        const fetchPackageData = async () => {
            try {
                const response = await fetch(`http://${apiURL}/api/fetchFormData/packages`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setPackages(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchPackageData();
    }, []);

    useEffect(() => {
        const fetchFlightData = async () => {
            try {
                const response = await fetch(`http://${apiURL}/api/fetchFormData/flights`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setFlights(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchFlightData();
    }, []);

    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await fetch(`http://${apiURL}/api/fetchFormData/hotels`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setHotels(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchHotelData();
    }, []);

    useEffect(() => {
        const fetchInsuranceData = async () => {
            try {
                const response = await fetch(`http://${apiURL}/api/fetchFormData/insurance`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setInsurance(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchInsuranceData();
    }, []);

    useEffect(() => {
        const fetchVisaData = async () => {
            try {
                const response = await fetch(`http://${apiURL}/api/fetchFormData/evisa`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setVisa(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchVisaData();
    }, []);

    useEffect(() => {
        const fetchDocData = async () => {
            try {
                const response = await fetch(`http://${apiURL}/api/fetchFormData/evisaDocs`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setDocs(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchDocData();
    }, []);

    return (
        <DashboardContext.Provider value={{ nonEvisa, packages, flights, hotels, insurance, visa, docs}}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardState
