///<reference path='./itmview.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewBreadCrumb extends ItmView  {

   protected name:string;
   protected active:boolean;
   /** construct an ItmView from an ItmObject   
    * @param itmObject - from which itmObject
    * @param selectedInstance - from which instance
    */
   constructor (name:string) {
      super();
      this.name=name;
      this.active=true;
      this.drawID=false;
   }

   /* <li class="breadcrumb-item"><a href="#">Home</a></li>
   <li class="breadcrumb-item"><a href="#">Library</a></li>
   <li class="breadcrumb-item active" aria-current="page">Data</li>
   */
  protected drawBody():string {
   let s:string='';
   s+=`<li class="breadcrumb-item"><a href="#">{0}</a></li>
   `.format(this.name);
   return s;
}
}


   
