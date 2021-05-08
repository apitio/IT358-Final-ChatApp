//const socket = io('http://localhost:3000')
const socket = io("ws://localhost:3000");


const name = prompt('What is your name?')

//const admin_img = "https://image.flaticon.com/icons/svg/327/327779.svg";

const admin_img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9Ikljb25zIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0NTQxM2M7b3BhY2l0eTowLjE1O30uY2xzLTJ7ZmlsbDojZGFlZGY3O30uY2xzLTN7ZmlsbDojZmZmO30uY2xzLTR7ZmlsbDpub25lO30uY2xzLTEwLC5jbHMtNCwuY2xzLTcsLmNscy04LC5jbHMtOXtzdHJva2U6IzQ1NDEzYztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5jbHMtNXtmaWxsOiNjMGRjZWI7fS5jbHMtNiwuY2xzLTd7ZmlsbDojYWRjNGQ5O30uY2xzLTh7ZmlsbDojZmY2MjQyO30uY2xzLTl7ZmlsbDojMDBkZmViO30uY2xzLTEwe2ZpbGw6IzYyN2I4Yzt9PC9zdHlsZT48L2RlZnM+PHRpdGxlLz48ZyBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiIGlkPSJfR3JvdXBfIj48ZWxsaXBzZSBjbGFzcz0iY2xzLTEiIGN4PSIyNCIgY3k9IjQ1LjUiIGRhdGEtbmFtZT0iJmx0O0VsbGlwc2UmZ3Q7IiBpZD0iX0VsbGlwc2VfIiByeD0iMTkuNSIgcnk9IjEuNSIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQyLDQwLjVhNCw0LDAsMCwxLTQsNEgxMGE0LDQsMCwwLDEtNC00VjI3YTE4LDE4LDAsMCwxLDM2LDBaIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXyIvPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTI0LDlBMTgsMTgsMCwwLDAsNiwyN3Y1YTE4LDE4LDAsMCwxLDM2LDBWMjdBMTgsMTgsMCwwLDAsMjQsOVoiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBpZD0iX1BhdGhfMiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTQyLDQwLjVhNCw0LDAsMCwxLTQsNEgxMGE0LDQsMCwwLDEtNC00VjI3YTE4LDE4LDAsMCwxLDM2LDBaIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXzMiLz48cmVjdCBjbGFzcz0iY2xzLTUiIGRhdGEtbmFtZT0iJmx0O1JlY3RhbmdsZSZndDsiIGhlaWdodD0iMTIiIGlkPSJfUmVjdGFuZ2xlXyIgcng9IjIiIHJ5PSIyIiB3aWR0aD0iMTMiIHg9IjE3LjUiIHk9IjM0Ii8+PHJlY3QgY2xhc3M9ImNscy02IiBkYXRhLW5hbWU9IiZsdDtSZWN0YW5nbGUmZ3Q7IiBoZWlnaHQ9IjIiIGlkPSJfUmVjdGFuZ2xlXzIiIHdpZHRoPSIxMyIgeD0iMTcuNSIgeT0iMzguNSIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTQ1LjUsMzUuOTJhMSwxLDAsMCwxLS41Ljg3TDQyLDM4LjVWMjZsMywxLjcxYTEsMSwwLDAsMSwuNS44N1oiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBpZD0iX1BhdGhfNCIvPjxwYXRoIGNsYXNzPSJjbHMtNyIgZD0iTTIuNSwzNS45MmExLDEsMCwwLDAsLjUuODdMNiwzOC41VjI2TDMsMjcuNzFhMSwxLDAsMCwwLS41Ljg3WiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGlkPSJfUGF0aF81Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMjQsOUE5LDksMCwwLDEsMzQuNSwyLjI3IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXzYiLz48Y2lyY2xlIGNsYXNzPSJjbHMtOCIgY3g9IjM2IiBjeT0iMy41IiBkYXRhLW5hbWU9IiZsdDtFbGxpcHNlJmd0OyIgaWQ9Il9FbGxpcHNlXzIiIHI9IjIuNSIvPjxyZWN0IGNsYXNzPSJjbHMtNCIgZGF0YS1uYW1lPSImbHQ7UmVjdGFuZ2xlJmd0OyIgaGVpZ2h0PSIxMiIgaWQ9Il9SZWN0YW5nbGVfMyIgcng9IjIiIHJ5PSIyIiB3aWR0aD0iMTMiIHg9IjE3LjUiIHk9IjM0Ii8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNMTkuNSwzNGg5YTIsMiwwLDAsMSwyLDJ2Mi41YTAsMCwwLDAsMSwwLDBoLTEzYTAsMCwwLDAsMSwwLDBWMzZBMiwyLDAsMCwxLDE5LjUsMzRaIiBkYXRhLW5hbWU9IiZsdDtSZWN0YW5nbGUmZ3Q7IiBpZD0iX1JlY3RhbmdsZV80Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMzMuNSwxMS43MWExOCwxOCwwLDAsMC0xOSwwVjI0aDE5WiIvPjxjaXJjbGUgY2xhc3M9ImNscy05IiBjeD0iMzIuNSIgY3k9IjI1IiBkYXRhLW5hbWU9IiZsdDtFbGxpcHNlJmd0OyIgaWQ9Il9FbGxpcHNlXzMiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMTAiIGN4PSIzMi41IiBjeT0iMjUiIGRhdGEtbmFtZT0iJmx0O0VsbGlwc2UmZ3Q7IiBpZD0iX0VsbGlwc2VfNCIgcj0iMiIvPjxjaXJjbGUgY2xhc3M9ImNscy05IiBjeD0iMTUuNSIgY3k9IjI1IiBkYXRhLW5hbWU9IiZsdDtFbGxpcHNlJmd0OyIgaWQ9Il9FbGxpcHNlXzUiIHI9IjUiLz48Y2lyY2xlIGNsYXNzPSJjbHMtMTAiIGN4PSIxNS41IiBjeT0iMjUiIGRhdGEtbmFtZT0iJmx0O0VsbGlwc2UmZ3Q7IiBpZD0iX0VsbGlwc2VfNiIgcj0iMiIvPjwvZz48L3N2Zz4=";
const user_img = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9Ikljb25zIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmU1MDA7fS5jbHMtMntmaWxsOiNlYmNiMDA7fS5jbHMtM3tmaWxsOiNmZmY0OGM7fS5jbHMtNHtmaWxsOiNmZmY7fS5jbHMtNCwuY2xzLTYsLmNscy03e3N0cm9rZTojNDU0MTNjO3N0cm9rZS1saW5lY2FwOnJvdW5kO30uY2xzLTQsLmNscy02e3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LmNscy01e2ZpbGw6IzQ1NDEzYztvcGFjaXR5OjAuMTU7fS5jbHMtNiwuY2xzLTd7ZmlsbDpub25lO30uY2xzLTd7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5jbHMtOHtmaWxsOiNmZmFhNTQ7fS5jbHMtOXtmaWxsOiM2NTY3Njk7fS5jbHMtMTB7ZmlsbDojODc4OThjO308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGRhdGEtbmFtZT0iJmx0O0dyb3VwJmd0OyIgaWQ9Il9Hcm91cF8iPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMjYuNSIgY3k9IjIwLjY2IiBkYXRhLW5hbWU9IiZsdDtFbGxpcHNlJmd0OyIgaWQ9Il9FbGxpcHNlXyIgcj0iMTguNjYiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yNi41LDJBMTguNjYsMTguNjYsMCwxLDAsNDUuMTYsMjAuNjYsMTguNjUsMTguNjUsMCwwLDAsMjYuNSwyWm0wLDM0LjUyYTE3LDE3LDAsMSwxLDE3LTE3QTE3LDE3LDAsMCwxLDI2LjUsMzYuNTJaIiBkYXRhLW5hbWU9IiZsdDtDb21wb3VuZCBQYXRoJmd0OyIgaWQ9Il9Db21wb3VuZF9QYXRoXyIvPjxlbGxpcHNlIGNsYXNzPSJjbHMtMyIgY3g9IjI2LjUiIGN5PSI1LjczIiBkYXRhLW5hbWU9IiZsdDtFbGxpcHNlJmd0OyIgaWQ9Il9FbGxpcHNlXzIiIHJ4PSI1LjYiIHJ5PSIxLjQiLz48cGF0aCBjbGFzcz0iY2xzLTQiIGQ9Ik03Ljg2LDM5LjQxYTIuMjQsMi4yNCwwLDAsMSwxLjY4LTEuNjdMMTIuOTEsMzdhLjI4LjI4LDAsMCwwLC4yMS0uMjcuMjkuMjksMCwwLDAtLjIxLS4yOGwtMy4zNy0uNzdBMi4yNSwyLjI1LDAsMCwxLDcuODYsMzRsLS43OC0zLjM3YS4yOC4yOCwwLDAsMC0uNTQsMEw1Ljc2LDM0YTIuMjUsMi4yNSwwLDAsMS0xLjY4LDEuNjhsLTMuMzYuNzdhLjI5LjI5LDAsMCwwLS4yMi4yOEEuMjguMjgsMCwwLDAsLjcyLDM3bDMuMzYuNzhhMi4yMiwyLjIyLDAsMCwxLDEuNjgsMS42N2wuNzgsMy4zN2EuMjguMjgsMCwwLDAsLjU0LDBaIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXyIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTQ0LjcsNmwyLjYzLS44OGEuMjUuMjUsMCwwLDAsLjE3LS4yMy4yNi4yNiwwLDAsMC0uMTctLjI0TDQ1LjE2LDRhMSwxLDAsMCwxLS42Mi0uNjNsLS43Mi0yLjE2QS4yNi4yNiwwLDAsMCw0My41OCwxYS4yNS4yNSwwLDAsMC0uMjMuMTdsLS43MiwyLjE2QTEsMSwwLDAsMSw0Miw0bC0yLjE3LjcyYS4yNi4yNiwwLDAsMC0uMTcuMjQuMjUuMjUsMCwwLDAsLjE3LjIzTDQyLDUuODdhMSwxLDAsMCwxLC42My42M2wuNzIsMi4xN2EuMjUuMjUsMCwwLDAsLjIzLjE3LjI2LjI2LDAsMCwwLC4yNC0uMTdaIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXzIiLz48ZWxsaXBzZSBjbGFzcz0iY2xzLTUiIGN4PSIyNi4wOSIgY3k9IjQ0LjUxIiBkYXRhLW5hbWU9IiZsdDtFbGxpcHNlJmd0OyIgaWQ9Il9FbGxpcHNlXzMiIHJ4PSIxNC45MyIgcnk9IjEuNSIvPjxjaXJjbGUgY2xhc3M9ImNscy02IiBjeD0iMjYuNSIgY3k9IjIwLjY2IiBkYXRhLW5hbWU9IiZsdDtFbGxpcHNlJmd0OyIgaWQ9Il9FbGxpcHNlXzQiIHI9IjE4LjY2Ii8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMzEuMTcsMjguMTFhOC40Miw4LjQyLDAsMCwxLTkuMzMsMCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGlkPSJfUGF0aF8zIi8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNNDAsMjUuMzJjMCwuNzgtMS4wNSwxLjQtMi4zMywxLjRzLTIuMzQtLjYyLTIuMzQtMS40LDEtMS40LDIuMzQtMS40UzQwLDI0LjU1LDQwLDI1LjMyWiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGlkPSJfUGF0aF80Ii8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNMTMsMjUuMzJjMCwuNzgsMSwxLjQsMi4zMywxLjRzMi4zNC0uNjIsMi4zNC0xLjQtMS4wNS0xLjQtMi4zNC0xLjRTMTMsMjQuNTUsMTMsMjUuMzJaIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXzUiLz48ZyBkYXRhLW5hbWU9IiZsdDtHcm91cCZndDsiIGlkPSJfR3JvdXBfMiI+PHBhdGggY2xhc3M9ImNscy05IiBkPSJNMzkuODcsMjMuOTJIMzQuNDRhNS4zOCw1LjM4LDAsMCwxLTUuMzItNC41bC0uNzUtNC40OUEyLjY5LDIuNjksMCwwLDEsMzEsMTEuOEg0M2EyLjY5LDIuNjksMCwwLDEsMi42OCwzbC0uNDgsNC4zNEE1LjQsNS40LDAsMCwxLDM5Ljg3LDIzLjkyWiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGlkPSJfUGF0aF82Ii8+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTI5LjEyLDE5LjQyQTUuMzYsNS4zNiwwLDAsMCwzMS40NiwyM0w0Mi42NywxMS44SDMxYTIuNjksMi42OSwwLDAsMC0yLjY2LDMuMTNaIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXzciLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0zOS44NywyMy45MkgzNC40NGE1LjM4LDUuMzgsMCwwLDEtNS4zMi00LjVsLS43NS00LjQ5QTIuNjksMi42OSwwLDAsMSwzMSwxMS44SDQzYTIuNjksMi42OSwwLDAsMSwyLjY4LDNsLS40OCw0LjM0QTUuNCw1LjQsMCwwLDEsMzkuODcsMjMuOTJaIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXzgiLz48cGF0aCBjbGFzcz0iY2xzLTkiIGQ9Ik0xMy4xMywyMy45Mmg1LjQzYTUuMzgsNS4zOCwwLDAsMCw1LjMyLTQuNWwuNzUtNC40OUEyLjY5LDIuNjksMCwwLDAsMjIsMTEuOEgxMGEyLjcsMi43LDAsMCwwLTIuNjgsM2wuNDksNC4zNEE1LjM4LDUuMzgsMCwwLDAsMTMuMTMsMjMuOTJaIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXzkiLz48cGF0aCBjbGFzcz0iY2xzLTEwIiBkPSJNNy43NywxOS4xM2E1LjM5LDUuMzksMCwwLDAsMi44Niw0LjE2TDIyLjExLDExLjgxSDEwYTIuNywyLjcsMCwwLDAtMi42OCwzWiIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGlkPSJfUGF0aF8xMCIvPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTEzLjEzLDIzLjkyaDUuNDNhNS4zOCw1LjM4LDAsMCwwLDUuMzItNC41bC43NS00LjQ5QTIuNjksMi42OSwwLDAsMCwyMiwxMS44SDEwYTIuNywyLjcsMCwwLDAtMi42OCwzbC40OSw0LjM0QTUuMzgsNS4zOCwwLDAsMCwxMy4xMywyMy45MloiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBpZD0iX1BhdGhfMTEiLz48cGF0aCBjbGFzcz0iY2xzLTYiIGQ9Ik0yOS4yOCwxMi40NmE2LjE4LDYuMTgsMCwwLDAtNS41NiwwIiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgaWQ9Il9QYXRoXzEyIi8+PC9nPjwvZz48L3N2Zz4=";
const admin_name = "Admin";
const user_name = name;

