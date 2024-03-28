// lower Case
let personName: string ="Usama"
console.log("lowercase:", personName.toLowerCase());

// Upper Case
console.log("uppercase:", personName.toLocaleUpperCase());

// TItle Case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));