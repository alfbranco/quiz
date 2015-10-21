var player1 = 0; // these var stores the points of each player
var player2 = 0;
var acertosP1 = 0; // stores partial score until you have got 4 correct answers
var acertosP2 = 0;
var whogoesnow = ""; //writes in the text are who is playing
var t = 0; // controls whose turn is it now
var name1 = ""; // names of the players
var name2 = "";
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
verb[0][0] = "see";
verb[0][1] = "drink";
verb[0][2] = "say";
verb[0][3] = "tell";
verb[0][4] = "speak";
verb[1][0] = "go";
verb[1][1] = "do";
verb[1][2] = "sell";
verb[1][3] = "swim";
verb[1][4] = "begin";
verb[2][0] = "break";
verb[2][1] = "bring"
verb[2][2] = "know"
verb[2][3] = "have"
verb[2][4] = "eat"
verb[3][0] = "forget"
verb[3][1] = "give"
verb[3][2] = "come"
verb[3][3] = "let"
verb[3][4] = "make"
verb[4][0] = "pay"
verb[4][1] = "put"
verb[4][2] = "read"
verb[4][3] = "send"
verb[4][4] = "sit"
}

var Solution = new makeArray2(line, col);
loadArraySolution();

function loadArraySolution() {
Solution[0][0] = "saw"
Solution[0][1] = "drank"
Solution[0][2] = "said"
Solution[0][3] = "told"
Solution[0][4] = "spoke"
Solution[1][0] = "went"
Solution[1][1] = "did"
Solution[1][2] = "sold"
Solution[1][3] = "swam"
Solution[1][4] = "began"
Solution[2][0] = "broke"
Solution[2][1] = "brought"
Solution[2][2] = "knew"
Solution[2][3] = "had"
Solution[2][4] = "ate"
Solution[3][0] = "forgot"
Solution[3][1] = "gave"
Solution[3][2] = "came"
Solution[3][3] = "let"
Solution[3][4] = "made"
Solution[4][0] = "paid"
Solution[4][1] = "put"
Solution[4][2] = "read"
Solution[4][3] = "sent"
Solution[4][4] = "sat"
}

var neighborP1 = new makeArray2(16, 2);
var count_neighborP1 = 0; // counter for the neighbors of corretP1.....



var neighborP2 = new makeArray2(16, 2);
var count_neighborP2 = 0;

initialize_array(neighborP1, 16, 2);
initialize_array(neighborP2, 16, 2);

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

return(nameColor);    
}

function changeColor(obj, cc)
{
   var newColor = (cc + '_button');
   addClass(obj, newColor);
}
function isNotDead(thebtn) {
//alert('entrei na funcao is not dead');
if ((thebtn.value !=="  X  ")&&(thebtn.value !=="  0  ")&&(thebtn.value !== 'XXXX')&&(thebtn.value !== 'OOOO')&&(thebtn.value !== '*****'))
           {
//alert('entrei na funcao is not dead and is not DEAD checking: '+ thebtn.value);    			
    		//	notDead = true;
    			//return(notDead);
				return true;
			   }
            else{//notDead = false;
    			//return(notDead);
			   return false;
			   }

}
function isDead(thebtn) {
if ((thebtn.value == "  X  ")||(thebtn.value == "  0  ")||(thebtn.value == 'XXXX')||(thebtn.value == 'OOOO')||(thebtn.value == '*****'))
           {
    			//dead = true;
    			//return(dead);
				return true;			   
			   }
            else{//dead = false;
    			//return(dead);
				return false;			   
			   }

}
function highLight(i,j,k,c) 
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
var k = 0;
var c = 'grey';
//alert('entrei em turnonNeighbors e o valor t= '+ turn);
    if (t == 1){label_btn = "  X  " ;c = 'green';}else{label_btn = "  0  ";c = 'blue';}                    
    
                    for (x = 0; x < line; x++) {
                        for (y = 0; y < col; y++) {
									                             
                            id = ('btn-' + x + y);
                            //alert(id);
							       var thebtn = document.getElementById(id);
                            if (thebtn.value == label_btn)
                               {
										 //alert('going to highLight'+ thebtn.value)                               
                               highLight(x,y,k,c);
                               
                               }
									 k++;
                            } // for y
                    } //for x
enableAdjacent(c);
}
function report_All() {
    ans = "";
    ans += "t:" + t + "\n";
    ans += "acertosP1:" + acertosP1 + "\n";
    ans += "count_neighborP1:" + count_neighborP1 + "\n";
    ans += list_neighbors_all(neighborP1, "neighborP1:");
    ans += "acertosP2:" + acertosP2 + "\n";
    ans += "count_neighborP2:" + count_neighborP2 + "\n";
    ans += list_neighbors_all(neighborP2, "neighborP2:");
    ans += list_empty();
    document.tictac.text.value = ans;
}

var empty = new makeArray2(line, col);

