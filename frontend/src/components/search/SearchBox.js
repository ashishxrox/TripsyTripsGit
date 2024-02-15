import '../../static/search.css';

import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "Azerbaijan", label: "Azerbaijan" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Turkey", label: "Turkey" },
    { value: "Egypt", label: "Egypt" },
    { value: "Australia", label: "Australia" },
    { value: "Ethiopia", label: "Ethiopia" },
    { value: "Bahrain", label: "Bahrain" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Taiwan", label: "Taiwan" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Saudi Arabia", label: "Saudi Arabia" },
    { value: "Moldova", label: "Moldova" },
    { value: "Morocco", label: "Morocco" },
    { value: "Oman", label: "Oman" },
    { value: "Russia", label: "Russia" },
    { value: "Rwanda", label: "Rwanda" },
    { value: "Cambodia", label: "Cambodia" },
    { value: "Georgia", label: "Georgia" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Indonesia", label: "Indonesia" },
    { value: "Jordan", label: "Jordan" },
    { value: "Kyrgyzstan", label: "Kyrgyzstan" },
    { value: "Laos", label: "Laos" },
    { value: "Madagascar", label: "Madagascar" },
    { value: "Qatar", label:"Qatar" },
    { value: "United States of America", label:"United States of America" },
    { value: "Canada", label:"Canada" },
    { value: "Schengen", label:"Schengen" },
    { value: "Sri Lanka", label:"Sri Lanka" },
];

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (selectedOption) => {
        setSearchTerm(selectedOption ? selectedOption.value : '');
        onSearch(selectedOption ? selectedOption.value : '');
    };

    return (
        <div className="search-form" style={{}}>
            <Select
                placeholder="Search..."
                options={options}
                value={options.find(option => option.value === searchTerm)}
                onChange={handleSearchChange}
                isClearable
                isSearchable
                styles={{
                    control: (provided) => ({
                        ...provided,
                        width: '100%',
                        minHeight: '40px',
                        border: '2px solid #000047',
                        borderRadius: '15px',
                    }),
                    input: (provided) => ({
                        ...provided,
                        padding: '10px',
                    }),
                    menu: (provided) => ({
                        ...provided,
                        marginTop: '2px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        zIndex: 9999, // Increased z-index
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected ? '#000047' : 'white',
                        color: state.isSelected ? 'white' : '#000047',
                        cursor: 'pointer',
                        zIndex: 9999999, // Increased z-index
                    }),
                }}
                components={{
                    IndicatorSeparator: () => null, // Hide the indicator separator
                    DropdownIndicator: () => (
                        <div style={{ padding: '8px', cursor: 'pointer' }}>
                            <ion-icon name="search-outline" style={{ fontSize: '30px', color: '#000047', transform:"translateX(-10px)"}}></ion-icon>
                        </div>
                    ),
                }}
            />
        </div>
    )
}

export default SearchBox;
