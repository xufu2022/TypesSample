let firstname="hello world";

let anyNumber: Number= Number.MAX_SAFE_INTEGER;

console.log(anyNumber);

// boolean vs Boolean

let isBool = new Boolean();


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return obj[key];
}

extractAndConvert({'name':'fhue'},"name");

type ContactName= string;
type ContactStatus="active" | "inactive" | "new"
type ContactBirthDate=Date | number | string;

interface Contact{
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?:ContactStatus;
}

type ContactFields = keyof Contact
const field: ContactFields="birthDate";

function GetValue<T>(source: T, propertyName: keyof T){
    return source[propertyName];
}

function GetValue2<T, U extends keyof T>(source: T, propertyName: U){
    return source[propertyName];
}

const myType={min:1, max: 200}

function save(source: typeof myType){}

type Awesome=Contact["id"];
//type Awesome2=Contact["address"]["postcode"];
interface ContactEvent{
    contactId: Contact["id"];
}

interface ContactDeletedEvent extends ContactEvent{}

interface ContactStatusdChangeEvent extends ContactEvent{
    oldStatus: Contact["status"],
    newStatus: Contact["status"]
}

interface ContactEvents{
    deleted: ContactDeletedEvent,
    statusChanged: ContactStatusdChangeEvent
}

function HandleEvent<T extends keyof ContactEvents>(eventName: T, handler: (event: ContactEvents[T])=>void){
   // return source[propertyName];
   if(eventName=="statusChanged"){
       handler({contactId:1, oldStatus:"active", newStatus:"inactive"});
   }
}

HandleEvent("statusChanged", evt=>evt);

let x: Record<string, string|number|boolean|Function>={name: "fie"}
x.number=1234;
x.active=true;
x.log=()=>console.log("jf");

type Query=string;
function searchContacts(contacts:Contact[], query:Record<keyof Contact, Query>){

}

type contactQuery=Record<keyof Contact, Query>
type PcontactQuery=Partial<Record<keyof Contact, Query>>

type OContactQuery=Omit<Partial<Record<keyof Contact, Query>>,"address"|"status">
type PiContactQuery=Partial<Pick<Record<keyof Contact, Query>,"name"|"status">>


