/* Алгоритмы
TASK 0
Проверьте 2 строки и определите изоморфные ли они.
Две строки являются изоморфными если все их символы
s, могут быть заменены t.
Все символы одной строки могут быть заменены такими же символами другой строки, независимо от
порядка символов.
Given two strings, determine if they are isomorphic.
Two strings are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character but a character may map to itself."
arguments ["egg", "add"] => expected true
arguments ["foo", "bar"] => expected false
arguments ["paper", "title"] => expected true
arguments ["ca", "ab"] => expected true
arguments ["aa", "bb"] => expected true
arguments ["aedor", "eiruw"] => expected true
*/

function solution(strA,strB){
	strA = strA.split('');
	strB = strB.split('');
	let strAKey = [];
	let strBKey = [];
	for( let i=0; i<strA.length; i++){
		let element = strA[i];
		let keyAIndex = strAKey.indexOf(element)
		if(keyAIndex != -1){
			if(strB[i] != strBKey[keyAIndex]){
				return false;
			}
		}else{
			strAKey.push(element);
			strBKey.push(strB[i]);
		}
	};
	return true;
}
console.log('solution("egg", "add")',solution("egg", "add"));
console.log('solution("foo", "bar")',solution("foo", "bar"));
console.log('solution("paper", "title")',solution("paper", "title"));
console.log('solution("ca", "ab")',solution("ca", "ab"));
console.log('solution("aa", "bb")',solution("aa", "bb"));
console.log('solution("aab", "xyz")',solution("aab", "xyz"));
console.log('solution("aedor", "eiruw")',solution("aedor", "eiruw"));
