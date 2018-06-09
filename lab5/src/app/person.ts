export class Person {
    id : number;
    firstName : string;
    lastName : string;
    dateOfBirth : Date;

    /*

    // D/N: Commented this out because we don't really need this
    
    // This method will return an accurate age based on the dateOfBirth
    getAge() : number {

        // New instance of a new Date object
        let today = new Date();

        // Subtract dateOfBirth year from the present year to get the age
        let age = today.getFullYear() - this.dateOfBirth.getFullYear();

        // If dateOfBirth month and date are greater than today's, deduct age by 1 to get accurate result 
        if (
            this.dateOfBirth.getDate() > today.getDate() 
            && 
            this.dateOfBirth.getMonth() > today.getMonth()
        ) {
            return age--;
        }

        return age;

    }
    */
}
