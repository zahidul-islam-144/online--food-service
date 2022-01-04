import React from 'react'
import { Form } from 'react-bootstrap';
 
class Datepicker extends React.Component{
    render(){

    return (
        <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="doj">
                            <Form.Label className='text-primary'>Pick Date & Time for Purchase </Form.Label>
                            <Form.Control className='border border-3 border-primary rounded-pill'
                                 type="date" 
                                 name="doj" 
                                 defaultValue={this.props.selectedValue} 
                                 placeholder="Date of Joining" 
                                 onChange={(e) => this.props.onChange(e)} />
                        </Form.Group>
                    </div>
                </div>
            </div>
    );
    }
};

export default Datepicker;