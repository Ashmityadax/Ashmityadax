<!DOCTYPE html>
<html>
  <head>
    <title>Bulb Control</title>
  </head>
  <body>
    <h1>Bulb Control</h1>
    <button id="on-button">Turn on</button>
    <button id="off-button">Turn off</button>
    <script>
      // This is where you would put the code to connect to the bulb control backend
      // and interact with the buttons to control the bulb.

      // Example of connecting to the backend using JavaScript fetch API
      document.getElementById("on-button").addEventListener("click", function() {
        fetch("/bulb/on")
          .then(response => response.json())
          .then(data => alert(data.message));
      });

      // Example of connecting to the backend using JavaScript fetch API
      document.getElementById("off-button").addEventListener("click", function() {
        fetch("/bulb/off")
          .then(response => response.json())
          .then(data => alert(data.message));
      });
    </script>
  </body>
</html>
