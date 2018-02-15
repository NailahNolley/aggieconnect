/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Been to variables
beentocorridor = true;

//Item variables
sword = false;

//Current room
currentroom = "n_corridor";

//
$(document).ready(function(){
    $("form").submit(function(){
        var input = $("#command_line").val();
        
        if(input === "help"){
            $("#message_help").clone().insertBefore("#placeholder").fadeIn(1000);
        }
        
        $("#command_line").val("");
        
    });
    
});