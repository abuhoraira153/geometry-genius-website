function triangleCalculateArea() {
  // get triangle base
  const triangleBaseInputField = document.getElementById("triangle-base");
  const triangleBaseInputText = triangleBaseInputField.value;
  const base = parseFloat(triangleBaseInputText);

  //   get triangle height
  const triangleHeightInputField = document.getElementById("triangle-height");
  const triangleHightInputText = triangleHeightInputField.value;
  const height = parseFloat(triangleHightInputText);

  // get triangle area(A)
  const triangleArea = 0.5 * base * height;
  console.log(triangleArea);

  //display triangle area
  const displayTriangleArea = document.getElementById("triangle-area");
  displayTriangleArea.innerText = triangleArea;
}
