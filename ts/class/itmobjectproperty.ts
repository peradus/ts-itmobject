class ItmObjectProperty {

   private _name:string;
   private _value:string;
   private _validator:string;

   constructor(name:string)
   {
      this._name=name;
      this._value="";
      this._validator="";
   }

   public save():object {
      return {
         "name":{
            "value":this._value,
            "validator":this._validator
         }
      }
   }

   public load(o:object) {
   }

   public validate(value:string):boolean {
      if (this._validator !== "") { // if regexpr match set
         if (value.search(this._validator) !== -1 ) { // does match
            return true;
         }
         else {
            return false;
         }
      }
      else { // no regexpr match set, accept value
         return true;
      }
   }

   /**
    * Set Property value, if regexpr match set- value will be checked and only set if match
    * @param value 
    * returns true/false upon succesful set
    */
   public setValue(value:string):ItmObjectProperty {
      if (this.validate(value)) {
         this._value=value; // set value
      }         
      return this;
   }

   public getValue(value:string):string {
      return this._value;
   }  

   public setValidator(value:string):ItmObjectProperty {
      this._validator=value;
      return this;
   }

   public name():string {
      return this._name;
   }
}