import React, { useState } from 'react';

const ImageUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert('Please select a file.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await fetch('http://localhost:4321/api/uploadCountryImage', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                alert('Image uploaded successfully!');
                setSelectedFile(null); // Clear selected file after successful upload
            } else {
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image. Please try again.');
        }
    };

    return (
        <div style={{marginTop:"200px"}}>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Select Image:</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} />
                </div>
                <div>
                    <button type="submit">Upload</button>
                </div>
            </form>
        </div>
    );
};

export default ImageUploadForm;
