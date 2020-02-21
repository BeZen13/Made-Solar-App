import { useState } from 'react'
//attempt to make a custom hook!

export const useInput = initialValue => {
    const [ value, setValue ] = useState(initialValue)

    return{
        value,
        setValue,
        reset: () => setValue(""),
        bind: {
            value,
            onChange: e => {
                setValue(e.target.value)
            }
        }
    }
}