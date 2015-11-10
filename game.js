    var name=prompt('what is your name?');
    alert('Nice to meet you'+' '+name);

    var answers = ["yes", "yes", "yes","36","yes","8"];
    var inputArray = [];
    var numberCorrect = 0;

    var input1 = prompt("Do I like yellow corn?").toLowerCase();
    if (input1 === 'y') input1 = 'yes';
    inputArray.push(input1);

    if(input1 === answers[0]) {
      numberCorrect++;
      alert("You are right! I love yellow corn! I can eat 20 corns a day!!! :)");
    } else  {
      alert("you are wrong! sorry but I'm the corn animal.");
    }

    var input2 = prompt("Do I enjoy beer?").toLowerCase();
    if (input2 === 'y') input2 = 'yes';
    inputArray.push(input2);

    if (input2 === answers[1]) {
      numberCorrect++;
      alert("you're right! umm~beer and fried chicken~~~yam! they are the best things in the world!");
    } else{
      alert("Oh! no...you're wrong. I love beer!");
    }

    var input3=prompt("Do I have son?").toLowerCase();
       if (input3 === 'y') input3 = 'yes';
    inputArray.push(input3);

    if (input3===answers[2]) {
      numberCorrect++;
      alert("Yes I do have two sons. they are darlings!");
    }
    else {
      alert("you are wrong");
    }

    var input4=prompt("How old am I?");
    inputArray.push(input4);

    if (input4===answers[3]) {
      numberCorrect++;
      alert("Yes I am. but mentally I'm still 16. hihi ^^*");
    }
    else {
      alert("No. My age is 3 dozens of egg :(");
    }

    var input5=prompt("Do I like clamming?").toLowerCase();
    if (input5 === 'y') input5 = 'yes';
    inputArray.push(input5);

    if (input5===answers[4]) {
      numberCorrect++;
      alert("yes I'm crazy about that! Love digging!!!");
    }
    else {
      alert("no. I love to eat clams and love clamming too!");
    }

    var input6=prompt("What is my shoes size?");
    inputArray.push(input6);
    if (input6===answers[5]) {
      numberCorrect++;
      alert("yes!");
    }
    else {
      alert("no~");
    }

    alert("You have " + numberCorrect + " answers correct!");


    if ( inputArray.length > 5) {
      var incorrectString = "";

      for(var i = 0; i < answers.length; i++)

      {

        if(answers[i]!== inputArray[i]) {

          incorrectString += "The correct answer for question " + (i + 1) + " is " + answers[i] + "\n";
        }
      }
      alert(incorrectString);
    }

