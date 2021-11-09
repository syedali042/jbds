import React from 'react';

function Header() {
    return (
        <>
            <div className="header">

                <div className="row w-100">
                    <div className="col-3">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="col-8 d-flex align-items-center justify-content-center create">Blood Requests</div>
                    <div className="col-1"></div>
                </div>
            </div>
        </>
    )
}

export default Header
