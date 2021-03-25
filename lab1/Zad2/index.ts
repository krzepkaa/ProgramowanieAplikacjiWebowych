interface Person {
    name: string;
    surname: string;
    age: number;
    role: string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: Person) {
        console.log(` ${person.name} ${person.surname}, ${person.age}, ${person.role} `);
    }
    
    function filterPersons(persons: Person[], criteria: any): Person[] {
        const keys = Object.keys(criteria);
        return persons.filter((person) => keys.some((key) => person[key] == criteria[key]));
    }
    
    // TODO:
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    users.forEach(u=> logPerson(u));
    admins.forEach(a=> logPerson(a));

    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    const allMembers = [...users, ...admins];
    console.log(allMembers);

    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    
    console.log(allMembers.filter(m => m.age>25));

    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    const filtered = filterPersons(allMembers, { name: 'Adam' });
    console.log(filtered);