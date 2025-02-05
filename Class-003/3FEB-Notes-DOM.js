/* Document Object Model = DOM; 
the HTML document is the parent and all subsequent tags (h1, script, body, etc.) are children to the HTML tag. 
Document 
    html
        head
            title
        body
            h1
            p


element like <h1> or <p> is a node in the tree. 

How do we access these nodes? 
access the entire document first, you have to call it:
document
Accessing HTML elements via different methods:

document.getElementById('id') 
-> selects an element/node by its unique id
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>getElementById Example</title>
</head>
<body>
<h1 id="title">Hello, Students!</h1>
<button onclick="changeText()">Click Me</button>
 
    <script>
        function changeText() {
            let heading = document.getElementById("title");
            heading.textContent = "ID Selected & Changed!";
        }
</script>
</body>
</html>

document.getElementByClassName('class') 
multiple nodes that fall into the same class can be changed all at the same time; stored as arrays, you could run loops on em

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>getElementsByClassName Example</title>
</head>
<body>
<p class="message">Message 1</p>
<p class="message">Message 2</p>
<p class="message">Message 3</p>
<button onclick="changeMessages()">Update Messages</button>
 
    <script>
        function changeMessages() {
            let messages = document.getElementsByClassName("message");
            for (let i = 0; i < messages.length; i++) {
                messages[i].textContent = `Updated Message ${i + 1}`;
            }
        }
</script>
</body>
</html>

document.getElementByTagName('tag') like paragraphs or buttons 

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>getElementsByTagName Example</title>
</head>
<body>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
<button onclick="highlightParagraphs()">Highlight Paragraphs</button>
 
    <script>
        function highlightParagraphs() {
            let paragraphs = document.getElementsByTagName("p");
            for (let i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.backgroundColor = "yellow";
            }
        }
</script>
</body>
</html>



document.querySelector('selector') 
used to select the first matching element using a CSS selector; only changes the first matching element using a css selector (object used to style things on your page)



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>querySelector Example</title>
<style>
        .box { width: 100px; height: 100px; margin: 10px; background-color: lightblue; }
</style>
</head>
<body>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<button onclick="changeFirstBox()">Change First Box</button>
 
    <script>
        function changeFirstBox() {
            let firstBox = document.querySelector(".box");
            firstBox.style.backgroundColor = "red";
        }
</script>
</body>
</html>

document.querySelectorAll('selector') does them all 

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>querySelectorAll Example</title>
<style>
        .item { padding: 10px; margin: 5px; background-color: lightgray; display: inline-block; }
</style>
</head>
<body>
<div class="item">Item 1</div>
<div class="item">Item 2</div>
<div class="item">Item 3</div>
<button onclick="changeAllItems()">Change All Items</button>
 
    <script>
        function changeAllItems() {
            let items = document.querySelectorAll(".item");
            items.forEach(item => {
                item.style.backgroundColor = "green";
                item.textContent = "Updated!";
            });
        }
</script>
</body>
</html>



document. 

*/ 
