class Person{
	constructor(name="Anonymous",age=0){
		this.name = name;
		this.age = age;
	}
	greetings(){
		return 	`Hi, I am ${this.name}`;
	}
	mydescription(){
		return `${this.name} is ${this.age} year(s) old`;
	}
}

class Traveler extends Person{
	constructor(name,age,homelocation){
		super(name,age);
		this.homelocation = homelocation;
	}

	greetings(){
		if(this.homelocation){
			return super.greetings()+`. I'am visiting from ${this.homelocation}`;
		}else{
			return super.greetings();
		}
	}
}


const val = new Person();

console.log(val.mydescription());

const stu = new Traveler("hitesh patil",24,"pune");

const me = new Traveler();


console.log(me.greetings());

console.log(stu.greetings());