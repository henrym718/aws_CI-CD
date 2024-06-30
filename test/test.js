import app from "../index.js"
import resquest from "supertest"

describe("verificar que funciona la api", function(){
    describe("SOlicitando ruta /",  function(){
        it("deberia responder con 200 y un json", function(done){
            resquest(app)
            .get("/")
            .expect("Content-Type", /json/)
            .expect(200, done)
        })
    })
})