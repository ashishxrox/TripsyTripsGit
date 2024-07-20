import React from 'react';

const SortBy = () => {
    return (
        <div className='d-flex justify-content-start align-items-start'>
            <button className='d-flex justify-content-start align-items-start' type="button" data-toggle="modal" data-target="#exampleModal" style={{
                height: "54px", width: "279px", padding: "14px 30px", color: "rgba(2, 71, 134, 1)", backgroundColor: "#fff",
                border: '2px solid rgba(2, 71, 134, 1)', borderRadius: "30px", fontSize: "16px", fontWeight: "500"
            }}>
                Price - Lowest to Highest 
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.1368 9.4638C19.4883 9.81527 19.4883 10.3851 19.1368 10.7366L12.5004 17.373L5.86399 10.7366C5.51252 10.3851 5.51252 9.81527 5.86399 9.4638C6.21547 9.11233 6.78531 9.11233 7.13679 9.4638L12.5004 14.8274L17.864 9.4638C18.2155 9.11233 18.7853 9.11233 19.1368 9.4638Z" fill="#024786" />
                </svg>
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortBy;
