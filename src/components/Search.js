import React, { useState } from 'react'

export default function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState('')
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    const handleSubmit = () => {
        cb(value)
    }
    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input className=' blue-grey darken-1 white-text'
                    style={{ paddingLeft: 5 }}
                    type='search'
                    id='search-filed'
                    placeholder='Search...'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value} />
                <button className='btn'
                    style={{
                        position: 'absolute',
                        top: 5,
                        right: 10
                    }}
                    onClick={handleSubmit} >Search</button>
            </div>

        </div>
    )
}
