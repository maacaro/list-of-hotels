import React,{Component} from 'react';

class NameSearch extends Component { 
    state = {
        hotelName:''
    }

    render(){
        return(<ul>
            <li>
                <img src={require(`../../assets/icons/filters/search.svg`)} height="14" width="14" />
                <label>Nombre del Hotel</label>
            </li>
            <li>
                <input type="text" name="fname" onChange={(e)=>this.setState({hotelName:e.currentTarget.value})}/>
                <button type="button" onClick={()=>this.props.onClick(this.state.hotelName)}>Aceptarl</button>
            </li>
        </ul>)
    }
}
export default NameSearch;