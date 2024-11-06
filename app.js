const messages = [
    "Programmers prefer dark mode because light mode attracts bugs!",
    "99 little bugs in the code, 99 bugs in the code. Take one down, patch it around, 117 little bugs in the code.",
    "Code never lies, but comments sometimes do.",
    "Git commit -m 'fixed an issue'.... but did you really?",
    "Java developers wear glasses because they don't C#.",
    "I write code for humans, not for the compiler… but somehow, the compiler always has something to say.",
    "I would tell you a joke about arrays, but it is out of bounds.",
    "I have a love-hate relationship with Git. It’s mostly hate.",
    "Why did the HTML element break up with the CSS element? It couldn’t find closure.",
    "My love life is like an HTML form—no validation.",
    "HTML without alt text is like a movie with no subtitles—just guessing what’s happeninng.",
    "The '<div>' says to the '<section>', ‘I wish I could be as meaningful as you.",
    "CSS developers always feel stretched because they’re constantly dealing with flexbox.",
    "CSS is like dark magic. You pray, add !important, and hope it works.",
    "CSS truly stands for ‘Can’t Style Stuff’ without breaking something else.",
    "I finally found out how to center things in CSS! It took blood, sweat, and a lot of Google searches.",
    "Why did the CSS box model break up with the margin? It felt like there was too much space between them.",    
    "JavaScript: where ‘not a number’ is still considered a number. Go figure.",
    "JavaScript is like English: you can say a number is a string, and it’ll believe you.",
    "Var and let break up because var was too loose with boundaries.",
    "JavaScript developers hate surprises because they never know if their arrays are gonna change behind their back.",
    "JavaScript developers often catch errors? Because they just try too hard.",
    "JavaScript developers are great at giving compliments. They always go ${aboveAndBeyond}.",
    "A programmer’s life: while (true) { eat(); sleep(); code(); }", 
    "I’d tell you a joke about arrays, but it’s out of bounds.",
    "I tried to teach my computer programming, but it just keeps saying 'hello world' over and over.",
    "JavaScript developer keep getting in trouble because he couldn’t handle ‘strict’ rules.",
    "Only in JavaScript can 1 + ‘1’ equal ‘11’… because math is just a suggestion.",
    "I wanted to go on vacation, but JavaScript put me in callback hell.",
    "I wanted a social life, but instead I got Node.js… Now, I just make requests all day.",
    "Knock, knock. Who’s there? Your 50 dependencies with critical vulnerabilities.",
    "Node.js is like my social life: everything's non-blocking, but it never gets to the point.",
    "JavaScript and Node are like peanut butter and jelly: messy but they just go together.",
    "Pushed to main without checking? Congratulations, you’re now a junior disaster manager.",
    "I write clear commit messages 0.01% of the time. The other 99.99%? ‘Fix stuff.",
    "Where your code gets scrutinized more than your life choices.",
    "Fork it! Oh wait, I didn’t mean like that…",
    "Commit, but make no backup. Welcome to ‘comm-it-or-quit’ coding.",
    "Looking at Git history is like finding all your embarrassing moments logged in chronological order." 
];

// Sellecting a random messages 
const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];
console.log(randomMessage);


