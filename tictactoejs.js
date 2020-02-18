var count = 0;
var ids = ["_00", "_01", "_02","_10", "_11", "_12","_20", "_21", "_22",];
var idval = [];
var flag=0;
        
console.log("hello wolrd");


    function reset(){

        idval.length = 0;

        for(var i=0; i<ids.length;i += 1){

            document.getElementById(ids[i]).style.color = "white";
            document.getElementById(ids[i]).style.background = "black";
            var btn = document.getElementById(ids[i]);
            btn.innerHTML = ".";
            btn.value = 0;
            flag=0;
            count=0;
            



        }

    }
  



    function check(btnid){

        

        for( var i=0; i< ids.length; i++)
            if(btnid==ids[i])
                break;


        if(count%2==0)    
            idval[i]="x";
        else
            idval[i]="o";


        console.log(idval);

        if( idval[0]=="o" && idval[1]=="o" && idval[2]=="o" || 
            idval[3]=="o" && idval[4]=="o" && idval[5]=="o" ||
            idval[6]=="o" && idval[7]=="o" && idval[8]=="o" ||
            idval[0]=="o" && idval[3]=="o" && idval[6]=="o" || 
            idval[1]=="o" && idval[4]=="o" && idval[7]=="o" || 
            idval[2]=="o" && idval[5]=="o" && idval[8]=="o" || 
            idval[0]=="o" && idval[4]=="o" && idval[8]=="o" ||
            idval[6]=="o" && idval[4]=="o" && idval[2]=="o"){
            console.log("1"); alert("o won"); flag=1; return 1;
        }

        if( idval[0]=="x" && idval[1]=="x" && idval[2]=="x" || 
            idval[3]=="x" && idval[4]=="x" && idval[5]=="x" ||
            idval[6]=="x" && idval[7]=="x" && idval[8]=="x" ||
            idval[0]=="x" && idval[3]=="x" && idval[6]=="x" || 
            idval[1]=="x" && idval[4]=="x" && idval[7]=="x" || 
            idval[2]=="x" && idval[5]=="x" && idval[8]=="x" || 
            idval[0]=="x" && idval[4]=="x" && idval[8]=="x" ||
            idval[6]=="x" && idval[4]=="x" && idval[2]=="x"){
            console.log("-1"); alert("x won"); return 1;
        }

        if(flag==0 && count==9){
           console.log("0"); alert("no one won"); return 1;
        }
            
      
    }






			

			function getid(valid){


			var btn = document.getElementById(valid);



			if(count%2==0){
			  if (btn.value == "0" ) {
                    btn.value = "1";
                    //btn.style.background= "lightyellow";
                    btn.innerHTML = "o";
                    count = count + 1;
                    document.getElementById(valid).style.color = "black";
                    document.getElementById(valid).style.background = "lightblue";
                }
            }
            else{
            	if (btn.value == "0" ) {
                    btn.value = "1";
                    //btn.style.background= "lightgreen";
                    btn.innerHTML = "x";
                    count = count + 1;
                    document.getElementById(valid).style.color = "black";
                    document.getElementById(valid).style.background = "pink";
                }
            }

            if(check(valid)){
                console.log("someonefuckingwon");
                reset();
            }

                

            
            valid=0;

	}





           