type ContactName = string;

// create an alias
type ContactBirthDate =  Date | number | string;


type ContactStatus = "active" | "inactive" | "new"

// use pipes for multiple options
interface Contact {
    id : number;
    name: ContactName;
    birthDate?: ContactBirthDate
    status?: ContactStatus
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

//create a hybrid type to create a new type

type AddressContact = Contact & Address

function getBday(contact:Contact) {
    if(typeof contact.birthDate === 'number') {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
            return Date.parse(contact.birthDate)
        }
    else {
        return contact.birthDate
    }
}
//Aliases are a powerful alternative to ENUM values
let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type ContactFields = keyof Contact

//
const field: ContactFields = "birthDate"

// used to create less errors and limits the values of the second values.


// /use the Typeof Operator

function toContact(nameOrContact: string | Contact): Contact {
    if (typeof nameOrContact === "object") {
        return {
            id: nameOrContact.id,
            name: nameOrContact.name,
            status: nameOrContact.status
        }
    }
    else {
        return {
            id: 0,
            name: nameOrContact,
            status: "active"
        }
    }
}


//You can use the typeof for different variables.
const myType = {min: 1, max: 200}
function save(source: typeof myType) {}