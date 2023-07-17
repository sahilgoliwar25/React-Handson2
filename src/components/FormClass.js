import React, { Component } from 'react'
import './FormClass.css'

export default class FormClass extends Component {
    state={
        Name: '',
        Dept: '',
        Rating:'',
        EmpData: []
    }
    changeHandle=(event)=>{
        this.setState({[event.target.name] : event.target.value})
    }
    clickHandle=()=>{
        let newObj={
            name:this.state.Name,
            dept:this.state.Dept,
            rating:this.state.Rating
        }
        this.state.EmpData.push(newObj);
        this.setState({EmpData : this.state.EmpData});
        // console.log(this.state.EmpData);
        this.setState({Name : ''});
        this.setState({Dept : ''});
        this.setState({Rating : ''});
        

    }
  render() {
    return (
        <div className='body-container'>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form>
                <>
                <label htmlFor='name'>Name: </label>
                <input id='name' type='text' placeholder='Enter Name' name='Name' value={this.state.Name} onChange={this.changeHandle} required/><br/>
                </>
                <>
                <label htmlFor='dept'>Department: </label>
                <input id='dept' type='text' placeholder='Enter Department' name='Dept' value={this.state.Dept} onChange={this.changeHandle} required/><br/>
                </>
                <>
                <label htmlFor='rating'>Rating: </label>
                <input id='rating' type='text' placeholder='Enter Rating' name='Rating' value={this.state.Rating} onChange={this.changeHandle} required/><br/>
                </>
                <button className='css-button-neumorphic' onClick={this.clickHandle} type='button'>Submit</button>
            </form>
            <div className='display-container'>
            {this.state.EmpData.map((item,index) =>{
                return(
                    <div className='elements-container' key={index}>
                        <div>Name: {item.name} | Department: {item.dept} | Rating: {item.rating}</div>
                        
                    </div>
                )
            })}
            </div>
      </div>
    )
  }
}
