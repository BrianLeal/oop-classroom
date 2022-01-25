class Marker {
    constructor(size, color, remainingInk){
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;
    }
    
    write(string) {
        let ink="";
        for(let char of string){
          if(char!=' ' && this.remainingInk){
            this.remainingInk--;
            ink+=char;
          }else if(char===' '){
              ink+=char;
          }
  
        }
        if(!this.remainingInk){
          return ink;
        }
        return string;
      }
        // //should decrement 'remainingInk by num of chars written
        // let charsWritten = ''
        // for(var chars of string){
        //     let stringLength = string.length;
        //     console.log(this.remainingInk);
        //     // do NOT subtract ink for blank spaces
        //     if(chars === ' '){ //this if statement works
        //         stringLength--;
        //         // return stringLength;
        //         console.log(stringLength);
        //     }  if(this.remainingInk > string.length){
        //         console.log(`this is the string: ${string}`);
        //         charsWritten += string;
        //         console.log(`this is the charsWritten: ${charsWritten}`);
        //         //should decrement 'remainingInk' by num of chars written
        //         //console.log(stringLength);
        //         console.log(this.remainingInk -= stringLength); //thisworks
        //         //console.log(`this is the inkleft: ${inkLeft}`);
        //         return charsWritten;                
            // } //else {

            //}
    //     }
    // }
}
const marker = new Marker();

module.exports = Marker
