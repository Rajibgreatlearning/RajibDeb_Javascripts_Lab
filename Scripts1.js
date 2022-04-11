totalQuestion = 5, totalMarks = totalQuestion;

var question1 = {
    "question": "1. What is the full form of HTML?",
    "option1": "High text multiple language",
    "option2": "Hyper text markup language",
    "option3": "High text multiple language",
    "option4": "Hyper tool markup language"
}

var question2 = {
    "question": "2. What is the full form of SQL?",
    "option1": "system query language",
    "option2": "Structured query letter",
    "option3": "Structured query language",
    "option4": "syatem queue language"
}

var question3 = {
    "question": "3. What is the full form of CSS?",
    "option1": "Code style sheet",
    "option2": "Cascade story sheet",
    "option3": "Cascading style sheet",
    "option4": "Cascading style story"
}

var question4 = {
    "question": "4. What is the full form of PHP?",
    "option1": "Programming hypertext preprocessor",
    "option2": "Programming hypertext processor",
    "option3": "Prehyper processor",
    "option4": "Hypertext Preprocessor"
}

var question5 = {
    "question": "5. What is the full form of XML?",
    "option1": "Extensible markup logic",
    "option2": "Excel markup language",
    "option3": "Extensible module language",
    "option4": "Extensible markup language"
}

var questionSet = [question1, question2, question3, question4, question5];


var answers = ["Hyper text markup language", "Structured query language", "Cascading style sheet", "Hypertext Preprocessor", "Extensible markup language"];

let i = 0, marks = 0;
let selectedValue;
//initializing the required variables

const questionsWeb = document.querySelector(".questions");
const next = document.querySelector("#next");


//Display process
listArr = [];

if (i == 0) {
    questionsWeb.innerHTML = `<div id="prePage">Please start your quiz. Best of Luck!</div>`;
    next.textContent = `Let's start`;


}
next.onclick = () => {  //Next button actions and naming change wrt the page demand

    next.textContent = `Next->`;



    if (i > 0) {   //read radio button value


        const radioBtns = document.querySelectorAll('input[name="btn"]');


        for (const radioBtn of radioBtns) {
            if (radioBtn.checked) {
                selectedValue = radioBtn.value;

                break;
            }
            
        }
        
        listArr.push(selectedValue);

        

    }



    if (i >= totalQuestion) {
        // next.textContent = `Submit`;
        next.replaceWith();
        
        var submitTag = `<div id="submitAsk">Please submit your paper.</div>
       <button id="submit">Submit</submit>`;
        questionsWeb.innerHTML = submitTag;
        console.log(listArr);
        // console.log(answers);
        const resultBtn = document.querySelector("#submit");
        resultBtn.onclick = () => {   //Calculate the output percentage

            for (var k = 0; k < totalQuestion; k++) {

                if (listArr[k] === answers[k]) {
                    marks = marks + 1;
                }
            }
            var marksPercentage = resultValidation(marks, totalMarks);
            if (marksPercentage > 40) {
                
                var resultTag = `<div id="results"> Your score ${marksPercentage}%</div><div id="pass">Congratulations! you passed the exam.</div>`;
            } else {
                
                var resultTag = `<div id="results"> Your score ${marksPercentage}%</div><div id="fail">Failed, Better luck next time!</div>`;
            }
            
            questionsWeb.innerHTML = resultTag;
        }//resultBtn.onclick

    } else {

        
        let newQuestion = `<div class="question">
<h4 id="questionActual">${questionSet[i].question}</h4>
<div class="line">
   <input type="radio" name="btn" value="${questionSet[i].option1}"></input>
   <span>${questionSet[i].option1}</span>
</div>
<div class="line">
   <input type="radio" name="btn" value="${questionSet[i].option2}"></input>
   <span>${questionSet[i].option2}</span>
</div>
<div class="line">
   <input type="radio" name="btn" value="${questionSet[i].option3}"></input>
   <span>${questionSet[i].option3}</span>
</div>
<div class="line">
   <input type="radio" name="btn" value="${questionSet[i].option4}"></input>
   <span>${questionSet[i].option4}</span>
</div>

</div>
<div id="footer">${i + 1} of ${totalQuestion}</div>`;

        questionsWeb.innerHTML = newQuestion;

        //Radio button and correct answer selection process

          

    }


    i++;

    



}

function resultValidation(marks, totalMarks) {

    var percentage = (marks * 100) / totalMarks;
    return percentage;

}

    









