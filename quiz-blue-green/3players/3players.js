var player1 = 0; // these var stores the points of each player
var player2 = 0;
var player3 = 0;
var acertosP1 = 0; // stores partial score until you have got 4 correct answers
var acertosP2 = 0;
var acertosP3 = 0;
var whogoesnow = ""; //writes in the text are who is playing
var t = 0; // controls whose turn is it now
var name1 = ""; // names of the players
var name2 = "";
var name3 = "";
var count_down = 25; // var used to perform a countdown ....ps to sweep the buttons
var line = 5; // It is a 5 x 5 matrix....
var col = 5;

// if you change "line" and "col" you have to change btns, verb[][], Solution[][], empty[][], count_down 
function makeArray2(x, y) {
    var count;
    this.length = x;
    for (var count = 0; count <= (x - 1); count++)
    this[count] = makeArray(y);
}

function makeArray(numElementos) {
    var count;
    var arranjo = new Array(numElementos);
    for (count = 0; count <= (numElementos - 1); count++) {
        arranjo[count] = 0;
    }
    return (arranjo);

}

var verb = new makeArray2(line, col);
loadArrayVerb();

function loadArrayVerb() {
verb[0][0] = "hope";
verb[0][1] = "walk";
verb[0][2] = "laugh";
verb[0][3] = "kiss";
verb[0][4] = "like";
verb[1][0] = "want";
verb[1][1] = "panic";
verb[1][2] = "advise";
verb[1][3] = "remember";
verb[1][4] = "divide";
verb[2][0] = "touch";
verb[2][1] = "push"
verb[2][2] = "talk"
verb[2][3] = "add"
verb[2][4] = "hate"
verb[3][0] = "design"
verb[3][1] = "need"
verb[3][2] = "wash"
verb[3][3] = "divorce"
verb[3][4] = "mix"
verb[4][0] = "train"
verb[4][1] = "love"
verb[4][2] = "marry"
verb[4][3] = "work"
verb[4][4] = "stop"
}

var Solution = new makeArray2(line, col);
loadArraySolution();

function loadArraySolution() {
Solution[0][0] = "t"
Solution[0][1] = "t"
Solution[0][2] = "t"
Solution[0][3] = "t"
Solution[0][4] = "t"
Solution[1][0] = "id"
Solution[1][1] = "t"
Solution[1][2] = "d"
Solution[1][3] = "d"
Solution[1][4] = "id"
Solution[2][0] = "t"
Solution[2][1] = "t"
Solution[2][2] = "t"
Solution[2][3] = "id"
Solution[2][4] = "id"
Solution[3][0] = "d"
Solution[3][1] = "id"
Solution[3][2] = "t"
Solution[3][3] = "t"
Solution[3][4] = "t"
Solution[4][0] = "d"
Solution[4][1] = "d"
Solution[4][2] = "d"
Solution[4][3] = "t"
Solution[4][4] = "t"
}


function disableBtns(file)
{

                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
                            id = ('btn-' + x + y);
							var thebtn = document.getElementById(id);
                            thebtn.disabled=true;
                        }
                    }

}
function addClass(element, classToAdd) {
    var currentClassValue = element.className;
      
    if (currentClassValue.indexOf(classToAdd) == -1) {
        if ((currentClassValue == null) || (currentClassValue === "")) {
            element.className = classToAdd;
        } else {
            element.className += " " + classToAdd;
        }
    }
}
function removeClass(element, classToRemove) {
    var currentClassValue = element.className;
 
    if (currentClassValue == classToRemove) {
        element.className = "";
        return;
    }
 
    var classValues = currentClassValue.split(" ");
    var filteredList = [];
 
    for (var i = 0 ; i < classValues.length; i++) {
        if (classToRemove != classValues[i]) {
            filteredList.push(classValues[i]);
        }
    }
 
    element.className = filteredList.join(" ");
}
function checkColor(btn)
{
var nome = btn.className;
var nameColor = "grey";
    if ((nome.indexOf("green_button") >= 0)){
        nameColor = "green";
        }
    if ((nome.indexOf("blue_button") >= 0)){
        nameColor = "blue";
        }
    if ((nome.indexOf("red_button") >= 0)){
        nameColor = "red";
        }        

return(nameColor);    
}

