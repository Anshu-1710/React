const App = () =>{
  let greet = "";
  let color = "black";
  const date = new Date();
  let hours = date.getHours();
  if (hours >0 && hours < 12){
    greet = "Good Morning"
    color = "red";
  }
  else if (hours >= 12 && hours <18){
    greet = "Good afternoon"
    color = "green"
  }
  else{
    greet = "good eve!"
    color = "blue"
  }
  return(
    <div>
      <h1 style={{color:color, backgroundColor:"lightblue"}}>{greet}</h1>
    </div>
  )
}

export default App