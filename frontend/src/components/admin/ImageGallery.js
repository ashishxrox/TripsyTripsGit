import React, { useState, useEffect } from 'react';


const ImageGallery = () => {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        // Fetch image URLs from the database
        const fetchImageUrls = async () => {
            try {
                const response = await fetch('http://localhost:4321/api/getCountryImage');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setImageUrls(data);
            } catch (error) {
                console.error('Error fetching image URLs:', error);
            }
        };

        fetchImageUrls();
    }, []);

    return (
        <div className="image-gallery">
            {/* {imageUrls.map((imageUrl, index) => (
                // eslint-disable-next-line
                <img key={index} src={`http://localhost:4321/${imageUrl.path}`} alt={`Image ${index + 1}`} />
            ))} */}

            {/* <img src={Tanzania} alt="" /> */}

        </div>
    );
};

export default ImageGallery;
