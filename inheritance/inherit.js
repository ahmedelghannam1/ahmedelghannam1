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
function GoodWords(){
 

}
GoodWords.prototype.filterme= function  (strorg,filt) {
        var strarry=strorg.split(" ");
        var temp= strarry. filter((curr)=> (!filt.includes(curr)) ). reduce((accum,curr)=>accum.concat(curr," "),"");
        return temp;
        
   
    };
const srcstr= new GoodWords();
 
    

var str="I don't like Maharishi, University is not giving me chance to enjoy life.";
var bannedstr=["don't", "not"];


console.log( srcstr.filterme(str,bannedstr));



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

function BubbleSort(arr){
    
    return{bubleSort:
    function (){
        for (let i=0;i<arr.length;i++)
            for (let j=i+1;j<arr.length;j++)
           if(i<arr.length-1) 
            if(arr[i]>arr[j])
            {
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
    return arr;
    }};
}
var bs= new BubbleSort([4,3,5,1,-2,1]);
console.log(bs.bubleSort());