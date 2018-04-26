   class ItmObjectProperty {
   private _name:string;
   private _value:string;
   private _validator:string;

   constructor(name:string, value:string, validator:string='') {
      this._name=name;
      this._value=value;
      this._validator=validator;
   }

   get name():string {
      return this._name;
   }
   set name(name:string) {
      this._name=name;
   }

   get value():string {
      return this._name;
   }
   
   set value(value:string)   {
      if (this.validate(value)) this._value=value;
   }

   get validator():string 
   {
      return this._validator;
   }

   set validator(validator:string)
   {
      this._validator=validator;
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

   public toString():string {
      let obj={
         "validator":this.validator
      }
      return this._name+JSON.stringify(obj);
   }

}