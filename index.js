doc = `
Usage:
    dojo create_room <room_type> <room_name> ...
    dojo add_person <person_name> <FELLOW|STAFF> <accomodation>

`;
const {docopt} = require('docopt');
const Dojo = require('./Classes/allclasses');

let args = docopt(doc, {version:'0.0.1'});

let dojo = new Dojo();

if(args['create_room']){
    dojo.addRoom(args['<room_type>'], args['<room_name>']);
    console.log(dojo.rooms)
} else if (args['add_person']){
    dojo.addPerson(args['<FELLOW|STAFF>'],args['<person_name>'],args['<accomodation>'])
}