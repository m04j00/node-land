const members = ['mainj', 'joohoney', 'im'];

console.log(members[1]);

let i = 0;
while (i < members.length) {
    console.log('array loop -', members[i]);
    i += 1;
}

const roles = {
    'rapper': 'joohoney',
    'danser': 'SHOWNU',
    'singer': 'kihyun'
}

console.log(roles.rapper);
console.log(roles['singer']);

for (let name in roles) {
    console.log('object ->', name, ' value ->', roles[name]);
}