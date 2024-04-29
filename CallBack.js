function A(callback){
    console.log("A started");
    console.log("A - timeout");
    callback();    
    console.log("A finished");
}

function B(callback){
    console.log("B started");
    setTimeout(()=>{
    	console.log("B - timeout");
    	callback();
    },1000)    
    console.log("B finished");
}

function C(){
    console.log("C started");
    setTimeout(()=>{
    	console.log("C - timeout");
    },1000)    
    console.log("C finished");
}

A(
	()=> { B(
				()=>{ C() }
			)
	 	 }
)
