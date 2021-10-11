
let time = 10;
let current_score =0;
let high_score= 0;
let timing;
let current_question;
$('.current_score').html(current_score);
$('.high_score').html(high_score);

let startGame =function(){
    if(!timing){
        if (time === 0) {
            updateTimeLeft(10);
            updateScore(-current_score);
          }
        timing = setInterval(function(){
            updateTimeLeft(-1);
            $('.second').html(time);
            if(Number(time) === 0){
                
                clearInterval(timing);
               timing= undefined;
               $('.second').html(time);
                if(current_score > high_score){
                    high_score = current_score;
                    $('.high_score').html(high_score);
                }
                $('.answer').prop({'readonly' :true})
                
            }
        },1000);
    }
}
let updateScore = function (amount) {
    current_score += amount;
    $('.current_score').text(current_score);
  };

let updateTimeLeft = function (amount) {
    time += amount;
    $('.second').text(time);
  }

  let randomNumber= function(size){
    

      return Math.trunc(Math.random()*size) +1
  };
  let question_create =function(){
    let range_value = $('.range').val();
    let question=[];
    let num1;
    let num2; 
    let radioValue = $("input[name='icons']:checked").val();
    if(radioValue === 'plus'){
        num1 = randomNumber(Number(range_value));
        num2 = randomNumber(Number(range_value));
        question.answer = num1 + num2;
        question.display =String(num1) + "+" + String(num2);
    }else if(radioValue === 'minus'){
        num1 = randomNumber(Number(range_value));
        num2 = randomNumber(Number(range_value));
        while(num1 < num2){
         num1 = randomNumber(Number(range_value));
         num2 = randomNumber(Number(range_value));
        }
        question.answer = (num1 - num2);
        question.display =String(num1) + "-" + String(num2);
    }else if(radioValue === 'times'){
        num1 = randomNumber(Number(range_value));
        num2 = randomNumber(Number(range_value));
        question.answer = (num1 * num2);
        question.display =String(num1) + "X" + String(num2);
    }else if(radioValue === 'divide'){
        num1 = randomNumber(Number(range_value));
        num2 = randomNumber(Number(range_value));
       

        while(num1 % num2 !=0){
            num1 = randomNumber(Number(range_value));
            num2 = randomNumber(Number(range_value));
        }
                
           
              
        question.answer = (num1 / num2);
        question.display =String(num1) + "/" + String(num2);
    }
      
      
      return question;
  }

  let new_question = function(){
      current_question = question_create();
      $('.game-question').html(current_question.display);
  };

  let check_answer = function(userInput,answer){
      if(userInput === answer){
          new_question();
          $('.answer').val('');
          updateTimeLeft(+1);
          updateScore(+1);
      }
  };

  $('.answer').on('keyup',function(){
      startGame();
      check_answer(Number($(this).val()),current_question.answer);

  })



$('.icons').click(function(){
    let radioValue = $("input[name='icons']:checked").val();
    
    if(radioValue === 'plus'){
        time=10;
        current_score= 0;
        high_score= 0;
        $('.second').html(time);
        startGame();
        new_question();
        
      check_answer(Number($(this).val()),current_question.answer);
      $('.answer').prop({'readonly' :false})

    }else if(radioValue === 'minus'){
        time=10;
        current_score= 0;
        high_score= 0;
        $('.second').html(time);
        startGame();
        new_question();
       
      check_answer(Number($(this).val()),current_question.answer);
      $('.answer').prop({'readonly' :false})
    }else if(radioValue === 'times'){
        time=10;
        current_score= 0;
        high_score= 0;
        $('.second').html(time);
        startGame();
        new_question();
      check_answer(Number($(this).val()),current_question.answer);
      $('.answer').prop({'readonly' :false})
    }else if(radioValue === 'divide'){
        time=10;
        current_score= 0;
        high_score= 0;
        $('.second').html(time);
        startGame();
        new_question();
      check_answer(Number($(this).val()),current_question.answer);
      $('.answer').prop({'readonly' :false})
    }
})


new_question();




