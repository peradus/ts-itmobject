///<reference path='./itmview.ts'/>
///<reference path='./itmviewitmobjectselector.ts'/>
///<reference path='./itmviewtestautorefresh.ts'/>

// https://stackoverflow.com/questions/14742194/declaring-an-htmlelement-typescript

class ItmViewMain extends ItmView  {
   protected _itmObjectSelector:ItmViewItmObjectSelector;
   protected _clock:ItmViewTestAutoRefresh;

   /** construct main Itmclient ItmView    
    */
   constructor ()  {
      super("main");
      this._itmObjectSelector=new ItmViewItmObjectSelector();
      this._clock= new ItmViewTestAutoRefresh();


      this.addView(this._itmObjectSelector);
      this.addView(this._clock);
   }

   get itmObjectSelector():ItmViewItmObjectSelector {
      return this._itmObjectSelector;
   }
}


   