function loadArrayEmpty() {
empty[0][0] = -1
empty[0][1] = -1
empty[0][2] = -1
empty[0][3] = -1
empty[0][4] = -1
empty[1][0] = -1
empty[1][1] = -1
empty[1][2] = -1
empty[1][3] = -1
empty[1][4] = -1
empty[2][0] = -1
empty[2][1] = -1
empty[2][2] = -1
empty[2][3] = -1
empty[2][4] = -1
empty[3][0] = -1
empty[3][1] = -1
empty[3][2] = -1
empty[3][3] = -1
empty[3][4] = -1
empty[4][0] = -1
empty[4][1] = -1
empty[4][2] = -1
empty[4][3] = -1
empty[4][4] = -1
}
loadArrayEmpty();

function initialize_array(_array, i, j) {
    for (x = 0; x < i; x++) {
        for (y = 0; y < j; y++) {
            _array[x][y] = -1;
        }
    }

}

function reset_vars(p) {
    if (p == 1) {
        acertosP1 = 0;
        initialize_array(neighborP1, 16, 2);
        count_neighborP1 = 0;
    } else {
        acertosP2 = 0;
        initialize_array(neighborP2, 16, 2);
        count_neighborP2 = 0;
    }

}



function updateScore(file, p1, p2) {
    if (p1 == 1) {
        player1++;
    } else {
        player2++
    }
    file.player1.value = ':' + player1;
    file.player2.value = ':' + player2;
}


function list_empty() {
    count = 0;
    ans = "empty - \n";
    for (x = 0; x < line; x++) {
        for (y = 0; y < col; y++) {
            ans = (ans + count + ":" + empty[x][y] + ";\n")
            count++;
        }
    }

    return (ans);
}

function list_neighbors(_array, name) {
    ans = (name + " \n");
    x = 0;
    do {
        i = _array[x][0];
        j = _array[x][1];
        ans += x + ":" + i + "," + j + ";\n";
        x++;
    } while ((x < _array.length) && (_array[x][0] != -1))
    return (ans);
}

function list_neighbors_all(_array, name) {
    ans = (name + " \n");
    x = 0;
    do {
        i = _array[x][0];
        j = _array[x][1];
        ans += x + ":" + i + "," + j + ";\n";
        x++;
    } while ((x < _array.length) && (_array[x][0] != -1))
    return (ans);
}

function check_if_blocked(p) {
    name_blocked = eval('name' + p);
    neighbors = eval("neighborP" + p);
    acertosP = eval('acertosP' + p);

    if (p == 1) {
        counter = count_neighborP1;
    } else {
        counter = count_neighborP2;
    } // set counter according to player      

    dead = true;
    if (counter > 0) // you can only be blocked if you've already scored....
    {
        for (x = 0; x < counter; x++) {
            if (empty[neighbors[x][0]][neighbors[x][1]] == -1) {
                //alert ("There is no dead lock yet!" + neighbors[x][0] + neighbors[x][1]);
                dead = false;
                break;
            }
        }
        if (dead && (acertosP == 4)) {
            dead = false;
            return (dead);
        }
    } else {
        dead = false;
        return (dead);
    }
    if (dead == true) {
        alert(name_blocked + 'You are totally blocked!');
        mark_blocked(p);
        reset_vars(p);
    }
    return (dead);
}

function mark_blocked(p) {
    file = document.tictac;
    if (p == 1) {
        key = 1
    } else {
        key = 0
    }
    z = 0;
    for (x = 0; x < line; x++) {

        for (y = 0; y < col; y++) {
            if (empty[x][y] == key) {
                but = eval("file.b" + z);
                but.value = "*****";
                but.disabled = true;                
                empty[x][y] = -2;
            }
            z++;

        }
    }

}

function turnchange() 
{
	file = document.tictac;
    if ( t == 1) {
        t = 0;
        nameplayernow = name2;
        acertosP = acertosP2;
    } else {
		  t = 1;
        nameplayernow = name1;
        acertosP = acertosP1;
    }
    file.text.value = nameplayernow + ' IS PLAYING NOW';    
    sweepGrid();

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
    name1_temp = prompt("Please write the first player's name ", "player 1");
    name2_temp = prompt("Please write the second player's name ", "player 2");

    k = 0;
    for (i = 0; i < line; i++) {
        for (j = 0; j < col; j++) {
            but = eval("file.b" + k);
            but.value = verb[i][j];
            but.disabled=false;
            empty[i][j] = -1;
            k++;
        }
    }
    if (rdn >= .5) {
        name1 = name1_temp;
        name2 = name2_temp;
        file.text.value = name1 + ' IS PLAYING NOW';
        file.player1_name.value = name1;
        file.player2_name.value = name2;
        t=1;
    } else {
        name1 = name1_temp;
        name2 = name2_temp;
        file.text.value = name2 + ' IS PLAYING NOW';
        file.player1_name.value = name1;
        file.player2_name.value = name2;
        t=0;
    }
    file.player1.value = ':' + player1;
    file.player2.value = ':' + player2;

}

