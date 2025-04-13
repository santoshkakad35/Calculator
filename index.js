function getInputValue() {
    const input = document.getElementById("inputField").value.trim();
    const isValid = /^[0-9+\-*/().\s]+$/.test(input);

    if (isValid) {
        try {
            const result = math.evaluate(input);
            document.getElementById("output").textContent = `Result: ${result}`;
            console.log("Evaluated value:", result);
        } catch (error) {
            alert("Error evaluating expression: " + error.message);
        }
    } else {
        alert("Invalid input. Please enter a valid mathematical expression.");
    }
}


function appendValue(val) {
    const input = document.getElementById("inputField");
    input.value += val
}

function clearText() {
    document.getElementById("inputField").value = ""; // Clear the input field
    document.getElementById("output").textContent = ""; // Clear the output field
}