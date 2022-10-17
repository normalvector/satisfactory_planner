import * as React from 'react'
import { createRoot } from 'react-dom/client'

const s: string = "Hello word"
console.log(`I said ${s}`)

const rootElement = document.getElementById('app')
if (!rootElement) {
    console.error("Cannot find HTML div with ID 'app'")
} else {
    const root = createRoot(rootElement)
    root.render(<h1>Hello World</h1>)
}