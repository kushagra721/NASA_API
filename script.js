fetch(
    "https://api.nasa.gov/planetary/apod?api_key=XCKKJoH9pAIHLpY9XLOHG1a2feYnjp6JCLdaQjag&date=2023-03-30"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let nasadata = "";
      // console.log(data);

      for (let i in data) {
        //console.log(key,value);
        nasadata = `
        <img src="${data.hdurl}"></img>
        <h2>${data.title}</h2>
        <p>${data.explanation}</p>
        
        `;
        //console.log(data.title)
      }
      document.getElementById("container").innerHTML = nasadata;
    });




function getDate() {

  
 
  const dateInput = document.getElementById("start");
  const selectedDate = dateInput.value;
  
  localStorage.setItem("date", selectedDate);
  

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=XCKKJoH9pAIHLpY9XLOHG1a2feYnjp6JCLdaQjag&date=${localStorage.getItem(
      "date"
    )}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let nasadata = "";
      // console.log(data);

      for (let i in data) {
        //console.log(key,value);
        nasadata = `
        <img src="${data.hdurl}"></img>
        <h2>${data.title}</h2>
        <p>${data.explanation}</p>
        
        `;
        //console.log(data.title)
      }
      document.getElementById("container").innerHTML = nasadata;
    });

//   let history="";
//   history+=selectedDate;
//   document.getElementById("history").innerHTML=history;
  
   
  
  
}






//    var selectedDate = new Date().toISOString().split("T")[0];
//   console.log(selectedDate)


