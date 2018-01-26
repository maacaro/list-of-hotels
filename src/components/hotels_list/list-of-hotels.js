import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import HotelFeatures from './hotel-features';
import Price from './price'
import PropTypes from 'prop-types';

const ListOfHotels = ({data})=>
    <Grid fluid>
        {data.map(hotel =>
            <Row key={hotel.id} className="container-rows" >
                <Col xs={12} lg={4}>
                    <img src={require(`../../assets/images/hotels/${hotel.image}`)} height='225' width='300' alt={hotel.name}/>
                </Col>
                <Col xs={12} lg={5}>
                    <HotelFeatures name={hotel.name} stars={hotel.stars} amenities={hotel.amenities}  />
                </Col>
                <Col xs={12} lg={3}>
                    <Price price={30}/>
                </Col>
            </Row>
        )}
    </Grid>

export default ListOfHotels;

ListOfHotels.propTypes = {
    data: PropTypes.array.isRequired
};