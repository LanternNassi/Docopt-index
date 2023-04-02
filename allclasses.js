//Dojo 
module.exports = class Dojo{
    rooms = [];
    persons = [];
    constructor(type, name){
        this.room = {type, name}
    }
    addRoom(type, names){
        names.forEach(name => {
            let room = type === 'office'? new Office(name): new Livingspace(name);
            this.rooms.push(room);
            console.log(`An office called ${name} has been successfully created`);
        })
        
    }

    allocate(person , viable_rooms){
        //Determinig the threshold
        let threshold_number = person.type === "Staff"? 6 : 4;

        function generateRandomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        right_room = false
        room_number = 0
        while (!right_room) {
            let number = generateRandomInteger(0,(this.rooms).count-1)
            //checking the number of occupants in the room
            if ((viable_rooms[number].persons).count<threshold_number){
                viable_rooms[number].persons.push(person)
                console.log(person.name + " assigned to " + viable_rooms[number].name + " of type " + viable_rooms[number].type)
                person.room = viable_rooms[number].name
                right_room = true
            } 
        }
            
        
    }

    addPerson(type,name,accomodation){
        let person = new Person()
        //create a person
        person.create(type,name,accomodation)

        //find out whether the person is staff
        if (person.type === 'Staff'){
            let viable_rooms = []
            for(let i=0; i<=this.rooms.length; i++){
                if (this.rooms[i].type == 'Office'){
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
//Fellow
class Fellow{
    constructor(office, livingspace){
        this.office = office;
        this.livingspace = livingspace;
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
            type: 'livingsppace'
        })
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
            type: 'office'
        })
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
        if (this.type == 'Fellow'){
            this.type = 'Fellow'
        }
        if (this.accomodation == 'N'){
            this.accomodation = 'Y'
        }
        console.log(this.type.concat([' ' , this.name , ' created with accomodation ',this.accomodation]))
    }
}