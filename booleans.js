let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!1);

console.log("the truthful");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!!(isActive = true));

console.log("the fakes ones")
console.log(!!"");
console.log(!!0);
console.log(!!undefined);
console.log(!!null);
console.log(!!(isActive = false));

//finish... function OR

console.log(!!('' || 0 || "text"));

let nome = 'Marcos Vinicius';
console.log((nome || 'Unknown'));