'use strict';

const { server } = require('../src/server'); // destructing assignment 
const supertest = require('supertest');
const request = supertest(server);
const { db } = require('../src/models/index');

// before any of the test create a connection
beforeAll(async () => {
  await db.sync();
});

// after all the tests are done
afterAll(async () => {
  await db.drop();
});

//==========POST==================
describe('Web server', () => {

//first way
   it('Should check the add food response it work Successfully', async () => {
        let param = '/food';
        let obj = {
            foodName: "pizza",
            foodType:'home food',

        }
        const response = await request.post(param,obj);
        expect(response.status).toBe(201);
        expect(typeof response.body).toEqual('object');
    });

//second way

 test('Should check the add clothes response it work Successfully', async () => {
             const response = await request.post('/clothes').send(
       {
                clothesName : "T-Shirt",
                clothesBrand:'zara',
            }
        )
        expect(response.status).toBe(201);
      
    });


//==========GET==================
test('Should check the food&clothes response it work Successfully', async () => {
      
        const response = await request.get('/food');
        const clothesRespons = await request.get('/clothes');
        expect(response.status).toBe(200);
        expect(clothesRespons.status).toBe(200)     
        
    });


//==========GET/1==================
test('check to get one record', async () => {
    const foodRespons = await request.get('/food/1');
    const clothesRespons = await request.get('/clothes/1');
    expect(foodRespons.status).toBe(200)
    expect(clothesRespons.status).toBe(200)        
});
//==========PUT/1==================

 test('Should check the update food response it work Successfully', async () => {
      
        const response = await request.put('/food/1').send(
            {
               foodName: "pizza",
               foodType:"fast food",

           });
        expect(response.status).toBe(201);
    });


    test('Should check the update clothes response it work Successfully', async () => {
        
        let status = 201;
        let param = '/clothes/1';
        let obj = {
            clothesName : "T-Shirt",
            clothesBrand:'shein',
        }
        const response = await request.put(param,obj);
        expect(response.status).toBe(status);
        expect(typeof response.body).toEqual('object');
    });

//==========Delet==================


it('Destroy a record using DELETE',async()=>{
    const response = await request.delete('/food/1');
    expect(response.status).toEqual(204);
  });


it('Destroy a record using DELETE',async()=>{
    const response = await request.delete('/clothes/1');
    expect(response.status).toEqual(204);
  });




});