function changeColor(obj, cc)
{
   var newColor = (cc + '_button');
   addClass(obj, newColor);
}
function isNotDead(thebtn) {

if ((thebtn.value !=="  X  ")&&(thebtn.value !=="  0  ")&&(thebtn.value !=="  |  ")&&(thebtn.value !== 'XXXX')&&(thebtn.value !== 'OOOO')&&(thebtn.value !== '||||')&&(thebtn.value !== '*****'))
           {
				return true;
			   }
            else{//notDead = false;
			   return false;
			   }

}
function isDead(thebtn) {
if ((thebtn.value == "  X  ")||(thebtn.value == "  0  ")||(thebtn.value == "  |  ")||(thebtn.value == 'XXXX')||(thebtn.value == 'OOOO')||(thebtn.value == '||||')||(thebtn.value == '*****'))
           {
			return true;			   
			}
            else{//dead = false;
    			return false;			   
			   }

}
function checkIfThereAreNeighbors(i,j)
{
var thereAre = false;
    if ((i + 1) < line) {  // 6 o'clock
	ii=i+1;
        id = ('btn-' + ii + j);
        var thebtn_s = document.getElementById(id);
        if (isNotDead(thebtn_s))
           {
           thereAre = true;
           //return(thereAre);
           }
    }
    if ((i - 1) >= 0) {
	ii=i-1;
        id = ('btn-' + ii + j);
        var thebtn_n = document.getElementById(id);
        if (isNotDead(thebtn_n))
           {
           thereAre = true;
           //return(thereAre);
           }
    }
    if ((j + 1) < col) {
	jj=j+1;
        id = ('btn-' + i + jj);
        var thebtn_e = document.getElementById(id);
        if (isNotDead(thebtn_e))
           {
           thereAre = true;
           //return(thereAre);
           }
    }
    if ((j - 1) >= 0) {
	jj=j-1;
        id = ('btn-' + i + jj);
        var thebtn_w = document.getElementById(id);
        if (isNotDead(thebtn_w))
           {
           thereAre = true;
           //return(thereAre);
           }
    }
return(thereAre);
    
}



function highLight(i,j,c) 
{

    var newColor = (c + '_button');
    if ((i + 1) < line) {  // 6 o'clock
	ii=i+1;
        id = ('btn-' + ii + j);
        var thebtn_s = document.getElementById(id);
        var obj_color = checkColor(thebtn_s);
          if (isNotDead(thebtn_s))
           {
    			if (obj_color !== c){changeColor(thebtn_s,c);}
			   }
            else{
					 if (isDead(thebtn_s))                
                {
                thebtn_s.disabled=true;
                }
    }
 }
    if ((i - 1) >= 0) {
	ii=i-1;
        id = ('btn-' + ii + j);
        var thebtn_n = document.getElementById(id);
        var obj_color = checkColor(thebtn_n);
          if (isNotDead(thebtn_n))
           {
    			if (obj_color !== c){changeColor(thebtn_n,c);}
			   }
            else{
					 if (isDead(thebtn_n))                
                {
                thebtn_n.disabled=true;
                }
    }
 }
    if ((j + 1) < col) {
	jj=j+1;
        id = ('btn-' + i + jj);
        var thebtn_e = document.getElementById(id);
        var obj_color = checkColor(thebtn_e);
          if (isNotDead(thebtn_e))
           {
    			if (obj_color !== c){changeColor(thebtn_e,c);}
			   }
            else{
					 if (isDead(thebtn_e))                
                {
                thebtn_e.disabled=true;
                }
    }
 }
    if ((j - 1) >= 0) {
	jj=j-1;
        id = ('btn-' + i + jj);
        var thebtn_w = document.getElementById(id);
        var obj_color = checkColor(thebtn_w);
          if (isNotDead(thebtn_w))
           {
    			if (obj_color !== c){changeColor(thebtn_w,c);}
			   }
            else{
					 if (isDead(thebtn_w))                
                {
                thebtn_w.disabled=true;
                }
    }
 }
    
    
}

function turnonNeighbors()
{
var c = 'grey';

    if (t == 1)
             {label_btn = "  X  " ;c = 'green';}
             else{
                 if (t==0) 
                     {label_btn = "  0  ";c = 'blue';}                    
                     else {label_btn = "  |  ";c = 'red';}
                 }
                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
									                             
                            id = ('btn-' + x + y);
					        var thebtn = document.getElementById(id);
                            if (thebtn.value == label_btn)
                               {
                               highLight(x,y,c);
                               }

                            } // for y
                    } //for x
