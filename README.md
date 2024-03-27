<!DOCTYPE html>
<html>
<head>
	<title>Light On/Off</title>
	<style>
		body {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100vh;
			background: #eee;
		}
 		.switch {
			position: relative;
			display: inline-block;
			width: 60px;
			height: 34px;
		}
		.switch input {
			display: none;
		}
		.slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: #ccc;
			-webkit-transition: 0.4s;
			transition: 0.4s;
		}
		.slider:before {
			position: absolute;
			content: "";
			height: 26px;
			width: 26px;
			left: 4px;
			bottom: 4px;
			background: #fff;
			-webkit-transition: 0.4s;
			transition: 0.4s;
		}
		input:checked + .slider {
			background: #4caf50;
		}
		input:focus + .slider {
			box-shadow: 0 0 1px #4caf50;
		}
		input:checked + .slider:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}
		.slider.round {
			border-radius: 34px;
		}
		.slider.round:before {
			border-radius: 50%;
		}
	</style>
</head>
<body>
	<label class="switch">
		<input type="checkbox" onclick="toggleLight(this)">
		<span class="slider round"></span>
	</label>
	
	<div class="light-on" style="display: none;">
		<span class="bulb"></span>
		<span class="light-on-message">Light On</span>
	</div>
	<div class="light-off" style="display: block;">
		<span class="bulb"></span>
		<span class="light-off-message">Light Off</span>
	</div>

	<script>
		function toggleLight(element) {
			if (element.checked) {
				document.querySelector('.light-on').style.display = 'block';
				document.querySelector('.light-off').style.display = 'none';
			}
			else {
				document.querySelector('.light-off').style.display = 'block';
				document.querySelector('.light-on').style.display = 'none';
			}
		}
	</script>

</body>
</html>
