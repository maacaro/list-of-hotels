import React, { Component } from 'react';
import Search from './components/search/search';
import Hotel from './components/hotels_list/hotel';
import getHotels from './Api-Services/hotelsApi';
import ListOfHotels from './components/hotels_list/list-of-hotels';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels:[],
      nameSearch:'',
      starSearch:{
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        ALL:true
      }
    }
  }
  generateStarsQuery=(stars)=>{
    return Object.keys(stars).filter(index => stars[index]===true).join(",");
  }

  handleNameOnChange = async (nameSearch)=>{
    const starsQuery = this.generateStarsQuery(this.state.starSearch);

    this.setState(
      {
        nameSearch,
        hotels: await getHotels(nameSearch,starsQuery)
      });
  }

  handleStarsOnChange = async (starSearch)=>{
    const stars = {
      ...this.state.starSearch,
      [starSearch]:!this.state.starSearch[starSearch]
    };
    const starsQuery = this.generateStarsQuery(stars);
   
    this.setState(
      {
        starSearch: stars,
        hotels: await getHotels(this.state.nameSearch,starsQuery)
      });
  }

  componentWillMount = async ()=>{
    const starsQuery = this.generateStarsQuery(this.state.starSearch);
    const hotels =  await getHotels(this.state.nameSearch,starsQuery);
    this.setState(
      {
        hotels
      });
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} lg={3} className="container-main-coll">
            <Search starsOnChange={this.handleStarsOnChange} nameOnChange ={this.handleNameOnChange} />
          </Col>
          <Col xs={12} lg={9} className="container-main-coll">
            <ListOfHotels data={this.state.hotels}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
