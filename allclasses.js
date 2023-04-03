//Dojo 
module.exports = class Dojo{
    
    constructor(){
        // this.room = {type, name}
        this.rooms = [];
        this.persons = [];
    }
    addRoom(type, names){
        names.forEach(name => {
            let room = type === 'office'? new Office(name): new Livingspace(name);
            this.rooms.push(room);
            console.log(`An office called ${name} has been successfully created`);
        })
        
    }

    generateRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    allocate(person , viable_rooms){
        //Determinig the threshold
        if (viable_rooms.length>0){
            let threshold_number = person.type === "Staff"? 6 : 4;
            let right_room = false
            let room_number = 0
            while (!right_room) {
                let number = this.generateRandomInteger(0,this.rooms.length)
                //checking the number of occupants in the room
                try {
                    if ((viable_rooms[number].persons).length<threshold_number){
                        viable_rooms[number].persons.push(person)
                        console.log(person.name + " assigned to " + viable_rooms[number].name + " of type " + viable_rooms[number].type)
                        person.room = viable_rooms[number].name
                        right_room = true
                    } 
                } catch (error) {
                    continue
                }
                
            }
        } else {
            console.log('No viable rooms to place the attached person')
        }
        
            
        
    }

    addPerson(type,name,accomodation){
        let person = new Person()
        //create a person
        person.create(type,name,accomodation)

        //find out whether the person is staff
        console.log(person.type , person.name , person.accomodation)
        if (person.type === 'Staff'){
            let viable_rooms = []
            for(let i=0; i<=(this.rooms.length-1); i++){
                if (this.rooms[i].type == 'office'){
                    viable_rooms.push(this.rooms[i])
                }
            }
            this.allocate(person , viable_rooms)
        } else {
            this.allocate(person , this.rooms)
        }

        this.persons.push(person)
        
    }
}

//Room
class Room{
    constructor(room){
        this.room = room;
        this.persons = []
    }
}
//Livingspace
class Livingspace extends Room{
    max = 4;
    people = 0;
    constructor(name){
        super({
            name: name,
        })
        this.type = 'livingsppace'
        this.name = name;
        this.people = this.people <4? this.people+=1 : this.people;
    }
}
//Office
class Office extends Room{
    max = 6;
    people = 0;
    constructor(name){
        super({
            name: name,
        })
        this.type = 'office'
        this.name = name;
        this.people = this.people <6? this.people+=1 : this.people;
    }
}

class Person{
    constructor(){
        this.type = 'Staff'
        this.name = ''
        this.accomodation = 'Y'
        this.room = false
    }
    create = (type,name,accomodation) => {
        if (type == 'Fellow'){
            this.type = 'Fellow'
        }
        if (accomodation == 'N'){
            this.accomodation = 'N'
        }
        this.name = name
        console.log(this.type.concat([' ' , this.name , ' created with accomodation ',this.accomodation]))
    }
}