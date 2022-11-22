const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');

describe("Test the root path", ()=> {
    test("POST", ()=> {
        const response = request(app).post("http://localhost:8000/User/add").send(
            {
                "Name" : "Waqas",
                "Email" : "mwaqas@gm.c",
                "Age" : 12,
                "Contact" : 12344,
            }
        )
        expect(response.statusCode).toBe(200);
    })
    test("POST", ()=> {
        const response = request(app).post("http://localhost:8000/User/add").send(
            {
                "Name" : "Waqas",
                "Email" : "mwaqas@gm.c",
                "Age" : 12,
                "Contact" : 12344,
            }
        )
        expect(response.statusCode).toBe(200);
    })
    
    
    test("Delete", ()=> {
        const response = request(app).delete("http://localhost:8000/User/:id").send(
            {
                id:'637c8dd37a5c89613df9917c'
            }
        )
        expect(response.json).toBe('Exercise Deleted.');
    })
    

    

})