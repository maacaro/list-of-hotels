const getHotels= async (hotelName,stars)=>{
    const url = 'http://localhost:3002/search'; 
    const response = await fetch(url+`?hotelName=${hotelName}&stars=${stars}`);
    const data = await response.json();
    if(response.status===200){
        return Promise.resolve(data);
    }

    return Promise.reject(`the server respond with status ${response.status}`);
}
export default getHotels;