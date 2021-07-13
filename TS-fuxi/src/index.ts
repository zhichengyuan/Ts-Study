enum Gender {
    male = '男',
    female = '女1'
}



let gender:Gender

gender = Gender.male;
gender = Gender.female


enum Level {
    level1,
    level2,
    level3
}

// console.log(gender);

function printGenders() {
    const vals = Object.values(Gender);
    vals.forEach(v => console.log(v))
}

printGenders();