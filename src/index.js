import { h, render } from 'preact'
import News from './screens/News/News'

const App = () => (
    <div>
        <News/>
    </div>
)

render(<App/>, document.body)
