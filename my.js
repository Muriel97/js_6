function myReady (fn) {
	alert( 'aa' );

	if (document.addEventListerner) {
		document.addEventListerner( "DOMContentLoaded",fn,false );
	}else{
		IEContentLoaded( fn );
	}

	function IEContentLoaded( fn ){
		var isdone=false;

		function ainit(){
			if (!isdone) {
				isdone=true;
				fn();
			}
		}

		(function(){
			try{
				document.documentElement.doScroll("left");
			}catch(e){
				setTimeout( arguments.callee,10 );
				return;
			}
			ainit();
		})();
        
        //监听 
		document.onreadystatechange=function(){
			if (document.readyState=="complete") {
				ainit()
			}
		}
	}
}