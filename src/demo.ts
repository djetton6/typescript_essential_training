interface Contact extends Address {
    id: number;
    name: string;
    birthDate: Date;
    status: ContactStatus;
    //you can type out functions on the interface.
    // clone(): Contact 
}


interface Address {
    line1: string
    line2: string
}



enum ContactStatus {
    Active = 'active',
    Offline = "offline",

}
// Interface is used for typechecking(only used at compile time)

let primaryContact: Contact = {
    birthDate: new Date("01-01-1939"),
    id: 12345,
    name: "Testing 123",
    line1: "Cherry Tree",
    line2: "Chicago, IL",
    status: ContactStatus.Offline,
}

type ContactName = string


///adding a type in the function for source.

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

const a: Contact = {
    id: 123, name: "Sample Tyrone",
    birthDate: undefined,
    status: ContactStatus.Active,
    line1: "",
    line2: "",
};
const b = clone(a)

//Generics from method type
