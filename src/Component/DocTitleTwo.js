import React, { useCallback, useEffect, useState } from 'react'

function DocTitleTwo(){
    const[count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count - ${count}`
    },[count])

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>Click - {count}</button>
        </div>
    )
}

export default DocTitleTwo;