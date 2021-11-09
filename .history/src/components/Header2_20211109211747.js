import React from 'react'

function Header2() {
   const toggleSideBar=(event)=>{
      
  var element= document.getElementsByClassName("sidebar")[0];
  element.classList.toggle("d-none");
   console.log(element);
   }
   
    return (
        <div className="bodyOfHeader2"> 
                <div className="row mr-0 ml-0">
                <div className="col-2 d-flex align-items-center justify-content-center" onClick={toggleSideBar}><i className="fas fa-bars"></i></div>
                <div className="col-8 d-flex align-items-center justify-content-center p-1"><h3>Home</h3></div>
                <div className="col-2 d-flex align-items-center justify-content-center"><i className="far fa-user"></i></div>
               
            </div>
            <div className="row d-flex align-items-center justify-content-center m-0">
               <div className="col-1"></div>
                <div className="col-10 p-0 m-0">
                    <input type="search" name="search" placeholder="Search...." className="form-control" />
                    <i className="fas fa-search"></i>
                    </div>
                <div className="col-1"></div>
            </div>
            <div className="sidebar d-none">
                <a href=""><h5 style={{ padding: 20, color: 'white' }}>Profile</h5></a>
                <a href="/Home"><h5 style={{ padding: 20,color:'white' }}>Home</h5></a>
                <a href="/Request"><h5 style={{ padding: 20, color: 'white' }}>Previous Requests</h5></a>
                <a href="/Create"><h5 style={{ padding: 20, color: 'white' }}>Create Request</h5></a>
                <a href="/login"><h5 style={{ padding: 20, color: 'white' }}>Logout</h5></a>
                {/* <a href="/Campaign"><h4 style={{ padding: 20, color: 'white' }}>Campaign</h4></a> */}
                {/* <a href=""><h4 style={{ padding: 20, color: 'white' }}>Tips</h4></a> */}
            </div>
        </div>
    )
}

export default Header2
