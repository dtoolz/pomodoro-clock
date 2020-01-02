$(document).ready(function(){
   let sessionCount = parseInt($('#session-num').html()); //make a session num an integer
   let breakCount = parseInt($('#break-num').html()); //make a break num an integer

    $('#reset').hide();//to hide reset key on load

    $('#start').click(function(){ //on clicking start button
       let counter = setInterval(sessionTimer, 1000);
       sessionCount*=60;
       breakCount*=60;

       function sessionTimer(){
           $('#start, #minus-five-session, #add-five-session, #add-five-break, #minus-five-break, #break-num, .second-title, .first-title' ).hide();
           $('#timeType').show();
           $('#timeType').html('session time:');
           sessionCount -=1; //subtract value of 1 every 1sec
           if(sessionCount===0){
               clearInterval(counter);
               var startBreak = setInterval(breakTimer, 1000);
               $('#session-num').hide();
           }
           if(sessionCount%60>=10){
              $('#session-num').html(Math.floor(sessionCount/60)+':'+sessionCount%60);
           }
           else{
            $('#session-num').html(Math.floor(sessionCount/60)+':'+'0'+sessionCount%60);
           }
         

         function breakTimer(){
            $('#timeType').html('break time:');
            $('#break-num').show();
            $('#timeType').show();
            breakCount -=1;
             if(breakCount===0){
                 clearInterval(startBreak);
                 $('#reset').show();
                 $('#break-num').hide();
                 $('#timeType').hide();
             }
             
             if(breakCount%60>=10){
                $('#break-num').html(Math.floor(breakCount/60)+':'+breakCount%60);
             }
             else{
              $('#break-num').html(Math.floor(breakCount/60)+':'+'0'+breakCount%60);
             }

           }

       }

    });

    //onClick reset
    $('#reset').click(function(){
        sessionCount = 5;
        breakCount = 5
         $('#session-num').html(sessionCount);
        $('#break-num').html(breakCount);
        $('#start, #minus-five-session, #add-five-session, #add-five-break, #session-num, #minus-five-break, #break-num, .second-title, .first-title' ).show();
        $('#reset').hide();
    });

   //session time subtract 5
    $('#minus-five-session').click(function(){
        if(sessionCount>5){
            sessionCount -= 5;
            $('#session-num').html(sessionCount);  
            
        }
    });
    //session time add 5
    $('#add-five-session').click(function(){
        if(sessionCount>0){
            sessionCount += 5;
            $('#session-num').html(sessionCount);
           
        }
    })

    //break time subtract 5
    $('#minus-five-break').click(function(){
        if(breakCount>5){
            breakCount -= 5;
            $('#break-num').html(breakCount);  
            
        }
    });
    //break time add 5
    $('#add-five-break').click(function(){
        if(breakCount>0){
            breakCount += 5;
            $('#break-num').html(breakCount);
           
        }
    })
});