enableAdjacent(c);
}



function initialize_array(_array, i, j) {
    for (x = 0; x < i; x++) {
        for (y = 0; y < j; y++) {
            _array[x][y] = -1;
        }
    }

}

function reset_vars(p) {
    if (p == 1) 
       {
        acertosP1 = 0;
       } else {
    	     if (p == 2)
    	        {
              acertosP2 = 0;
                }
              else {
                   acertosP3 = 0;
                   }
    }

}



function updateScore(file, p1, p2) {
    if (p1 == 1) {
        player1++;
    } else {
    	      if (p1 == 0)
    	         {
                player2++;
               }
               else{
                   player3++;
                   }
    }
    file.player1.value = ':' + player1;
    file.player2.value = ':' + player2;
    file.player3.value = ':' + player3;
}


function is_Blocked(cor) 
{
  var noWayOut = false;
    switch(cor) 
              {
              case "green":
              tag = "  X  ";
              break;
              case "blue":
              tag = "  0  ";
              break;
              case "red":
              tag = "  |  ";
              break;
              default:
              tag = "";
              }

                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
                            id = ('btn-' + x + y);
							var thebtn = document.getElementById(id);
                            var nome = thebtn.className;
                            var n_class = (cor + '_button');
                            //alert ('checking ' + thebtn.id + ' class= '+ nome + 'checking cor= '+ n_class);
                            if ((nome.indexOf(n_class) >= 0)&&(thebtn.value == tag))
                               {
                               	//alert ('checkin btn com tag = ' + thebtn.value);
                               	hasNeighbors = checkIfThereAreNeighbors(x,y); 
                               	if (hasNeighbors==true)
                               	   {
                               	   	//alert ('tem neighbours');
                               	   	noWayOut = false;
                               	    //alert ('leaving the function isBlocked -> noWayOut = '+ noWayOut + ' / ' + thebtn.id);
                               	    return(noWayOut);
                               	   }
                               	   else {
                               	   	    noWayOut = true;
                               	        }
                               }

                            } // for y
                    } //for x

//alert ('testando se o laco completou '+ noWayOut + ' / ' + thebtn.id);
return(noWayOut);
}

function mark_blocked(color) {

    if (color == 'green') {
        key = "  X  ";
        idNum = 1;
    } else 
          {
          	if (color == 'blue')
          	{
          	key = "  0  ";
          	idNum = 2;
          	}
          	else {
          		key = "  |  ";
                idNum = 3; 
                 }
        
    }
    var numAcertos = eval("acertosP" + idNum);
    for (x = 0; x < line; x++) {

        for (y = 0; y < col; y++) {
            id = ('btn-' + x + y);
			var thebtn = document.getElementById(id);
            
            if (thebtn.value == key) 
               {
                thebtn.value = "*****";
                thebtn.disabled = true;                
                numAcertos = 0;
                }


        }
    }

}

function turnchange() 
{
	file = document.tictac;
    if ( t == 1) {
        t = 2;
        nameplayernow = name3;
        acertosP = acertosP3;
        // computerPlay();
    } else {  
           if (t==0)
				  {			        
		        t = 1;
              nameplayernow = name1;
              acertosP = acertosP1;
                  }
                  else {
              	       t = 0;
                       nameplayernow = name2;
                       acertosP = acertosP2;
              	       }
    }
    file.text.value = nameplayernow + ' IS PLAYING NOW \n';    
    sweepGrid();
    file.text.value += acertosP + ' acertosP of this player \n';
    if (acertosP > 0) {turnonNeighbors();}
    
        
    return (t);
}


function gameOver(file) {
    if (player1 > player2) {
        document.tictac.text.value = (" Game Over !" + name1 + " is the winner");
        return;
    }
    if (player1 < player2) {
        document.tictac.text.value = (" Game Over !" + name2 + " is the winner");
        return;
    }
    document.tictac.text.value = (" This is the end! No winner");

}

