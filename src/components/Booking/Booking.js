import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = ({data}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    let {slug} = useParams();

    const destination = data.find(item => item.slug === slug);
    console.log(destination.name);

    return (
        
        <div className="booking">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 details" style={{marginTop: '150px'}}>
                        <h1 style={{textTransform: 'uppercase'}}>{destination.name}</h1>
                        <p>{destination.description}</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="booking-form">
                            <form action="#">
                                <div className="form-group">
                                    <label htmlFor="origin">Origin</label>
                                    <input type="text" id="origin" placeholder="Enter your origin"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="destination">Destination</label>
                                    <input type="text" id="destination" placeholder="Enter your destination"/>
                                </div>                              
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="fromDate">From</label>
                                            <DatePicker  
                                                selected={startDate}
                                                onChange={date => setStartDate(date)}
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                            <label className="endDate" htmlFor="toDate">To</label>
                                            <DatePicker                                               
                                                selected={endDate}
                                                onChange={date => setEndDate(date)}
                                                selectsEnd
                                                startDate={startDate}
                                                endDate={endDate}
                                                minDate={startDate}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <Link to="/hotel/">
                                    <input type="submit" value="Start Booking"/>
                                </Link>
                            </form>
                        </div>                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;