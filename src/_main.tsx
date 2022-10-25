import * as React from 'react'
import { createRoot } from 'react-dom/client'
import SatisfactoryPlanner from './components/satisfactory_planner'

interface TestP {
    msg: string
}
function TestComponent(prope: TestP): React.ReactElement {
    const { msg } = prope
    return <h1>TEST! ${msg}</h1>
}
const testHTML = "<TestComponent msg='hello'/>"

const rootElement = document.getElementById('app')
if (!rootElement) {
    console.error("Cannot find HTML div with ID 'app'")
} else {
    const root = createRoot(rootElement)
    root.render(
        <div dangerouslySetInnerHTML={{ __html: testHTML }}></div>
    )
    root.render(
        <SatisfactoryPlanner />
    )
}