canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//mouse_event="empty";//
var last_position_of_x,last_position_of_y;
var color="black";
var width_of_line=1;
var widthofscreen=screen.width;
var new_width=widthofscreen-85;
var new_height=screen.height-150;
if (widthofscreen < 992) {
    canvas.width=new_width;
    canvas.height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    console.log("my touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    console.log("my touchmove");
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.lineWidth=width_of_line;
    ctx.strokeStyle=color;
    console.log("last position of x - "+ last_position_of_x + "last position of y - " + last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current position of x - "+ current_position_of_touch_x + "current position of y - " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}

  


/*canvas.addEventListener("mousedown", mymouse_down);
function mymouse_down(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    canvas.style.backgroundColor="skyblue";
    mouse_event="mousedown";

}

canvas.addEventListener("mouseup", mymouse_up);
function mymouse_up(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    canvas.style.backgroundColor="khaki";
    mouse_event="mouseup";

    
}

canvas.addEventListener("mouseleave", mymouse_leave);
function mymouse_leave(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    canvas.style.backgroundColor="lightgreen";
    mouse_event="mouseleave";
    
    
}

canvas.addEventListener("mousemove", mymouse_move);
function mymouse_move(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    canvas.style.backgroundColor="white";
    current_position_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_mouse_y=e.clientY-canvas.offsetTop;
    if (mouse_event=="mousedown") {
        ctx.beginPath();
        ctx.lineWidth=width_of_line;
        ctx.strokeStyle=color;
        console.log("last position mouse x = "+last_position_of_x+ " last position mouse y = "+ last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
       

        console.log("current position mouse x = "+current_position_mouse_x+ " current position mouse y = "+ current_position_mouse_y);
        ctx.lineTo(current_position_mouse_x,current_position_mouse_y);
        ctx.stroke();
    }

        last_position_of_x=current_position_mouse_x;
        last_position_of_y=current_position_mouse_y;


}*/



 function cleararea() {
     ctx.clearRect(0,0,canvas.width,canvas.height);
 }
