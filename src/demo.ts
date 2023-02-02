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