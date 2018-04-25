class ItmObjectPropertyData {
   private _name:string;
   private _validator:string;
   private _value:string;

   constructor(name:string, value:string, validator:string='')
   {
      this._name=name;
      this._validator=validator;
      this._value='';
      // set using validator
      this.value=value;      
   }

   get name():string 
   {
      return this._name;
   }
   set name(aname:string)
   {
      this._name=aname;
   }

   get value():string 
   {
      return this._value;
   }
   set value(avalue:string)
   {
      if (this.validate(avalue)) this._value=avalue;
   }

   get validator():string 
   {
      return this._validator;
   }

   set validator(avalidator:string)
   {
      this._validator=avalidator;
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
}