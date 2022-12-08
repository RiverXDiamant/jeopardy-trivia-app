# Make a Jeopardy Trivia App using jService!

<p>
<img src="https://i.imgur.com/gw3cvyD.png" alt="Sample Jeopardy Trivia App Appearance" />
</p>

Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive.
On click, have this button make a GET request to get random trivia data. Let's start you off with a win by giving you the URL:  http://jservice.io/api/random
Make some html elements like a divwhere you will display the question, category and points. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).
Make another div in your HTML where you display the answer
Add an on click function that toggles whether or not you can see the answer.
Add other elements to your page to make it make sense and look good (see attached image)
Make a div that has an h2and two buttons
Inside the h2 keep score, start at 0
Make one button add the points to the score and the other to subtract points from the score (just add or subtract 100 points - using the points value from jService is Hungry for More)
Add a little style and color to your app
<br />

1. Once Completed deploy using NPM RUN BUILD && Netlify
2. This should be pushed to github as a repo. The repo is the deliverable.
3. In the readme of your project link to your live Netlify link

<br />
Hungry for More?
<br />
jService+

1. use the points provided for the question to add and subtract from the score React docs: lifting state upLinks to an external site.
2. create a third button that resets the score to 0
3. Make another button titled Get 10 Questions.
4. Make a request to get random trivia data that returns 10 items: ex: 'http://jservice.io/api/random?count=10'
5. Use what you learned today to display all 10 of the questions.
6. Include a button with each of the questions to reveal that will reveal the answer when clicked. (You may find it easy to reveal ALL the answers, revealing just the answer of one question is challenging!)
7. Use the documentation to look at the categories that are available with jService. Choose 1. Make a request to get the trivia information for that category. Display them on your page in the same way as before (a question with an answer button);
8. Research other APIs! Find one that looks interesting and make a "GET" request for some data.
