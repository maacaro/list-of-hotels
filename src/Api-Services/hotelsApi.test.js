import getHotels from './hotelsApi';

describe('getHotels',()=>{
    it('should fetch',async ()=>{
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, status:200, json: () => 'SOME_DATA' }));

            await getHotels();
        expect(fetch).toHaveBeenCalledTimes(1);
    });
    it('should fetch with the proper arguments',async ()=>{
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, status:200, json: () => 'SOME_DATA' }));

            await getHotels('HOTEL_NAME', 5);
        expect(fetch).toHaveBeenCalledWith("http://localhost:3002/search?hotelName=HOTEL_NAME&stars=5");
    });

    it('should respond some data',async ()=>{
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, status:200, json: () => 'SOME_DATA' }));
        
        const data = await getHotels('HOTEL_NAME', 5);
        
        expect(data).toEqual('SOME_DATA')
    });
    
    it('should reject the server response when status is NOT 200', async () => {
        global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, status:400, json: () => 'SOME_DATA' }));
       
        await expect(getHotels('HOTEL_NAME', 5)).rejects.toMatch('the server respond with status 400');
      });
});
