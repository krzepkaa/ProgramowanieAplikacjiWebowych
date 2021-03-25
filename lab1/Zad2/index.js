var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(" " + person.name + " " + person.surname + ", " + person.age + ", " + person.role + " ");
}
function filterPersons(persons, criteria) {
    var keys = Object.keys(criteria);
    return persons.filter(function (person) { return keys.some(function (key) { return person[key] == criteria[key]; }); });
}
// TODO:
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
users.forEach(function (u) { return logPerson(u); });
admins.forEach(function (a) { return logPerson(a); });
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
var allMembers = __spreadArray(__spreadArray([], users), admins);
console.log(allMembers);
// 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
console.log(allMembers.filter(function (m) { return m.age > 25; }));
// 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
var filtered = filterPersons(allMembers, { name: 'Adam' });
console.log(filtered);
