
// shallo copy 


let original = { name: "John", address: { city: "Delhi" } };
let copy = { ...original };
console.log(copy);


copy.name = "Jane";           // ✅ Does NOT affect original
copy.address.city = "Mumbai"; // ❌ AFFECTS original (nested object)

console.log(original.name);         // "John"   ✅
console.log(original.address.city); // "Mumbai" ❌ Changed!
console.log(original.address);

//deep copyy
let original = { 
  name: "John", 
  address: { city: "Delhi" },
  hobbies: ["reading", "coding"]
};

let copy = structuredClone(original);

copy.address.city = "Mumbai";     // ✅ Does NOT affect original
copy.hobbies.push("gaming");      // ✅ Does NOT affect original

console.log(original.address.city); // "Delhi"  ✅
console.log(original.hobbies);      // ["reading", "coding"] ✅