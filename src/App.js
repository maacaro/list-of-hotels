import React, { Component } from 'react';
import Search from './components/search/search';
import Hotel from './components/hotels_list/hotel';
import getHotels from './Api-Services/hotelsApi';
import './App.css';

const HotelList = ({hotels})=> 
<div className = 'hotel-container'>
  {hotels.map(hotel =><Hotel key={hotel.id} name ={hotel.name} stars={hotel.stars} price={hotel.price} amenities={hotel.amenities} image={hotel.image}/> )}
</div>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels:[],
      nameSearch:'',
      starSearch:'ALL'
    }
  }

  componentWillMount = async ()=>{
    const hotels =  await getHotels(this.state.nameSearch, this.state.starSearch);
    this.setState(
      {
        hotels
      });
  }

  render() {
    return (
      <div className='container'>
        <Search/>
        <HotelList hotels={this.state.hotels}/>
      </div>
    );
  }
}

export default App;
