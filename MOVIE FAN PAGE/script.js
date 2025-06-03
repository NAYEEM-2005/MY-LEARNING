 // Trivia Quiz
 function submitQuiz() {
    const form = document.getElementById('trivia-form');
    let correctAnswers = 0;
    const totalQuestions = 5;
  
    // Check answers for question 1
    const q1 = form.q1.value;
    if (q1 === 'correct') {
      correctAnswers++;
    }
  
    // Check answers for question 2
    const q2 = form.q2.value;
    if (q2 === 'correct') {
      correctAnswers++;
    }

    // Check answers for question 3
    const q3 = form.q3.value;
    if (q3 === 'correct') {
       correctAnswers++;
    }

    // Check answers for question 4
    const q4 = form.q4.value;
    if (q4 === 'correct') {
        correctAnswers++;
    }

    // Check answers for question 5
    const q5 = form.q5.value;
    if (q5 === 'correct') {
       correctAnswers++;
    }
 

    // Calculate the score
    const score = (correctAnswers / totalQuestions) * 100;
  
    // Display an alert with the results
    alert(`You got ${correctAnswers} out of ${totalQuestions} correct! Your score: ${score}%`);
  }


// Quote of the Day
const quotes = [
    "Dhaara's legacy lives through Deva.",
    "In this world,power is not given,it is taken.",
    "When Khansaar turns red,only the true warrior will emerge.",
    "Every step towards glory is marked by the blood of the brave.",
    "The laws of Nibbhandaha guides us,but it is our bravery that defines us.",
    "In the shadows of khansaar, SALAAR rises to challenge the darkness.",
    "The warriors of Shouryaanga fight not for glory,but for honor and justice",
    "A king is made by his battles,not his crown",
    "Alliances are built on trust and betrayal",
    "Salaar Devaratha Raisar is the symbol of courage and justice in khansaar"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').textContent = quotes[randomIndex];
  }

   // Load a random quote when the page loads
   window.onload = generateQuote;
  