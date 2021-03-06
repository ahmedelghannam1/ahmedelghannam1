/**
 * Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words.
Example:
console.log("This house is not nice!".filter('not'));
Output: "This house is nice!"
 * 
 */

    
String.prototype.filterme= function  (filt) {
        var strarry=this.split(" ");
        var temp= strarry. filter((curr)=> (!filt.includes(curr)) ). reduce((accum,curr)=>accum.concat(curr," "),"");
        return temp;
        
   
    };

    

var str="I don't like Maharishi international University , Miu is not giving me chance to enjoy life.";
var bannedstr=["don't", "not"];


console.log( str.filterme(bannedstr)+" with String class Updated");



/**
 * Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]
 * 
 * 
 * 
 * 
 */


    

    Array.prototype.bubleSort=
    function bubleSort(){
        for (let i=0;i<this.length;i++)
            for (let j=i+1;j<this.length;j++)
           if(i<this.length-1) 
            if(this[i]>this[j])
            {
                let temp=this[i];
                this[i]=this[j];
                this[j]=temp;
            }
    return this;
    };

console.log([4,3,5,1,-2,1].bubleSort()+" with updatting the Array class");



var Person = function() {};
Person.prototype.initialize = function(name, age)
{
this.name = name;
this.age = age;
}
Person.prototype.describe = function()
{
return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = new Person();
Teacher._proto_=Person.prototype;
Teacher.teach= function (str) {
return this.name+" is now teaching "+str;    
}
Teacher.initialize("Ahmed",40);
console.log(Teacher.teach("Math"));

/**
 * Create an object called Teacher derived from the Person class, and implement a method called teach
which receives a string called subject, and returns:
[teacher's name] is now teaching [subject]
 */
