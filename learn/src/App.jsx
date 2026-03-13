import Card from "./components/Card"
function App() {
  const arr = [{name:"manu", age: 22},{name:"Tanu",age: 20}, {name:"Shiva", age:18}]
  return (
    <div className="app">
      {arr.map((ele)=> <Card/>)}
    </div>
  )
}

export default App