function changeAll(file) {
    rdn = Math.random();
    name1_temp = prompt("Please write the 1a player's name ", "player 1");
    name2_temp = prompt("Please write the 2 player's name ", "player 2");
    name3_temp = prompt("Please write the third player's name ", "player 3");

    for (i = 0; i < line; i++) {
        for (j = 0; j < col; j++) {
            id = ('btn-' + i + j);
			var thebtn = document.getElementById(id);
            thebtn.value=verb[i][j];
            thebtn.disabled = false;
        }
    }
    if (rdn <= .3) {
        name1 = name1_temp;
        name2 = name2_temp;
        name3 = name3_temp;
        file.text.value = name1 + ' IS PLAYING NOW \n';
        file.player1_name.value = name1;
        file.player2_name.value = name2;
        file.player3_name.value = name3;
        t=1;
    } else { 
           if ((rdn > .3 ) && (rdn<= .7))
              {           
              name1 = name1_temp;
              name2 = name2_temp;
              name3 = name3_temp;              
              file.text.value = name2 + ' IS PLAYING NOW \n';
              file.player1_name.value = name1;
              file.player2_name.value = name2;
              file.player3_name.value = name3;
              t=0;
              }
              else {
                   name1 = name1_temp;
                   name2 = name2_temp;
                   name3 = name3_temp;
                   file.text.value = name3 + ' IS PLAYING NOW \n';
                   file.player1_name.value = name1;
                   file.player2_name.value = name2;
                   file.player3_name.value = name3;
                   t=2;
                   }
    }
    file.player1.value = ':' + player1;
    file.player2.value = ':' + player2;
    file.player3.value = ':' + player3;

}




function enableAdjacent(cor)
{
//var thereIsFreeAdj=false;
                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
                            id = ('btn-' + x + y);
							var thebtn = document.getElementById(id);
                            var nome = thebtn.className;
                            var n_class = (cor + '_button');
                            if (isDead(thebtn)) 
                               {
                               								       
								       thebtn.disabled=true; 
                                }else{
													//alert('thebtn '+thebtn.value + ' is not dead');                                      
                                      if ((nome.indexOf(n_class) >= 0))
                                         {
                                         thebtn.disabled=false;
										// thereIsFreeAdj=true;	                                         
                                         }
                                         else {
                                              thebtn.disabled=true;
                                              }	                               
                                     }

                            } // for y
                    } //for x
//return(thereIsFreeAdj);
}

