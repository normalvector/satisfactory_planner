import * as React from 'react'
import { createRoot } from 'react-dom/client'
import SatisfactoryPlanner from './components/satisfactory_planner'

const s: string = "Hello word"
console.log(`I said ${s}`)

const rootElement = document.getElementById('app')
if (!rootElement) {
    console.error("Cannot find HTML div with ID 'app'")
} else {
    const root = createRoot(rootElement)
    root.render(
        <SatisfactoryPlanner />
    )
}