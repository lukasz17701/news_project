import { h, render } from 'preact'
import News from './screens/News/News'
import MainLayout from "./layouts/MainLayout/MainLayout"

const App = () => (
    <MainLayout>
        <News/>
    </MainLayout>
)

render(<App/>, document.body)
