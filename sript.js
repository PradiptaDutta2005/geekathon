<script>
    document.getElementById('diseasePredictionForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        var age = parseInt(document.getElementById('age').value);
        var gender = document.getElementById('gender').value;
        var bloodPressure = parseInt(document.getElementById('bloodPressure').value);
        var cholesterol = parseInt(document.getElementById('cholesterol').value);
        var heartRate = parseInt(document.getElementById('heartRate').value);

        // Perform prediction
        var predictionResult = predictDisease(age, gender, bloodPressure, cholesterol, heartRate);

        // Display prediction result
        var resultDiv = document.getElementById('predictionResult');
        resultDiv.innerHTML = "<h2>Prediction Result:</h2><p>" + predictionResult + "</p>";
    });

    function predictDisease(age, gender, bloodPressure, cholesterol, heartRate) {
        // Perform prediction logic here
        // This is just a simple placeholder logic, you should replace it with your actual prediction algorithm
        var riskScore = 0;

        // Adjust risk score based on input values
        if (age > 50) {
            riskScore += 10;
        }

        if (gender === 'male') {
            riskScore += 5;
        }

        if (bloodPressure > 140) {
            riskScore += 15;
        }

        if (cholesterol > 200) {
            riskScore += 20;
        }

        if (heartRate > 100) {
            riskScore += 10;
        }

        // Determine risk level based on risk score
        if (riskScore >= 30) {
            return "The patient is at high risk of heart disease.";
        } else if (riskScore >= 15) {
            return "The patient is at moderate risk of heart disease.";
        } else {
            return "The patient is at low risk of heart disease.";
        }
    }
</script>
