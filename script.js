//var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
//for (var time of timeOfDay) {
//  console.log(`It is ${time}.`);
//}

//timeOfDay.forEach(function (time, index) {
//  console.log(`The ${time} element is at ${index}.`);
//});

//var employeeAges = [15, 36, 78, 25, 17, 42, 19, 18];
//var adultAge = employeeAges.filter(function (item) {
//  return item >= 18;
//});
//console.log(adultAge);

var lastNames = ["Khan", "Martino", "Martinez", "Li", "Martindale", "Bai"];
var martinName = lastNames.filter(function (item) {
  return item.includes("Martin");
});
console.log(martinName);
