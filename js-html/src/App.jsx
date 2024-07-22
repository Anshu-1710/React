const App = ()=>{
  const name = "Anshu";
  const date = new Date();
  const currentYear = date.getFullYear();
  return(
    <div>
      <p>Your Name {name}</p>
      <p>Copyright {currentYear} </p>
    </div>
  )
}

export default App