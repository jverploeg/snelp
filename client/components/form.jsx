import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/button';

const Start = (props)=> {
  //const { reports } = props;
  // state
  const [newSnow, setNewSnow] = useState(0);
  const [isOpen, setOpen] = useState(0);
  const [base, setBase] = useState(0);
  const [history, setHistory] = useState(0);
  const [distance, setDistance] = useState(0);

  //modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //handleChange = (e) => this.setState({name: e.target.value})
  // utility methods
  const handleChange = (e) => {
    // e.preventDefault();
    //console.log(e.target)
    const name = e.target.name;
    console.log({name})
    const value = Number(e.target.value);
    console.log({value})
    if (name === 'snow') {
      setNewSnow(value);
    } else if (name === 'open') {
      setOpen(value);
    } else if (name === 'base') {
      setBase(value);
    } else if (name === 'history') {
      setHistory(value);
    } else if (name === 'distance') {
      setDistance(value);
    }
  };
  const handleSubmit = () => {
    let data = {
      snow: newSnow,
      open: isOpen,
      base: base,
      history: history,
      distance: distance,
    };
    //console.log({data});
    props.onChange(data);
    handleClose();
  }




  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Let's Get Started!!!
      </Button>
    <Modal
        show={show}
        onHide={handleClose}
    >
        <Modal.Header>
          <Modal.Title>Select What Is Important</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="new-snow">
              <Form.Label>New Snow</Form.Label>
              {/* <Form.Check inline label="0" value='0' type="checkbox" name="snow" onChange={handleChange} /> */}
              <Form.Check inline label="1" value="1" type="checkbox" name="snow" onChange={handleChange} />
              <Form.Check inline label="2" value="2" type="checkbox" name="snow" onChange={handleChange} />
              <Form.Check inline label="3" value="3" type="checkbox" name="snow" onChange={handleChange} />
              <Form.Check inline label="4" value="4" type="checkbox" name="snow" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="area-open">
              <Form.Label>Area Open</Form.Label>
              {/* <Form.Check inline label="0" value='0' type="checkbox" name="open" onChange={handleChange} /> */}
              <Form.Check inline label="1" value="1" type="checkbox" name="open" onChange={handleChange} />
              <Form.Check inline label="2" value="2" type="checkbox" name="open" onChange={handleChange} />
              <Form.Check inline label="3" value="3" type="checkbox" name="open" onChange={handleChange} />
              <Form.Check inline label="4" value="4" type="checkbox" name="open" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="base-depth">
              <Form.Label>Base Depth</Form.Label>
              {/* <Form.Check inline label="0" value='0' type="checkbox" name="base" onChange={handleChange} /> */}
              <Form.Check inline label="1" value="1" type="checkbox" name="base" onChange={handleChange} />
              <Form.Check inline label="2" value="2" type="checkbox" name="base" onChange={handleChange} />
              <Form.Check inline label="3" value="3" type="checkbox" name="base" onChange={handleChange} />
              <Form.Check inline label="4" value="4" type="checkbox" name="base" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="snow-history">
              <Form.Label>Snow History</Form.Label>
              {/* <Form.Check inline label="0" value='0' type="checkbox" name="history" onChange={handleChange} /> */}
              <Form.Check inline label="1" value="1" type="checkbox" name="history" onChange={handleChange} />
              <Form.Check inline label="2" value="2" type="checkbox" name="history" onChange={handleChange} />
              <Form.Check inline label="3" value="3" type="checkbox" name="history" onChange={handleChange} />
              <Form.Check inline label="4" value="4" type="checkbox" name="history" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="distance">
              <Form.Label>Travel Distance</Form.Label>
              {/* <Form.Check inline label="0" value='0' type="checkbox" name="distance" onChange={handleChange} /> */}
              <Form.Check inline label="1" value="1" type="checkbox" name="distance" onChange={handleChange} />
              <Form.Check inline label="2" value="2" type="checkbox" name="distance" onChange={handleChange} />
              <Form.Check inline label="3" value="3" type="checkbox" name="distance" onChange={handleChange} />
              <Form.Check inline label="4" value="4" type="checkbox" name="distance" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};

export default Start;
