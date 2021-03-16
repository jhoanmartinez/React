import React from 'react'

function Hello(data) {
    console.log(data)
    return (
        <div>
            <h1>Hello {data.name} a.k.a.  {data.heroName} {data.lastName}</h1>
            {data.children}
        </div>
    )
}

export default Hello
