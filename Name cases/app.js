// lower Case
var personName = "Usama";
console.log("lowercase:", personName.toLowerCase());
// Upper Case
console.log("uppercase:", personName.toLocaleUpperCase());
// TItle Case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
