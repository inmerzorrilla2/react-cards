
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <div>
      <h1>CARDS</h1>
      <div className="cards">
        <Card 
        color = "red"
        title = "Card 1"
        />
        <Card 
        
        color = "blue"
        title = "Card 2"
        />
        <Card
        
        color = "green"
        title = "Card 3"
        />
      </div>
      
    </div>
  )
}

export default App
