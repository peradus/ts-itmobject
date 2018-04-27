   class ItmObjectProperty {
   private _name:string;
   private _value:string;
   private _validator:string;

   constructor(name:string, value:string, validator:string='') {
      this._name=name;
      this._value=value;
      this._validator=validator;
   }

   /**
    * get ITMObject property name
    * @return property name
    */
   get name():string {
      return this._name;
   }
   
   /**
    * set ITMObject property name
    * @param name - name of property
    */
   set name(name:string) {
      this._name=name;
   }

   /**
    * get ITMObject property value
    * @param name - value of property
    */
   get value():string {
      return this._value;
   }
   
   /**
    * set ITMObject property value, validate before setting
    * @param value - value of property
    */
   set value(value:string)   {
      if (this.validate(value)) this._value=value;
   }

   /**
    * get ITMObject property validator
    * @return validator - regular expression, if set value must match when set
    */
   get validator():string 
   {
      return this._validator;
   }

   /**
    * set ITMObject property validator
    * @param validator - regular expression, if set value must match when set
    */
   set validator(validator:string)
   {
      this._validator=validator;
   }

   /**
    * validate value
    * @return true/false - if valid value, that can be set
    */
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
    * get ITMObject property data
    * @return property data as JSONstring
    * {
            "validator":p.data()
         }
    */
   public data():{} {
      let validator=this.validator;
      let obj={
            "validator":validator
      }
      return obj;
   }

}