function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var resultElement = document.getElementById("result");
  
    if (temperatureInput === "" || isNaN(temperatureInput)) {
      resultElement.textContent = "Please enter a valid temperature.";
      return;
    }
  
    var temperature = parseFloat(temperatureInput);
    var result = "";
  
    if (unitSelect === "celsius") {
      var fahrenheit = (temperature * 9) / 5 + 32;
      var kelvin = temperature + 273.15;
      result = temperature + "°C is equal to " + fahrenheit.toFixed(2) + "°F or " + kelvin.toFixed(2) + "K.";
    } else if (unitSelect === "fahrenheit") {
      var celsius = ((temperature - 32) * 5) / 9;
      var kelvin = ((temperature - 32) * 5) / 9 + 273.15;
      result = temperature + "°F is equal to " + celsius.toFixed(2) + "°C or " + kelvin.toFixed(2) + "K.";
    } else if (unitSelect === "kelvin") {
      var celsius = temperature - 273.15;
      var fahrenheit = (temperature - 273.15) * 1.8 + 32;
      result = temperature + "K is equal to " + celsius.toFixed(2) + "°C or " + fahrenheit.toFixed(2) + "°F.";
    }
  
    resultElement.textContent = result;
  }
  
