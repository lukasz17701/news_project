import { h } from 'preact'
import './MainLayout.scss'

const MainLayout = ({children}) => (
    <div className="mainLayout">
        {children}
    </div>
)

export default MainLayout
