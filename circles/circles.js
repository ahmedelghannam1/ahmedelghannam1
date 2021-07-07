class Circle  {
    /**
     * Constructor for creating a new Account object
     * 
     * @param {id} id of of oject circle
     */
    constructor(id) {
        this._timer=null;
        this._id = id;
        this._elem=$(id);
    }

    /**
     * Accessor for the 'private' id field
     * 
     * @returns {id} id for this element
     */
     getElement() {
        return this._elem;
    }
     /**
     * Accessor for the 'private' id field
     * 
     * @returns {id} id for this element
     */
      getId() {
        return this._id;
    }
    /**
     * enlarge the circle by value of dela
     * 
     * @param {delta} is the delta increment on both width and height
     */
     enlargeCircle(delta) {
       
  
      /*  $("div").css("height", parseInt($("div").css("height")) +
        10 + "px");*/
        var id=this.getId() ;
        $("#" + id +"").css("height", function(idx, old) {
            return parseInt(old) + delta + "px";
           }); 
        $("#" + id +"").css("width", function(idx, old) {
            return parseInt(old) + delta + "px";
           }); 
    }
    removeElement(id){
        $("#"+id).hide();
        clearInterval(this._timer);
    }

}
cir =new Circle(1);
 cir._timer=null;
//enlargeCircle.bind(cir)
timer=setInterval(()=>{cir.enlargeCircle(10)},250);
cir.getElement().click(cir.hide);


