import React, { useState } from 'react'


const Input = () => {
    const [user, setUser] =
        useState({
            name: "",
            email: "",
            gender: "",
            number: ""
        })
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })
    }
    const handleBlur = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...user, [name]: value })

        console.log(name, value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log([user])
    }


    return (

        <form action='' onSubmit={handleSubmit}>
            <div>
                <label>Name  </label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInput}
                    onBlur={handleBlur}
                >
                </input>

            </div>
            <div>
                <label>Email  </label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    onBlur={handleBlur}
                ></input>
            </div>
            <div>
                <label>Gender  </label>
                <label>Male</label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleInput}
                    onBlur={handleBlur}

                ></input>
                <label>Female</label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInput}
                    onBlur={handleBlur}

                ></input>
            </div>
            <div>
                <label>Number  </label>
                <input
                    type="number"
                    name="number"
                    value={user.number}
                    onChange={handleInput}
                    onBlur={handleBlur}

                ></input>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Input