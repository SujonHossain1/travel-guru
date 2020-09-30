import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HotelMap = () => {

    const center= {
        lat: 59.95,
        lng: 30.33
      }
     
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyAE-fX4Hahg4voa_UoxColVzI54HubSVdE" }}
                defaultCenter={center}
                defaultZoom={11}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}


export default HotelMap;