//every object is an associative arrray
var h=new Object();
h['one']=1;
h['two']=2;
h['three']=3;

//display the values
console.log('length:',h.length); //undefined, duh:objects don't have length
/*console.log('items are:');
 for(var k in h){
     console.log()
 }
*/

//can find the number of keys though
var KEYS= Object.keys(h).length;

console.log('no. of keys: ',KEYS);

//display the objects

for(var k in h){
    if(h.hasOwnProperty(k)){
        console.log('key is ', k , ', value is', h[k]);
    }
}

//create hashtable class

function HashTable(obj){
    
    this.length=0; //length 
    this.items={} //items 
    //anything added above must be an array!
    for(var p in obj){
        
        //edit-1
        if(obj.hasOwnProperty(p)){
            this.items[p]=obj[p]; //adding the properties and values
            this.length++;
        }
        
    
        /*
        edit-2
        if(obj.hasOwnProperty(p)){
             this.items=new Array();
             this.items.push(obj[p]);
         }
        */
        
    }
    
    this.setItem= function(key,value){
        var previous=undefined; //a new variable
        if(this.hasItem(key)){ //laready exist
            previous=this.items[key]; //just add it to the previous
        }
        else{
            this.length++; //adding a new key
        }
    this.items[key]=value; //add the value as well
        //or instead just add the push value
        //this.items[key].push(value);
        return previous;
        
    }
    
    this.removeItem=function(key,value){
        
        if(this.items(hasOwnProperty(key))){
            previous =this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else
            return undefined; //not found
        
    }
    this.getItem= function(key){
        /*
        if(this.hasOwnProperty(key)) return this.items[key] 
        else return undefined; */
        //better way
        return this.hasItem(key)? this.items[key]:undefined;
    }
    this.hasItem=function(key){
        return this.items.hasOwnProperty(key);
    }
    this.keys=function(){
        var key=[];
        for(var v in this.items){
            if(this.hasItem(v)){
                key.push(v);
            }
        }
        return key;
    }
    this.values=function(){
        var val=[];
        for(var v in this.items){
            if(this.hasItem(v)){
                val.push(this.items[v]);
            }
        }
    }
    
}

var obj={publisher:'subscriber1'};
var h2= new HashTable(obj);

//console.log(h2.hasItem('publisher'));

//h2.setItem('publisher2', 'c2');
//console.log(h2.hasItem('publisher2'));

/*
var temp=h2.keys();
for(var v in temp){
    
    console.log('v is : ',v);
    
}
*/

/*
h2.setItem('publisher3', 'c3');
h2.setItem('publisher', 'c3');
h2.setItem('publisher', 'c4');
h2.setItem('publisher4', 'c4');
h2.setItem('publisher2', 'c4');
*/

for( var i=0,key=h2.keys(),len=key.length;i<len;i++){
    console.log(key[i],'and the value is ',h2.getItem(key[i]));
}

