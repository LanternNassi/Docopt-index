//Dojo 
module.exports = class Dojo{
    rooms = [];
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

//Person
class Person{
    constructor(staff, fellow, accomodation){
        this.staff = staff;
        this.fellow = fellow;
        this.accomodation = N;
    }
}
//Staff
class Staff{
    constructor(office, livingspace){
        this.office = office;
        this.livingspace = livingspace;
    }
}