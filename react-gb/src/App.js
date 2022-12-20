import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/func/Form'
import './App.css'

export function App() {
    const [toggle, setToggle] = useState(true)
    const [arr, setArr] = useState([{ name: 'Biba' }, { name: 'Boba' }, { name: 'Giga' }, { name: 'Goga' }])
    return (
        <>
            <Form />
            <hr />
            <button className='hide-show' onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
            {toggle && <FormFunc title='Function Component!' />}
            <ul>
                {arr.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

