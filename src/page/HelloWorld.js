import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        nama: 'Code',
        age:16,
        gender:'famele',
        number:0

    }
    
    componentDidMount(){
        this.setState({
            nama: 'Halooooooooo',
            age:'50',
            gender: 'woman'

        })
    }


    handleAddValue(){
        this.setState({
            number:
            this.state.number +1
        })
    }

    handleMinValue(){
        if(this.state.number>0){
            this.setState({
                number:
                this.state.number-1
            })
        }
    }

    handleResetValue(){
        this.setState({
            number:0
        })
    }
    render(){
        return (
            <div>
                <h1>HelloWorld {this.state.name} my age is: {this.state.age} my gender is :{this.state.gender} </h1>
            <div>
                <h1><b>{this.state.number}</b></h1>

                <button onClick={()=> this.handleAddValue()}>tambahkan1</button>
                <button onClick={()=> this.handleMinValue()}>kurang1</button>
                <button onClick={()=> this.handleResetValue()}>reset</button>
            </div>
            </div>
        )
    }
}

export default HelloWorld;