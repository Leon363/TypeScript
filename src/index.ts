// // let str: string;
// // str = "10";
// // function fun(op1: number,op2: number): number {
// //     return op1 * op2;
// // }

// // // str = "fun(2, 2)";
// // let a = fun(2,2);
// // a = 10;
// // let b = 10;
// // let d:number = b - +"10";

// // if(str) {
// //     console.log(str);
// // }
// // function fun1(s:string): boolean {
// //     return !!s;
// // }
// // // !! преобразование в логический тип boolean 

// // let vf: (n1: number, n2: number)=>number;
// // // определение типа value function (VF)

// // function fun4(op1: number, op2: number):string {
// //     return op1 + op2 + "";
// // }
// // // vf = fun4;
// // // console.log(vf(2,2))

// function sum(ar: number[]): number {
//     return ar.reduce((res, cur)=> res + cur)
// }

// // let ar: Array<number> = [1,2,3, 10];

// // ar.push(12);
// // console.log(sum(ar));
// let set = new Set<number>([1,1,1,2,2,3,3,3,10]);
// // console.log(set)
// // set.forEach(e =>console.log(e)); 
// const ar1 = Array.from(set);
// console.log(set.has(10));
// console.log(sum(ar1))

// const mapMonths = new Map < number, string> [
//     [1, "Januar"], [2, "february"], [3, "march"]
// ];
// mapMonths.set(4, "April");
// mapMonths.set(1, "Jan");
// console.log(mapMonths);
// console.log(mapMonths.get(5));
// console.log(mapMonths.has(5));
// const arEntries = Array.from(mapMonths);
// console.log(arEntries);
// const arKeys = Array.from(mapMonths.keys());
// arEntries.push([6, 'jjj']);
// arKeys.push(10);
// console.log(arKeys);
// const arValues = Array.from(mapMonths.values());
// console.log(arValues);
// arValues.push("10");
// function createPerson(id, name) {
//     return { id, name };
// }
// console.log(createPerson(123, "Vasil"), let, person, Person = { id: 100, name: "Moshe", age: 20, city: 'Lod' }, let, persons, Person[] = [], persons.push(person));
// function strLenght(str) {
//     return str.length;
// }
// strLength(persons[0].city);
// function getSortedOccurrenses(array) {
//     //todo
//     //футкция возвр сколько раз строка была в массиве
//     //результат отсортирован в порядке поступления (часто не часто)
//     return [];
// }

//--------------------------------

// let str:string;
// str = "10";
// function fun(op1: number, op2: number): number {
//     return op1 * op2;
// }
// let a = fun(2, 2);
// a = 10;
// let b = 10;
// let d = b - +"10";
// if(str) {
//     console.log(str);
// }
// function fun1(s:string): boolean {
//     return !!s;
// }
// let vf: (n1:number, n2: number)=>string;
// function fun4(op1: number, op2:number):string {
//  return op1 + op2 + "";
// }
// vf = fun4;
// console.log(vf(2, 2))
function sum(ar: number[]): number {
    return ar.reduce((res, cur)=>res + cur)
}
// let ar: Array<number> = [1 ,2 ,3, 10];
// ar.push(12);
// console.log(sum(ar));
//let set = new Set<number>([1,1,1,2,2,3,3]);
//console.log(set)
//set.forEach(e => console.log(e));

// set.add(10);
// const ar1 = Array.from(set);
// console.log(set.has(10));
// console.log(sum(ar1))
/*****************************************HW #32 */
function intersection(set1: Set<number>, set2: Set<number>): number[] {
    //TODO write function returning array of common numbers between two sets
    //that is the numbers existing in both sets
    let res = [];
	
	for (let el of set1) {
		if (inArray(el, set2)) {
			res.push(el);
		}
	}
	
	return res;



}
function inArray(elem, arr){
	return arr.indexOf(elem) !== -1;
}

// // let ar: Array<number> = [1 ,2 ,3, 10];
// let set1: Array<number> = [1,2,3,4];
// let set2: Array<number> = [2,3,8,9];

//     // console.log(intersection(set1, set2))




function sbtract(set1: Set<number>, set2: Set<number>): number[] {
    //TODO write function returning array of numbers from set1 that don't exist in the 
    //set2

    let res = [];
	
	for (let el of set1) {
		if (NoInArray(el, !set2)) {
			res.push(el);
		}
	}
	
	return res;

        
}

function NoInArray(elem, arr){
	return arr.indexOf(elem) == -1;
}
   

// type Occurrency = {
//     str: string;
//     count: number;
// }
// function getSortedOccurrences(array: string[]): Occurrency[] {
//     //TODO
//     //write function returning array of occurrences 
//     //each occurrency contains a string from the given array and how many times it occures in the array
//     // a result array should be sorted in the descending order of the occurrences and ascending order of the strings
//     //example: the given array is ['lmn', 'ab', 'a', 'cd', 'lmn', 'cd', 'lmn']
//     //result: [{str: 'lmn', count: 3}, {str: 'cd', count: 2}, {str: 'a', count:1}, {str: 'ab', count:1}]
//     //implementation notes: to use Map<string, number>
    


//     return [];
// }
// /**************************************************************************** */
// const mapMonths = new Map<number, string>([
//     [1, "Januar"], [2, "Februar"], [3,'March']
// ]);
// mapMonths.set(4, 'April');
// mapMonths.set(1, "Jan");
// // console.log(mapMonths);
// // console.log(mapMonths.get(5));
// console.log(mapMonths.has(5));
// const arEntries = Array.from(mapMonths); //array of entries
// console.log(arEntries);
// const arKeys = Array.from(mapMonths.keys()); //array of kyes
// arEntries.push([6, 'hhhh']);
// arKeys.push(10);
// console.log(arKeys);
// const arValues = Array.from(mapMonths.values());
// console.log(arValues);
// arValues.push("10");
// type Person = {
//     id:number,
//     name: string,
//     age?: number,
//     city?: string
// }
// function createPerson(id: number, name: string): Person {
//     return {id, name};
// }
// console.log(createPerson(123, "Vasya"))
// let person: Person = {id: 100, name: "Moshe", age: 20, city: 'Lod'}
// let persons: Person[] = []
// persons.push(person);
// function strLength(str:string): number {
//     return str.length;
// }
// console.log(strLength(person.city));






