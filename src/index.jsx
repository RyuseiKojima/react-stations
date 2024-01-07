import * as ReactDOM from 'react-dom/client'
import { App } from './App'

// DOM要素を取得
const root = document.getElementById('root')
// DOM要素をReactDOM.createRootに渡す
const reactRoot = ReactDOM.createRoot(root)
// <App />コンポーネントをレンダリング
reactRoot.render(<App />)
