import './AddressMap.css';
import { useState, useEffect, useRef } from 'react';
import { ReactComponent as Back } from '../../../../../../assets/icons/back.svg';
import { useNavigate } from 'react-router-dom';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const AddressMap = ({
    selectAddress,
    getAddress,
}) => {
    const { kakao } = window;
    const [markerPosition, setMarkerPosition] = useState({
        lat:35.1460786494674 ,
        lng: 129.007038894696,
    });
    const mapRef = useRef(null);
    const geocoder = new kakao.maps.services.Geocoder();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler); // 성공시 successHandler, 실패시 errorHandler 함수가 실행된다.
    }, []);

    const successHandler = (response) => {
        
        const { latitude, longitude } = response.coords;
        addressCoord(latitude, longitude);
        setMarkerPosition({ lat: latitude, lng: longitude });
    };

    const errorHandler = (error) => {
        
    };

    const getCoord = (latLng) => {
        const lat = latLng.getLat();
        const lng = latLng.getLng();
        setMarkerPosition({
            lat,
            lng,
        });
        addressCoord(lat, lng);
    }

    const addressCoord = (lat, lng) => {
        geocoder?.coord2Address(lng, lat, (result, status) => {
            if (status !== kakao.maps.services.Status.OK) return;

            getAddress(result[0]);
        })
    }

    return (
        <div
            className='address-map-wrap'
            onClick={() => selectAddress()}
        >
            <Map
                center={{ lat: markerPosition.lat, lng: markerPosition.lng }}
                style={{ width: "100%", height: "700px" }}
                ref={mapRef}
                onClick={(_, mouseEvent) => {
                    getCoord(mouseEvent.latLng);
                }}
            >
                <MapMarker position={markerPosition ?? markerPosition} >
                    <div className='marker-info'>표시된 위치가 맞나요?</div>
                </MapMarker>
            </Map>
        </div>
    )
}

export default AddressMap;