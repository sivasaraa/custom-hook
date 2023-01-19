import React, { useCallback, useEffect, useState } from 'react'
import useDocTitle from '../CustomHooks/useDocTitle';

function DocTitleTwo(){
    const[count, setCount] = useState(0)

    useDocTitle(count)

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>Click - {count}</button>
        </div>
    )
}

export default DocTitleTwo;