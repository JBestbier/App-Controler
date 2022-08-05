import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { InputGroup, Row, Col} from 'react-bootstrap';
import axios from 'axios';


// start of AppForm component
class AppForm extends Component {

    // Constructors
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            url: ''
        }

    }

    // function to show hidden form
    handleVisibility = e => {
        document.getElementsByClassName('formInsert')[0].style.visibility = 'visible';
    }


    // function to handle change and update values of state props
    handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    }


    // function to handle submit and add new row to projects
    handleSubmit = (e) => {
        console.log(this.state)

        axios.post('http://localhost:3000/apps', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }


    // start of rendering for front-end elements
    render() {

    const {title, description, url} = this.state

    return ( 

        <div className = "App">

        {/* button to trigger handle visivility */}
        <button
        onClick={this.handleVisibility}>Add Project</button>

        <br/>

        {/* start of form to add new project to table */}
        <form className='formInsert' style={{visibility: 'hidden'}}>

        <h2>Insert new row</h2>

        <Row>

            <Col sm="4">
            <Form.Label htmlFor="inlineFormInput">
                App Title
            </Form.Label>
            <Form.Control
                name='title'
                id="inlineFormInput"
                placeholder="Please enter a title..."
                value={title}
                onChange={this.handleChange}
            />
            </Col>

            <Col sm="4">
            <Form.Label htmlFor="inlineFormInputGroup">
                App Description
            </Form.Label>
            <InputGroup className="mb-2">
                <Form.Control 
                id="inlineFormInputGroup" 
                placeholder="Please enter a desc..." 
                name='description'
                value={description}
                onChange={this.handleChange}
                />
            </InputGroup>
            </Col>

            <Col xs="4">
            <Form.Label htmlFor="inlineFormInputGroup">
                App Url
            </Form.Label>
            <InputGroup className="mb-2">
                <Form.Control 
                id="inlineFormInputGroup" 
                placeholder="Please enter an url..." 
                name='url'
                value={url}
                onChange={this.handleChange}
                />
            </InputGroup>
            </Col>

        </Row>

        <br/>

        {/* button to trigger handle submit function */}
        <button type="submit" onClick={this.handleSubmit}>Submit</button>

        </form>
        
        <br/>

        </div>

    )};
}

// export of functions and elements of AppForm component
export default AppForm;