socket.emit('new-user', name)

socket.on('chat-message', data => {
  
  appendMessage(data.name, user_img, "left", data.message);

})

socket.on('user-connected', name => {

  var new_user_msg = `${name} has joined the chat!`
  appendMessage(admin_name, admin_img, "left", new_user_msg);

})

socket.on('user-disconnected', name => {
  var new_user_msg = `${name} has left the chat!`

  appendMessage(admin_name, admin_img, "left", new_user_msg);

})

socket.on('display', (data)=>{
  if(data.typing==true)
    $('.typing').text(`${data.user} is typing...`)
  else
    $('.typing').text("")
})


const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");


function sendBlast(name){
  //var number = prompt("Please enter the phone number you want to send a message to in the mentioned format!", "+12174199415");
  alert("Sending message to: +12174199415");
  var message = prompt("Please enter your message")
  //const send_msg = `Sending msg to ${number}`;

  if(message === ""){
    alert("The message field cannot be empty!");
    return ;
  }
  
  sms_URL = "https://it358-project.herokuapp.com/sendmessage?" + "name=" + name + "&message=" + message;

    fetch(sms_URL)
    .then(response => response.json())
    .then(response => {

      console.log("response", response);
      var output = `<p style="font-size:15px;"> <b> Script Result: <img width="15" height="15" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwNy4yIDUwNy4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDcuMiA1MDcuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMzJCQTdDOyIgY3g9IjI1My42IiBjeT0iMjUzLjYiIHI9IjI1My42Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMEFBMDZFOyIgZD0iTTE4OC44LDM2OGwxMzAuNCwxMzAuNGMxMDgtMjguOCwxODgtMTI3LjIsMTg4LTI0NC44YzAtMi40LDAtNC44LDAtNy4yTDQwNC44LDE1MkwxODguOCwzNjh6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI2MCwzMTAuNGMxMS4yLDExLjIsMTEuMiwzMC40LDAsNDEuNmwtMjMuMiwyMy4yYy0xMS4yLDExLjItMzAuNCwxMS4yLTQxLjYsMEw5My42LDI3Mi44DQoJCWMtMTEuMi0xMS4yLTExLjItMzAuNCwwLTQxLjZsMjMuMi0yMy4yYzExLjItMTEuMiwzMC40LTExLjIsNDEuNiwwTDI2MCwzMTAuNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM0OC44LDEzMy42YzExLjItMTEuMiwzMC40LTExLjIsNDEuNiwwbDIzLjIsMjMuMmMxMS4yLDExLjIsMTEuMiwzMC40LDAsNDEuNmwtMTc2LDE3NS4yDQoJCWMtMTEuMiwxMS4yLTMwLjQsMTEuMi00MS42LDBsLTIzLjItMjMuMmMtMTEuMi0xMS4yLTExLjItMzAuNCwwLTQxLjZMMzQ4LjgsMTMzLjZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /> <span style="color:green"> Success! </span></b> </p> </br>

      Sent message to +1217-419-9415 <br> <p> <i> Message: ${message} </i> </p>`

      appendMessage(admin_name, admin_img, "left", output);
      socket.emit('send-text', output)
      msgerInput.value = "";
    
    });
}


