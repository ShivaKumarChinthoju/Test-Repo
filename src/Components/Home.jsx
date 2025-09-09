import React, { useState } from 'react'
import viteLogo from "../assets/react.svg"
import { ImageWithLoader } from './Imagewithloader'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [count, setCount] = useState(0)
    const navigate = useNavigate()

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={viteLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button style={{ marginLeft: "10px" }} onClick={() => navigate("/globe")}>
                    Open Globe
                </button>
                <button style={{ marginLeft: "10px" }} onClick={() => navigate("/map")}>
                    Open Map
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div className="image-wrapper">
                <ImageWithLoader
                    src="https://wallpaperaccess.com/full/6853466.jpg"
                    placeholder="https://wallpaperaccess.com/full/6853466.jpg"
                    alt="Mountain Landscape"
                />

            </div>
        </>
    )
}

export default Home