function sweepGrid() 
{
// this function "turns off" all the neighbours for both players 

                    for (x = 0; x < line; x++) 
                     {
                        for (y = 0; y < col; y++) 
                          {
                            id = ('btn-' + x + y);
							var thebtn = document.getElementById(id);
                            var nome = thebtn.className;
                            if (isDead(thebtn)) 
                               {
								thebtn.disabled = true;								       
								}else{									       
								      thebtn.disabled = false; 
                                     //alert (thebtn.id + 'abilitado');
                                     if ((nome.indexOf('green_button') >= 0))
                                                      {
                                                      removeClass(thebtn,'green_button');
                                                      }
                                     if ((nome.indexOf('blue_button') >= 0))
                                                      {
                                                      removeClass(thebtn,'blue_button');
                                                      }
                                     if ((nome.indexOf('red_button') >= 0))
                                                      {
                                                      removeClass(thebtn,'red_button');
                                                      }                     
                                     }

                            }//for
                     }//for
}
function computeAnswer(obj,i,j,k,resp) 
{
var acertosNext = 0;
var acertosLast = 0;
var next = 0;
var last = 0;
/* if resp is correct ->
   compute points ....update acertosP1 or acertosP2
   change label ....label = X or 0
   change color .....addClass -> green or blue button
   highLight ......highLight only the adjacent button
   else 
   	the answer is incorrect .......
   	change turn ........
*/ 
file = document.tictac;
    if (t == 1) {
        me = 1;
        next = 3;
        last = 2
        btn_color = 'green';
        label_acerto = "  X  ";
        label_row = 'XXXX';
        label_empty_temp = 1;
        label_empty = 'x';
        nextColor = 'red';
        acertosNext = acertosP3;
        lastColor = 'blue';
        acertosLast = acertosP2;
    } else {
    	      if (t == 0)
				{                
                me = 2;
                next = 1;
                last = 3;
                btn_color = 'blue';
                label_acerto = "  0  ";
                label_row = 'OOOO';
                label_empty_temp = 0;
                label_empty = 'O';
                nextColor = 'green';
				acertosNext = acertosP1;
                lastColor = 'red';
                acertosLast = acertosP3;
                }
                else {
                     me = 3;
                     next = 2;
                     last = 1;
                     btn_color = 'red';
                     label_acerto = "  |  ";
                     label_row = '||||';
                     label_empty_temp = 2;
                     label_empty = 'i';
                     nextColor = 'blue';
                     acertosNext = acertosP2;
                     lastColor = 'green';
                     acertosLast = acertosP1;
                     }
    }


    if (resp.toLowerCase() == Solution[i][j]) 
      {
            id = ('btn-' + i + j);
			var thebtn = document.getElementById(id);            
            xo = label_acerto;
            count_down--;
            if (t == 1) 
               {
				acertosP1++;                
                acertosP = acertosP1;
               } else {
               	      if (t==0)
                         {
					     acertosP2++;                
                         acertosP = acertosP2;
                         }
                         else {
                         	  acertosP3++;
                         	  acertosP = acertosP3;
                              }
                      }        
            thebtn.value = xo;
            thebtn.disabled=true;
            changeColor(thebtn,btn_color);
            //load_neighborsP(i, j, me); // load neighbours and check for deadlocks
            highLight(i,j,btn_color);
            enableAdjacent(btn_color);
            //alert('acertosP: '+ acertosP);
            var imStuck = is_Blocked(btn_color);
            var nextStuck = is_Blocked(nextColor);
            var lastStuck = is_Blocked(lastColor);
           
            if ((imStuck == true)&&(acertosP < 4)) 
               {
               	alert(btn_color + ' You re  blocked');
                mark_blocked(btn_color);
                reset_vars(me);
                t = turnchange();
               } 
            if ((nextStuck == true)&&(acertosNext > 0)) 
               {
               	alert(nextColor + ' You re  blocked');
                mark_blocked(nextColor);
                reset_vars(next);
               }
            if ((lastStuck == true)&&(acertosLast > 0)) 
               {
               	alert(lastColor + ' You re  blocked');
                mark_blocked(lastColor);
                reset_vars(last);
               }               
            if (acertosP == 4) 
               {
               computeScore();
               updateScore(file, me, op);
               reset_vars(me)
               t = turnchange();               
               }
      }// if resp == solution
      else // the resp is incorrect
      {
      alert("Sorry!!! Incorrect answer ");
      //file.text.value +=  'Incorrect \n';
      t = turnchange();
      }
      	
}
function computeScore()
{
    if (t == 1) {
        me = 1;
        op = 2;
        btn_color = 'green';
        label_acerto = "  X  ";
        label_row = 'XXXX';
        label_empty_temp = 1;
        label_empty = 'x';
    } else {
    	      if (t == 0)
				    {                
                me = 2;
                op = 1;
                btn_color = 'blue';
                label_acerto = "  0  ";
                label_row = 'OOOO';
                label_empty_temp = 0;
                label_empty = 'O';
                }
                else {
                     me = 3;
                     op = 1;
                     btn_color = 'red';
                     label_acerto = "  |  ";
                     label_row = '||||';
                     label_empty_temp = 2;
                     label_empty = 'i';
                     }
    }
                    for (x = 0; x < line; x++) 
                        {
                        for (y = 0; y < col; y++) 
                            {
                            id = ('btn-' + x + y);
							       var thebtn = document.getElementById(id);
                            if (thebtn.value == label_acerto) 
                               {
                                thebtn.value = label_row;
                                thebtn.disabled = true;
                                //removeClass(thebtn, "green_button");
                				     //addClass(thebtn, "dark_button");
                               }
                            }
                        }    
}

function change_b(file, i, j, k) {

id = ('btn-' + i + j);
var thebtn = document.getElementById(id);
    if (t == 1) {
        me = 1;
        op = 2;

    } else {
        me = 2;
        op = 1;

    }
    acertosP = eval('acertosP' + me);

    //but = eval("file.b" + k)
		  
    ans = prompt("PLEASE WRITE  /d/    /t/  or  id ", verb[i][j]);
    if (ans == null) {return;} // user pressed cancel button in the box....
    if (ans == "") {alert("WRITE YOUR ANSWER."); return; }// user entered a blank answers....*/
    computeAnswer(thebtn, i, j, k, ans);

}