import AdminUser from "./models/AdminUser";
import ModeratorUser from "./models/ModeratorUser";
import Resource from "./models/Resource";
import StandardUser from "./models/StandardUser";

const user1 = new StandardUser("Bubbles", "Lahey");
const user2 = new ModeratorUser("Ricky", "Lahey");
const user3 = new AdminUser("Julian", "Lahey");

const res = new Resource();

console.log(user1.toString());
console.log(user2.toString());
console.log(user3.toString());

console.log("User 1:");
res.read(user1);
res.change(user1);
console.log("User 2:");
res.read(user2);
res.change(user2);
console.log("User 3:");
res.read(user3);
res.change(user3);
