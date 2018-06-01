///<reference path='./itmobject.ts'/>
///<reference path='./itmhelperfunctions.ts'/>
// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript
class ItmView  {
   protected _debug:boolean=false;
   protected _drawID:boolean=true;

   protected _id:string="";
   protected _parent:ItmView;
   protected _view:ItmView | undefined;

   protected _element:HTMLElement | undefined=undefined;
   protected _elementdiv:HTMLElement | undefined=undefined;
   
   protected _timerToken:number=0;

   protected _autoRefreshInterval=0;
      
   get debug():boolean    {
      return this._debug;
   }

   set debug(enable:boolean)    {
      this._debug=enable;
   }

   get drawID():boolean    {
      return this._drawID;
   }

   set drawID(enable:boolean)    {
      this._drawID=enable;
   }
   
   get id():string    {
      return this._id;
   }

   get parent():ItmView    {
      return this._parent;
   }

   set parent(p:ItmView)    {
      this._parent=p;
   }
   
   get view():ItmView | undefined   {
      return this._view;
   }

   set view(p:ItmView | undefined)    {
      this._view=p;
   }
   
   set autoRefreshMs(intervalMs:number) {
      this._autoRefreshInterval=intervalMs;
      if (intervalMs==0){
         clearTimeout(this._timerToken);
      }
      else {
         this._timerToken=setInterval(()=>this.autoRefresh(),intervalMs);
      }
   }

   /** construct an ItmView   
    */
   constructor (element:HTMLElement | undefined=undefined) {
      this._id=this.uniqueID();
      this._parent=this;
      this._view=undefined;

      if (element){
         this._element=element;
         this._elementdiv=document.createElement("div");
         this._elementdiv.innerHTML=this.draw();
         this._element.appendChild(this._elementdiv);
      }
   }
  
   /**
    * Generate Unique ID
    * @param addText - add additional text to unique id
    * @return uniqueID - like 'jgl9tsrq0.jttxkhan9s8'
    */
   protected uniqueID(addText:string='') {
      return Date.now().toString(36)+Math.random().toString(36);
   }

   /**
    * @param s - debugging string
    * @return - returns string is debugging enabled 
    */
   public drawDebug(s:string):string {
      let rs:string='';
      if (this.debug===true) {
         let ds:string;
         ds="[{0}]".format(s);
         rs+=ds;
      }
      return rs;
   }

   /**
    * draw begin of view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   protected drawBegin():string {
      let s:string='';
      if (this.drawID) {
         s+=`<span id="{0}">`.format(this.id);
      }  
      s+=this.drawDebug('drawBegin');
      return s;
   }

   /**
    * draw end of view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   protected drawEnd():string {
      let s:string='';
      s+=this.drawDebug('drawEnd');
      if (this.drawID) {
         s+=`</span>`;
      }
      return s;
   }

   /**
    * draw main body of view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   protected drawBody():string {
      let s:string='';
      s+=this.drawDebug('drawBody');
      
      if (this.view) {
         s+=this.view.draw();
         }
      return s;
   }
   /**
    * draw entire view
    * @param s - draw string stream
    * @return - returns begin string stream 
    */
   public draw():string {
      let s:string='';
      s+=this.drawBegin();
      s+=this.drawBody();
      s+=this.drawEnd();
      return s;
   }

   /**
    * rebuild view, after this redraw may happen
    * @return - true/false if redraw is needed
    */
   protected rebuild():boolean {
      // do nothing
      return true;
   }

   /**
    * redraw entire view, rebuild view before redrawing
    */
   protected redraw() {
      if (this.rebuild()) {
         let el:HTMLElement | null;
         el=document.getElementById(this.id);
         if (el) {
            el.outerHTML=this.draw();
         }
      }
   }

   protected autoRefresh() {
      this.redraw();
   }
}


   
