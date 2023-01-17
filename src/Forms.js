import React from 'react'
export default class Forms extends React.Component{

    submit(){
        console.log(this.state)
    }
    render(){
        return (
            <div>
                <h2>Form</h2>
                <label>Name : </label>
                <input 
                type="text" 
                name="name" 
                onChange={(e)=>{this.setState({name:e.target.value})}}
                /><br></br>
                <label>Email : </label>
                <input 
                type="text" 
                name="email" 
                onChange={(e)=>{this.setState({email:e.target.value})}}

                /><br></br>
                <label>Gender : </label>
                <label>Male</label>
                    <input

                type="radio"
                name="gender"
                value="male"
                onChange={(e)=>{this.setState({gender:e.target.value})}}               
                />         
                <label>Female</label>
                <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e)=>{this.setState({gender:e.target.value})}}
                /> <br></br>
                <label>Number : </label>
                <input 
                type="text" 
                name="number"  
                onChange={(e)=>{this.setState({number:e.target.value})}}
                /><br></br>
                <button onClick={()=>this.submit()}>Submit</button>
            </div>
            
        )
    }
}