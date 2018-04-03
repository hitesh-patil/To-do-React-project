// console.log("inmported file");

export const isAdult = (x) =>{
if(x > 18){
	return true;
}
else{
	return false;
}
};

export const canDrink = (x) =>{
if(x > 21){
	return "you are eligible to drink";
}
else{
	return "you are not eligible to drink";
}
};


const isSenior = (age) => age>=65;
export default isSenior;
// export {isAdult}