const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Mannaaaaaa"},
    {id: 41, name: "Moyouri"},
    {id: 71, name: "Deep Jol"},
];
//  const names = students.map(s => s.name);
//  console.log(names);
 const bigger = students.filter(s => s.id > 35);
//  const id = students.map(s => s.id);
 console.log(bigger);

 const biggerOne = students.find(s => s.id > 35);
 console.log(biggerOne);