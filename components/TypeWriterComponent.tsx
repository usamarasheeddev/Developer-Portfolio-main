import React from 'react'
import Typewriter from 'typewriter-effect';

export default function TypeWriterComponent() {
    return (
        <div>
            <Typewriter
                options={{
                    strings: [
                        "MERN Stack Developer",
                        "React Js Developer",
                        "Node Js Developer",
                        "Software Engineer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    
                }}
            />
        </div>
    )
}
