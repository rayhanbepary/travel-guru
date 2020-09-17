import React from 'react';
import HotelInfo from '../../fakedData/HotelData';
import {FaStar} from 'react-icons/fa';

const Hotel = () => {

    let singleHotel = HotelInfo.map(hotel => hotel.title);
    console.log(singleHotel);
    return (
        <div style={{marginTop: '100px'}}>
           {
                HotelInfo.map(hotel => {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img src={hotel.image} style={{width: '250px', height: 'auto',marginBottom: '30px'}} alt=""/>
                                        </div>
                                        <div className="col-lg-6">
                                            <h6>{hotel.title}</h6>
                                            <div style={{fontWeight: '300', fontSize: '14px'}}>
                                                <span style={{marginRight: '7px'}}> {hotel.guest} guests</span> 
                                                <span style={{marginRight: '7px'}}> {hotel.bedrooms} bedrooms</span> 
                                                <span style={{marginRight: '7px'}}> {hotel.bed} beds</span> 
                                                <span style={{marginRight: '7px'}}> {hotel.bath} baths</span> 
                                            </div>
                                            <p>wif air conditioning kitchen</p>
                                            <p>cancellation flexibility available</p>
                                            <div>
                                                <span><FaStar  style={{marginRight: '7px', marginTop: '-6px'}}/> {hotel.rating}</span>
                                                <span style={{marginLeft: '80px'}}>${hotel.price}/night</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
           }
        </div>
    );
};

export default Hotel;