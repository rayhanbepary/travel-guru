import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({data}) => {
    return (
        <div className="home">
            <div className="container"> 
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8 home-image">
                        {
                            data.map(item => 
                                <div>
                                    <img src={item.image} style={{width:'200px',height:'auto',margin: '20px'}}/>
                                    <h4 style={{textAlign:'center',marginTop: '-90px',marginBottom: '100px',color: 'white',textTransform: 'uppercase'}}>{item.name}</h4>
                                    <Link to={`/destination/${item.slug}`}>
                                        <button className="btn btn-warning" style={{padding: '10px',width: '150px',marginLeft: '45px'}}>Booking</button>
                                    </Link>
                                    
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Home;