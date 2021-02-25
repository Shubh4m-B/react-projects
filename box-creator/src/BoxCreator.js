import React, { Component } from 'react'

export class BoxCreator extends Component {

    constructor(props){
        super(props);
        this.state = {
            height:"",
            width:"",
            color:""
        }
        this.handelChange = this.handelChange.bind(this);
        this.handelSubmit = this.handelSubmit.bind(this); 
    }

    handelChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }

    handelSubmit(evt){
        evt.preventDefault();
        this.props.createBox(this.state);
        this.setState({
            height:"",
            width:"",
            color:""
        })
    }

    render() {
        return (
            <div>
                <h3>Enter Box Detail</h3>
                <form onSubmit = {this.handelSubmit}>
                    <div>
                        <label htmlFor="height">HEIGHT(In px):</label>
                        <input 
                            name="height"
                            id="height"
                            value={this.state.height}
                            onChange={this.handelChange}
                            placeholder="height"
                        />
                    </div>
                    <div>
                        <label htmlFor="width">WIDTH(In px):</label>
                        <input 
                            name="width"
                            id="width"
                            value={this.state.width}
                            onChange={this.handelChange}
                            placeholder="width"
                        />
                    </div>
                    <div>
                        <label htmlFor="color">COLOR:</label>
                        <input 
                            name="color"
                            id="color"
                            value={this.state.color}
                            onChange={this.handelChange}
                            placeholder="color"
                        />
                    </div>
                    <button>CREATE BOX</button>
                </form>
            </div>
        )
    }
}

export default BoxCreator
