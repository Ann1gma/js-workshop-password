/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 *
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */

let password;
// password = "password"; // inte giltigt
// password = "pa$sword"; // giltigt
// password = "p@ssw%rd"; // giltigt
 password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

console.log(`🕵🏻 Checking password '${password}'`);



// Skriv din kod här




/*let count = 0;


for (let i = 0; i < specialChars.length; i++) {
	if(password.includes(specialChars[i])){
		count++
	}
	console.log(count);
}*/

let count = 0;  

for (let i = 0; i < password.length; i++) {   
	const char = password[i];   
	if (specialChars.includes(char/*kan skriva password[i] istället*/)){     
		count++;   
	} 
}  

console.log("count", count);

/*
if (password.length >= 16) {
	console.log("Speak friend and enter");
} else if(password.length >= 12 && password.includes("-")) {
	console.log("Speak friend and enter");
} else if(password.length >= 8 && count >= 1) {
	console.log("Speak friend and enter");
} else if(password.length >= 6 && count >= 2) {
	console.log("Speak friend and enter");
} else {
	console.log("I find your lack of STRENGTH disturbing!");
}*/


if (
	(password.length >= 16) ||
	(password.length >= 12 && password.includes("-")) /*kan även skriva: index.Of("-") != -1*/ ||
	(password.length >= 8 && count >= 1) ||
	(password.length >= 6 && count >= 2) ) {
	console.log("Speak friend and enter"); } 
	
	else {
	console.log("I find your lack of STRENGTH disturbing!");
}