function load_neighborsP(i, j, k) {
    array_neighbor = eval("neighborP" + k);
    _counter = eval('count_neighborP' + k);
    if ((i + 1) < line) {  // 6 o'clock
        array_neighbor[_counter][0] = i + 1; // stores x
        array_neighbor[_counter][1] = j; // stores y
        _counter++;
    }
    if ((i - 1) >= 0) {
        array_neighbor[_counter][0] = i - 1; // stores x
        array_neighbor[_counter][1] = j; // stores y
        _counter++;
    }
    if ((j + 1) < col) {
        array_neighbor[_counter][0] = i; // stores x
        array_neighbor[_counter][1] = j + 1; // stores y
        _counter++;
    }
    if ((j - 1) >= 0) {
        array_neighbor[_counter][0] = i; // stores x
        array_neighbor[_counter][1] = j - 1; // stores y
        _counter++;
    }

    if (k == 1) {
        count_neighborP1 = _counter;
    } else {
        count_neighborP2 = _counter;
    }


}

function adjacent(i, j, p) {
    resp = false;
    if ((i + 1) < line) {
        if ((empty[i + 1][j] == p) && (empty[i][j] == -1)) {
            resp = true;
        }
    }
    if ((i - 1) >= 0) {
        if ((empty[i - 1][j] == p) && (empty[i][j] == -1)) {
            resp = true;
        }
    }
    if ((j + 1) < col) {
        if ((empty[i][j + 1] == p) && (empty[i][j] == -1)) {
            resp = true;
        }
    }
    if ((j - 1) >= 0) {
        if ((empty[i][j - 1] == p) && (empty[i][j] == -1)) {
            resp = true;
        }
    }

    if (!resp) {
        alert("You didn't choose a valid adjacent position!");
    }
    return (resp);
}

function enableAdjacent(cor)
{

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
                                         }
                                         else {
                                              thebtn.disabled=true;
                                              }	                               
                                     }

                            } // for y
                    } //for x

}

function sweepGrid() 
{
// this function "turns off" all the neighbours for both players 
if (t==1)
   {
   var turn_class = ('green_button');
   var other_class = ('blue_button');
   var acertosP = acertosP1;
   var acertosP_other = acertosP2;       
   }else 
       {
       var turn_class = ('blue_button');
       var other_class = ('green_button');
       var acertosP = acertosP2;   
       var acertosP_other = acertosP1; 
       }
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
                                     if ((nome.indexOf('green_button') >= 0))
                                                      {
                                                      removeClass(thebtn,'green_button');
                                                      }
                                     if ((nome.indexOf('blue_button') >= 0))
                                                      {
                                                      removeClass(thebtn,'blue_button');
                                                      }
                                                          
                                     }

                            }//for
                     }//for
}
function computeAnswer(obj,i,j,k,resp) 
{
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
        op = 2;
        btn_color = 'green';
        label_acerto = "  X  ";
        label_row = 'XXXX';
        label_empty_temp = 1;
        label_empty = 'x';
    } else {
        me = 2;
        op = 1;
        btn_color = 'blue';
        label_acerto = "  0  ";
        label_row = 'OOOO';
        label_empty_temp = 0;
        label_empty = 'O';
    }

    if (resp.toLowerCase() == Solution[i][j]) 
      {
            id = ('btn-' + i + j);
				var thebtn = document.getElementById(id);            
            empty[i][j] = label_empty_temp;
            xo = label_acerto;
            count_down--;
            if (t == 1) {
					 acertosP1++;                
                acertosP = acertosP1;
            } else {
					 acertosP2++;                
                acertosP = acertosP2;
            }
            thebtn.value = xo;
            thebtn.disabled=true;
            changeColor(thebtn,btn_color);
            load_neighborsP(i, j, me); // load neighbours and check for deadlocks
            highLight(i,j,k,btn_color);
            enableAdjacent(btn_color);
            //alert('acertosP: '+ acertosP);            
            check_if_blocked(op); //check if blocked opponent
            if (check_if_blocked(me)) 
                {
                t = turnchange();
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
      alert(" Incorrect answerrrrrrrrrrrrr ");
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
        me = 2;
        op = 1;
        btn_color = 'blue';
        label_acerto = "  0  ";
        label_row = 'OOOO';
        label_empty_temp = 0;
        label_empty = 'O';
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
                                empty[x][y] = label_empty;
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
    ans = prompt("PLEASE WRITE THE PAST SIMPLE FORM OF ", verb[i][j]);
    if (ans == null) {return;} // user pressed cancel button in the box....
    if (ans == "") {alert("WRITE YOUR ANSWER."); return; }// user entered a blank answers....
    computeAnswer(thebtn, i, j, k, ans);
/*var area = document.getElementById('txt_area');
    area.text.value = "";
if (area.addEventListener) {
  area.addEventListener("keypress", function(e) {
        if (e.keyCode === 13) {
            runAnswer(file)
            e.preventDefault();
        }
    }, false);  
 
} else if (area.attachEvent) {
  area.attachEvent('onpropertychange', runAnswer(file) 
    // IE-specific event handling code
  );
}*/
}
/*function runAnswer(file) 
{
alert('running runAnswer');
}*/