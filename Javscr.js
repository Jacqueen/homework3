const operation = function(num1, num2, num3) {
	const result = return (num1 * num2) / num3;
};
console.log(operation(4,5,2));



 
 const noArgument = function() {
 const myAge = 18;
 	return myAge;
 };
 
 
 
 
 const noreturn = function (number0, number1){
 	const add = number0 + number1;
 };
 
 
 
 
  const fullName = function (string1, string2) {
 	return string1 + ' ' + string2;
 };
 console.log(fullName('Ben', 'Woodward'));
 
 
 
 
 
 const longestName = function (str1,str2, str3) {
 	if(str1.length > str2.length && str1.length > str3.length) {
 		return str1;
 	}
 	else if (str2.length > str3.length && str2.length > str1.length) {
 		return str2;
 	}
 	return str3;
 };
 
 
 
 const compare = function (n1, n2) {
 	if(n1 > n2) {
 		return 1;
 	}
 	else if(n1 === n2) {
 		return 0;
 	}
 	else return -1;
 };
 
 
 
 
 const isTruthy = function (val1, val2, val3) {
 	return val1||val2||val3;
 };
 