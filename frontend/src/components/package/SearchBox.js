import '../../static/search.css';

import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: "Dubai", label: "Dubai" },
    { value: "Singapore", label: "Singapore"},
    { value: "Malaysia", label: "Malaysia"},
    { value: "Bali", label: "Bali"},
    { value: "Turkey (Istanbul and Cappadocia)", label: "Turkey (Istanbul and Cappadocia)"},
    { value: "Kerala", label: "Kerala" },
    { value: "Kashmir", label: "Kashmir" },
    { value: "Vietnam", label: "Vietnam" },
    { value: "Sri Lanka", label: "Sri Lanka" },
    { value: "Thailand", label: "Thailand" },
];

const SearchBox = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (selectedOption) => {
        setSearchTerm(selectedOption ? selectedOption.value : '');
        onSearch(selectedOption ? selectedOption.value : '');
    };

    return (
        <div className="pkg-search-form" style={{}}>
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
