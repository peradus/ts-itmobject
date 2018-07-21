///<reference path='./itmobject.ts'/>
///<reference path='./itmhelperfunctions.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
class ItmView {
   protected _id:string="";
   protected _visible:boolean=false;
   protected _parentid:string="";
   protected _timerToken:number=0;
   protected _autoRefreshInterval:number=0;
      

   get element():HTMLDivElement {
      var el:HTMLDivElement;
      el=<HTMLDivElement>document.getElementById(this._id);
      if (!el) {
         console.log('element not exist, creating element');
         el=<HTMLDivElement>document.createElement('div');
         el.id=this._id;
         el.view=this;

         if (this._parentid==""){
            document.body.appendChild(el);
         }
      }
      console.log('element=');
      console.dir(el);
      return el;
   }

/** construct an ItmView   
    */
   constructor () {
      this._id=uniqueID();
      this._parentid="";
      this._timerToken=0;
      this._autoRefreshInterval=0;
      
      console.log('view {0} constructed'.format(this._id));
   }
  
   set autoRefreshMs(intervalMs:number) {
      this._autoRefreshInterval=intervalMs;
      if (intervalMs==0){
         clearTimeout(this._timerToken);
      }
      else {
         this._timerToken=setInterval(()=>this.refresh(),intervalMs);
      }
   }

   public refresh()
   {
      this.redraw();
   }

   public redraw()
   {
      this.element.innerHTML=this.draw();
   }

   public draw():string {
      var s:string="";
      s+="<b>Hello world!, the current time is {0}</b>".format(new Date().toLocaleString());
      return s;
   }
}


interface HTMLElement {
   view:ItmView;
}

