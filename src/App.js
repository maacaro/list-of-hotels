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
      starSearch:{
        1:true,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false
      }
    }
  }

  handleNameOnChange = async (nameSearch)=>{
    this.setState(
      {
        nameSearch,
        hotels: await getHotels(nameSearch, this.state.starSearch)
      });
  }

  handleStarsOnChange = async (starSearch)=>{
    const stars = {
      ...this.state.starSearch,
      [starSearch]:!this.state.starSearch[starSearch]
    };
    const starsQuery = Object.keys(stars).filter(index => stars[index]===true).join(",");
   
    this.setState(
      {
        starSearch: stars,
        hotels: await getHotels(this.state.nameSearch,starsQuery)
      });
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
        <Search starsOnChange={this.handleStarsOnChange} nameOnChange ={this.handleNameOnChange} />
        <HotelList hotels={this.state.hotels}/>
      </div>
    );
  }
}

export default App;
