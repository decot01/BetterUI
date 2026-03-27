import { Button } from './components/Button'
import './App.css'

const HeartSvg = `<svg viewBox="0 0 22 17" xmlns="http://www.w3.org/2000/svg" width="22.5" height="17"><path fill-rule="evenodd" d="M10.1863 17C5.47623 15.6278 -0.978755 11.92 0.124708 4.82672C1.11674 -1.54371 8.81923 -0.395855 11.0008 1.45942C13.1824 -0.395855 20.8848 -1.54371 21.876 4.82672C22.9794 11.92 16.5272 15.6278 10.1863 17Z" /></svg>`

function App() {
  return (
    <div className="app">
      <Button
        Url=""
        SubClass="example"
        Svg={HeartSvg}
        Text='Simple bu<span style="letter-spacing: 0.3px;">t</span>ton'
      />
    </div>
  )
}

export default App
