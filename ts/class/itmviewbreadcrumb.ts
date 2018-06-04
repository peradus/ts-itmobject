///<reference path='./itmview.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewBreadCrumb extends ItmView  {

   protected _name:string;
   protected _active:boolean;
   
   /**
    * Get name for this breadcrumb
    */
   get name():string {
      return this._name;
   }

   /**
    * Set name for this breadcrumb
    * @param newname:string - new name for breadcrumb
    */
   set name(newname:string) {
      this._name=newname;
   }
   
   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor ()  {
      super();
      this._name="breadcrumb";
      this._active=true;
      this.drawID=false;
   }

   /* <li class="breadcrumb-item"><a href="#">Home</a></li>
   <li class="breadcrumb-item"><a href="#">Library</a></li>
   <li class="breadcrumb-item active" aria-current="page">Data</li>
   */
  protected drawBody():string {
   let s:string='';
   s+=`<li class="breadcrumb-item"><a href="#">{0}</a></li>
   `.format(this._name);
   return s;
}
}


   
