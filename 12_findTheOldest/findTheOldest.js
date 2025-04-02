
function getAge(birth_year, death_year){

    let age;
    if(death_year != 0){
        age = death_year - birth_year;
        return age;
    
    }else{
        const today = new Date();
        let current_year = today.getFullYear();
        age = current_year - birth_year;
        return age;
    }


}

const findTheOldest = function(people) {

    let oldest;
    let oldest_age = 0;



    for (let index = 0; index < people.length; index++) {
        let current_age;
        
    const isDead = people[index].yearOfDeath;
        let birth_year = people[index].yearOfBirth;
        let death_year;
        if (isDead){
            death_year = people[index].yearOfDeath;
        }else{
            death_year = 0;
        }
        

        current_age = getAge(birth_year,death_year);
        if (current_age > oldest_age){
            oldest_age = current_age;
            oldest = people[index];
        }
        
    }

    return oldest;


};

// Do not edit below this line
module.exports = findTheOldest;
