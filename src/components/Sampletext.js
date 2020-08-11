import React, { Component } from 'react'
import axios from 'axios'

class Sampletext extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            param : 5,
            sampleText : []
        }
    }
    componentDidMount() {
        this.getSampleText();
    }

    getSampleText = () =>{
        axios.get(`https://hipsum.co/api/?type=hipster-centric&paras=${this.state.param} | jq`)
        .then( res => {
            this.setState({
                sampleText : res.data
            })
        })
        .catch(err => alert(err))

    }
    changeValue = (e) => {
        this.setState({
            param : e.target.value
        }, this.getSampleText)
    }
    render() {
        return (
            <>
                <h1>React JS Sample Text App</h1>
                <form id='form'>
                    <label>No.of.Paragraph</label>
                    <input type='number' value={this.state.param} onChange = {this.changeValue}/>
                </form>
                <div>
                    {
                        this.state.sampleText.map(text => <p>{text}</p>)
                    }
                </div>
            </>
            )
    }
}


export default Sampletext
