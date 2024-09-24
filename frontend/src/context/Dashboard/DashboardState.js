import React, { useState, useEffect } from 'react'
import DashboardContext from './DashBoardContext'

// production URL
const apiURL = 'https://www.api.tripsytrips.com'

// Local Host
const localHost = 'http://localhost:4321'

const DashboardState = (props) => {

    const [nonEvisa, setNonEvisa] = useState([])
    const [packages, setPackages] = useState([])
    const [flights, setFlights] = useState([])
    const [contact, setContact] = useState([])
    const [insurance, setInsurance] = useState([])
    const [visa, setVisa] = useState([])
    const [docs, setDocs] = useState([])
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNonEvisaData = async () => {
            try {
                const response = await fetch(`${localHost}/api/fetchFormData/nonEvisa`);
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
                const response = await fetch(`${localHost}/api/fetchFormData/packages`);
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
                const response = await fetch(`${localHost}/api/fetchFormData/flights`);
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
        const fetchContactData = async () => {
            try {
                const response = await fetch(`${localHost}/api/fetchFormData/contact`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setContact(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchContactData();
    }, []);

    useEffect(() => {
        const fetchNewsletterData = async () => {
            try {
                const response = await fetch(`${localHost}/api/fetchFormData/newsletter`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setNews(jsonData);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };


        fetchNewsletterData();
    }, []);

    useEffect(() => {
        const fetchInsuranceData = async () => {
            try {
                const response = await fetch(`${localHost}/api/fetchFormData/insurance`);
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
                const response = await fetch(`${localHost}/api/fetchFormData/evisa`);
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
                const response = await fetch(`${localHost}/api/fetchFormData/evisaDocs`);
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
        <DashboardContext.Provider value={{ nonEvisa, packages, flights, contact, insurance, visa, docs, news}}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardState
