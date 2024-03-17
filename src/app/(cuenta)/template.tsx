"use client"
import { useState } from "react"

export default function ProfileLayout ({ children }: {children: React.ReactNode}) {
    
    const [input, setInput] = useState("")
    
    return (
        <>  
            <h2>Rutas relativas a la cuenta del usuario</h2>
            <p>Diferecias entre Layout y Template</p>
            {children}
            <input type="text" value={input} onChange={e=> setInput(e.target.value)} />
        </>
    )
}