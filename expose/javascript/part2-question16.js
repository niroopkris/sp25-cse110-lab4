let students = {
	name: 'Sarah',
	major: 'Computer Science',
	'Grad Year': '2022', 
	greeting: function() { console.log('Hello!'); },
	'Favorite Teacher': {
		name: 'Thomas Powell',
		course: 'CSE 110'
	},
	courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(students["Grad Year"]);
console.log(students.greeting());
console.log(students["Favorite Teacher"].name);
console.log(students.courseLoad[0]);