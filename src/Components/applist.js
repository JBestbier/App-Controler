import React from 'react';
import 'react-responsive-modal/styles.css';
import Form from 'react-bootstrap/Form'
import { InputGroup, Row, Col} from 'react-bootstrap';
import axios from 'axios';


// Start of class component
class Appslist extends React.Component {

    // constructors
    constructor(props) {
        super(props);
        this.state = {
            apps: [],
            IsApiError: false
        }
        this.state = {
            title: '',
            description: '',
            url: ''
        }
    }

    // validation to check if page has loaded and load contents of JSON file
    componentDidMount() {
        fetch("http://localhost:3000/apps")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        apps: result
                    });
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }


    // function to update constructor values
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    // function to handle submit of new values and update current contents
    handleSubmit = (e) => {
        var id = document.getElementById('idEdit').innerHTML

        console.log(id)

        axios.put(`http://localhost:3000/apps/${id}`, this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // function to add the id and also display hidden form
    handleEdit = (e) => {
        var id = e.target.parentNode.parentNode.id

        document.getElementById('idEdit').innerHTML = id
        document.getElementsByClassName('form')[0].style.visibility = 'visible';
    }


    // function to handle the delete button and remove selected row
    handleDelete = (e) => {
        var id = e.target.parentNode.parentNode.id

        axios.delete(`http://localhost:3000/apps/${id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

        window.location.reload()
    }

    //components rendered for front-end user 
    render() {

        const {title, description, url} = this.state

        var appslist = this.state.apps;
        if (appslist && appslist.length > 0) {

        return (

            <div>

                {/* table contents */}
                <table className="table">

                    {/* table header */}
                    <thead>
                        <tr>
                            <th>Nr #</th>
                            <th>App title</th>
                            <th>App description</th>
                            <th>App URL</th>
                            <th></th>
                        </tr>
                    </thead>

                    {/* table body contents */}
                    <tbody>
                        {appslist.map(app => (
                            <tr key={app.id} id={`${app.id}`}>
                                <td>{app.id}</td>
                                <td>{app.title}</td>
                                <td>{app.description}</td>
                                <td>{app.url}</td>
                                <td>
                                    <button
                                    onClick={this.handleEdit}>
                                        Edit Contents
                                    </button>
                                </td>
                                <td>
                                    <button
                                    onClick={this.handleDelete}>
                                        Delete Row
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                <br/>

                {/* Hidden form to edit current contents in table */}
                <form className='form' onSubmit={this.handleSubmit} style={{visibility: 'hidden'}}>

                <h2>Edit Nr # :</h2>

                    <Row>

                        <Col sm="1">
                        <Form.Label htmlFor="inlineFormInput">
                            App Nr
                        </Form.Label>
                        <p 
                        id="idEdit"></p>
                        </Col>

                        <Col sm="3">
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

                    {/* submit button to triger submit handle */}
                    <button type="submit" onClick={this.handleSubmit}>Update</button>

                </form>

            </div>
        )
        }
        else {
            return (<div>No Record Found</div>)
        }
    }
}


// Export App functions and elements
export default Appslist;