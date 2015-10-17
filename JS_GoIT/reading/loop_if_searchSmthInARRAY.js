
var text = 'Some text with mt name Nadia and string Nadia';
var myName = 'Nadia';
var hits = [];

for (var i = 0; i < text.length; i++){
    if(text[i] === 'N'){
        for(var j = i; j < (myName.length + i); j++){
            hits.push(text[j]);
        }
    }
}

if(hits.length === 0){
    console.log("Your name wasn't found!");
} else console.log(hits);/**
 * Created by nadia on 12.10.15.
 */
