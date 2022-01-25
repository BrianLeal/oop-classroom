class Room {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.contents = [];
      }
    
    
    
      add(item){
        this.contents.push(item);
        return this;
      }
    
    
      has(target){
        return this.contents.includes(target);
      }
}
    
const room = new Room ();

module.exports = Room
