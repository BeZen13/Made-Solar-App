import { useState } from 'react'
//attempt to make a custom hook!

export const useInput = initialVal => {
    const [ value, setValue ] = useState(initialVal)

    return{
        value,
        setValue,
        reset: () => setVal(""),
        bind: {
            value,
            onChange: e => {
                setVal(e.target.value)
            }
        }
    }
}