function runScript(scriptName, person_name) {

  let usernames = ['mark', 'john', 'gerald', 'mary']
  var matched_flag = false;

  usernames.forEach(myFunction);

  function myFunction(item, index) {
    if(item === person_name){
      matched_flag = true;
      console.log("matched ", item);

      var output = `<p style="font-size:15px; color:red;"> Script Output</p> </br>
      Script ran by: ${person_name} </br>
      <p style="font-size:15px; color:red;"> No permissions to run scripts!</p> </br>`

      appendMessage(admin_name, admin_img, "left", output);
      socket.emit('send-script-message-failure', output)
      msgerInput.value = "";
  
      return;

    }
  }
  
  if(matched_flag == true){
    return ;
  }

  console.log("script: ",scriptName)
  var URL = "https://it358-project.herokuapp.com/"
  //var URL = "https://it358-final-project.herokuapp.com/"
  //var URL = "https://it358-finalproject-chatapp.herokuapp.com/"
  console.log("url: ",URL);
  
  var split_string = scriptName.split("-");

  console.log(split_string);

  var script_URL = URL + split_string[1] + "/" + split_string[2] + "/" + split_string[3] + "/" + split_string[4];

  alert(`${split_string[1]} script invoked!`);

  console.log(script_URL);

  fetch(script_URL)
  .then(response => response.json())
  .then(response => {

      if(response.Error == null){
        var output = `<p style="font-size:15px;"> <b> Script Result: <img width="15" height="15" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUwNy4yIDUwNy4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDcuMiA1MDcuMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMzJCQTdDOyIgY3g9IjI1My42IiBjeT0iMjUzLjYiIHI9IjI1My42Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojMEFBMDZFOyIgZD0iTTE4OC44LDM2OGwxMzAuNCwxMzAuNGMxMDgtMjguOCwxODgtMTI3LjIsMTg4LTI0NC44YzAtMi40LDAtNC44LDAtNy4yTDQwNC44LDE1MkwxODguOCwzNjh6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTI2MCwzMTAuNGMxMS4yLDExLjIsMTEuMiwzMC40LDAsNDEuNmwtMjMuMiwyMy4yYy0xMS4yLDExLjItMzAuNCwxMS4yLTQxLjYsMEw5My42LDI3Mi44DQoJCWMtMTEuMi0xMS4yLTExLjItMzAuNCwwLTQxLjZsMjMuMi0yMy4yYzExLjItMTEuMiwzMC40LTExLjIsNDEuNiwwTDI2MCwzMTAuNHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTM0OC44LDEzMy42YzExLjItMTEuMiwzMC40LTExLjIsNDEuNiwwbDIzLjIsMjMuMmMxMS4yLDExLjIsMTEuMiwzMC40LDAsNDEuNmwtMTc2LDE3NS4yDQoJCWMtMTEuMiwxMS4yLTMwLjQsMTEuMi00MS42LDBsLTIzLjItMjMuMmMtMTEuMi0xMS4yLTExLjItMzAuNCwwLTQxLjZMMzQ4LjgsMTMzLjZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /> <span style="color:green"> Success! </span></b> </p> </br>
        Script ran by: ${person_name} </br>
        Result: ${response.response}
        </br>`
        
        
        appendMessage(admin_name, admin_img, "left", output);
        socket.emit('send-script-message', output)
        msgerInput.value = "";
      } else {
        alert(response.Error);
        var output = `<p style="font-size:15px;"> <b> Script Result: <img width="15" height="15" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTExLjk5OSA1MTEuOTk5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuOTk5IDUxMS45OTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNFNTAwMjc7IiBkPSJNNTAxLjQ0OSwzNjguOTE0TDMyMC41NjYsNjYuMjA3QzMwNi43NTEsNDMuMzg0LDI4Mi43MjgsMjkuNTY5LDI1NiwyOS41NjkNCglzLTUwLjc1MiwxMy44MTUtNjQuNTY3LDM2LjYzOEwxMC41NSwzNjguOTE0Yy0xMy44MTIsMjMuNzI1LTE0LjExMyw1MS45NTQtMC41OTksNzUuNjc4YzEzLjUxMywyMy43MjMsMzcuODM2LDM3LjgzOCw2NS4xNjUsMzcuODM4DQoJaDM2MS43NjZjMjcuMzI5LDAsNTEuNjUzLTE0LjExNSw2NS4xNjUtMzcuODM4QzUxNS41NjMsNDIwLjg2OCw1MTUuMjYyLDM5Mi42MzksNTAxLjQ0OSwzNjguOTE0eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0MxMDAxRjsiIGQ9Ik01MDIuMDQ5LDQ0NC41OTJjLTEzLjUxMywyMy43MjMtMzcuODM2LDM3LjgzOC02NS4xNjUsMzcuODM4SDI1NlYyOS41Nw0KCWMyNi43MjcsMCw1MC43NTIsMTMuODE1LDY0LjU2NywzNi42MzhMNTAxLjQ1LDM2OC45MTVDNTE1LjI2MiwzOTIuNjM5LDUxNS41NjMsNDIwLjg2OCw1MDIuMDQ5LDQ0NC41OTJ6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRkQwMDNBOyIgZD0iTTc1LjEwOSw0NTIuNGMtMTYuNjI4LDAtMzAuODUxLTguMjctMzkuMDYzLTIyLjY2OWMtOC4yMTEtMTQuNDE0LTguMDY1LTMxLjA4NywwLjQ2OS00NS43Mg0KCUwyMTcuMjMsODEuNTQ5YzguMjctMTMuNjY2LDIyLjgxNi0yMS45NTEsMzguNzY5LTIxLjk1MXMzMC41LDguMjg0LDM4Ljg4NywyMi4xNTdsMTgwLjc0NSwzMDIuNDkNCgljOC4zODgsMTQuNCw4LjUzNCwzMS4wNzIsMC4zMjIsNDUuNDg1Yy04LjIxMSwxNC40LTIyLjQzNSwyMi42NjktMzkuMDYzLDIyLjY2OUg3NS4xMDlWNDUyLjR6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojRTUwMDI3OyIgZD0iTTQzNi44OTEsNDUyLjRjMTYuNjI4LDAsMzAuODUxLTguMjcsMzkuMDYzLTIyLjY2OWM4LjIxMS0xNC40MTQsOC4wNjUtMzEuMDg3LTAuMzIyLTQ1LjQ4NQ0KCUwyOTQuODg2LDgxLjc1NGMtOC4zODgtMTMuODcxLTIyLjkzMy0yMi4xNTctMzguODg3LTIyLjE1N1Y0NTIuNEg0MzYuODkxeiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0UxRTRGQjsiIGQ9Ik0yODYuMDMsMTUyLjA5NXYxMjAuMTIyYzAsMTYuNTE3LTEzLjUxNCwzMC4wMy0zMC4wMywzMC4wM3MtMzAuMDMxLTEzLjUxNC0zMC4wMzEtMzAuMDNWMTUyLjA5NQ0KCWMwLTE2LjUxNywxMy41MTQtMzAuMDMxLDMwLjAzMS0zMC4wMzFTMjg2LjAzLDEzNS41NzgsMjg2LjAzLDE1Mi4wOTV6Ii8+DQo8cGF0aCBzdHlsZT0iZmlsbDojQzVDOUY3OyIgZD0iTTI4Ni4wMywxNTIuMDk1djEyMC4xMjJjMCwxNi41MTctMTMuNTE0LDMwLjAzLTMwLjAzLDMwLjAzVjEyMi4wNjQNCglDMjcyLjUxNiwxMjIuMDY0LDI4Ni4wMywxMzUuNTc4LDI4Ni4wMywxNTIuMDk1eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0UxRTRGQjsiIGQ9Ik0yNTYsMzMyLjI3OGMtMjQuOTI2LDAtNDUuMDQ2LDIwLjExOS00NS4wNDYsNDUuMDQ2YzAsMjQuOTI0LDIwLjExOSw0NS4wNDYsNDUuMDQ2LDQ1LjA0Ng0KCXM0NS4wNDYtMjAuMTIxLDQ1LjA0Ni00NS4wNDZDMzAxLjA0NiwzNTIuMzk4LDI4MC45MjUsMzMyLjI3OCwyNTYsMzMyLjI3OHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNDNUM5Rjc7IiBkPSJNMzAxLjA0NiwzNzcuMzIzYzAsMjQuOTI0LTIwLjExOSw0NS4wNDYtNDUuMDQ2LDQ1LjA0NnYtOTAuMDkxDQoJQzI4MC45MjUsMzMyLjI3OCwzMDEuMDQ2LDM1Mi4zOTgsMzAxLjA0NiwzNzcuMzIzeiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" /><span style="color:red"> Failure! </span></b> </p> </br>

        Script ran by: ${person_name} </br>
        Result: ${response.Error}
        </br>`
        
        appendMessage(admin_name, admin_img, "left", output);
        socket.emit('send-script-message', output)
        msgerInput.value = "";
      }
});
}


msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  console.log(msgText);
  if (!msgText) return;

  if (msgText.includes("script")){
    //call Perform URL fetch function to output the script values

    output = runScript(msgText, user_name);
    msgerInput.value = "";

  } else if (msgText.includes("send-message")){
    //call sendblast function to send an SMS to the entered number!
    sendBlast(user_name);

  } else {
    //else pass the message to the chat window
    appendMessage(user_name, user_img, "right", msgText);
    socket.emit('send-chat-message', msgText)
    msgerInput.value = "";
  }

});

function appendMessage(name, img, side, text) {
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(admin_name, admin_img, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
