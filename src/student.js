class Student {
  constructor(name, skillLevel){
        this.name = name
        this.skillLevel = skillLevel 
        this.assignments = []
  }
  //checkpoint class construction, class methods, objects and classes
  study(){
      if(this.skillLevel < 100){ 
            this.skillLevel++;
            return this;
      }  
  }
  doHomework(homework){
        //  If/else for arguments.length == 0, if/else for skill level check, and a if/else for push to the assignments
        // The second two if/else are inside the else of the first if/else
        if (arguments.length == 0){
            this.assignments.forEach(homework => this.doHomework(homework)); 
            // this.doHomework(); 
            // console.log(this.assignments);
        } else {
            if(this.skillLevel >= homework.skillLevel){ 
                homework.completed = true;
            } else {
                homework.completed = false;
            }
            if(homework.skillLevel >= 1 && homework.skillLevel <= 100){
                this.assignments.push(homework);
            } else {
                this.doHomework();    
            }
        }
      }
    }    

const student = new Student();

module.exports = Student
