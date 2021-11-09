import React from 'react';
import Header2 from './Header2';

function Home() {
    return (
        <div>
            <Header2/>
            <div className="groups d-flex align-items-center justify-content-center">
                <div className="APositive">A+</div>
                <div className="ANegative">A-</div>
                <div className="BPositive">B+</div>
                <div className="ANegative">B+</div>
                <div className="OPositive">O+</div>
                <div className="ONegative">O-</div>
                <div className="ABPositive">AB+</div>
                <div className="ABNegative">AB-</div>
            </div>
            <div className="row HomeRow mr-0 ml-0">
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <img src="./images/Ali Khan.jfif" name="AliKhan" className="pr-0"style={{ width: 100, borderRadius:50}}/>
                </div>
                <div className="col-6 " style={{ padding:10 }}><p style={{fontWeight:'bolder', }}>Ali Khan</p>
                    <p style={{ color: 'gray' }}><i className="fas fa-phone" style={{ color: 'green' }}></i>&nbsp;&nbsp;9273612736912</p>
                    <p style={{ color: 'gray' }}><i className="fas fa-map-marker" style={{ color: 'red' }}></i>&nbsp;&nbsp;97 North Bank St.</p>
                    <p style={{ color: 'gray' }}>Rolling Meadows, iL 60008</p>
                    </div>
                <div className="col-2">
                    <h4 style={{ color: '#FF3B3B' }} className="pt-1 pr-0 pl-0">B+</h4>
                </div>
            </div>
            <div className="row HomeRow mr-0 ml-0">
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <img src="./images/Areeka Haq.jfif" name="AliKhan" className="pr-0" style={{ width: 100, borderRadius: 50, paddingTop: 10 }} />
                </div>
                <div className="col-6 " style={{ padding: 10 }}><p style={{ fontWeight: 'bolder', }}>Areeka Haq</p>
                    <p style={{ color: 'gray' }}><i className="fas fa-phone" style={{ color: 'green' }}></i>&nbsp;&nbsp;9273612736912</p>
                    <p style={{ color: 'gray' }}><i className="fas fa-map-marker" style={{ color: 'red' }}></i>&nbsp;&nbsp;97 North Bank St.</p>
                    <p style={{ color: 'gray' }}>Rolling Meadows, iL 60008</p>
                </div>
                <div className="col-2">
                    <h4 style={{ color: '#FF3B3B' }} className="pt-1 pr-0 pl-0">BA-</h4>
                </div>
            </div>
            <div className="row HomeRow mr-0 ml-0">
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <img src="./images/Azeem Shah.jfif" name="AliKhan" className="pr-0" style={{ width: 100, borderRadius: 50, paddingTop: 10 }} />
                </div>
                <div className="col-6 " style={{ padding: 10 }}><p style={{ fontWeight: 'bolder', }}>Azeem Shah</p>
                    <p style={{ color: 'gray' }}><i className="fas fa-phone" style={{ color: 'green' }}></i>&nbsp;&nbsp;9273612736912</p>
                    <p style={{ color: 'gray' }}><i className="fas fa-map-marker" style={{ color: 'red' }}></i>&nbsp;&nbsp;97 North Bank St.</p>
                    <p style={{ color: 'gray' }}>Rolling Meadows, iL 60008</p>
                </div>
                <div className="col-2">
                    <h4 style={{ color: '#FF3B3B' }} className="pt-1 pr-0 pl-0">A-</h4>
                </div>
            </div>
            <div className="row HomeRow mr-0 ml-0">
                <div className="col-4 d-flex align-items-center justify-content-center">
                    <img src="./images/Jannat Mirza.jfif" name="AliKhan" className="pr-0" style={{ width: 100, borderRadius: 50, paddingTop: 10 }} />
                </div>
                <div className="col-6 " style={{ padding: 10 }}><p style={{ fontWeight: 'bolder', }}>Jannat Mirza</p>
                    <p style={{ color: 'gray' }}><i className="fas fa-phone" style={{ color: 'green' }}></i>&nbsp;&nbsp;9273612736912</p>
                    <p style={{ color: 'gray' }}><i className="fas fa-map-marker" style={{ color: 'red' }}></i>&nbsp;&nbsp;97 North Bank St.</p>
                    <p style={{ color: 'gray' }}>Rolling Meadows, iL 60008</p>
                </div>
                <div className="col-2">
                    <h4 style={{ color: '#FF3B3B' }} className="pt-1 pr-0 pl-0">AB+</h4>
                </div>
            </div>
        </div>
        
    )
}

export default Home
