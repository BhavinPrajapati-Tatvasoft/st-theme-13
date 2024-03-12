import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Heder from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { Breadcrumb, Dropdown, Button, Form, Badge, Pagination, Row, Col, Tabs, Tab, Table, Alert } from 'react-bootstrap';
function Innerpage() {
    const [showSuccessAlert, setShowSuccessAlert] = useState(true);
    const [showInfoAlert, setShowInfoAlert] = useState(true);
    const [showWarningAlert, setShowWarningAlert] = useState(true);
    const [showDangerAlert, setShowDangerAlert] = useState(true);

    return (
        <>
            <Helmet>
                <title>{'Innerpage | Admin Theme'}</title>
            </Helmet>
            <div className="wrapper">

                {/* Start Sidebar */}
                <Sidebar />
                {/* End Sidebar */}

                {/* Main Content */}
                <main className="main-content">
                    <div className="main-content-inner">

                        {/* Start Header */}
                        <Heder />
                        {/* End Header */}

                        <div className="row">
                            <div className="col">
                                <h4 className="page-name">Innerpage</h4>
                            </div>
                            <div className="col-auto">

                                <Breadcrumb>
                                    <Breadcrumb.Item href="dashboard.html">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active href="dashboard.html">Innerpage</Breadcrumb.Item>
                                </Breadcrumb>

                            </div>
                        </div>


                        {/* Start Yearly Sales */}
                        <section className="page-block">
                            <div className="page-block-heading-outer row">
                                <div className="col">
                                    <h5 className="page-block-heading">Recent sales</h5>
                                </div>
                                <div className="col-md-auto table-header-form">
                                    <Form.Control type="Search" className="search-input" placeholder="Search Here..." />
                                    <Form.Label>
                                        <span>Sort:</span>

                                        <Dropdown>
                                            <Dropdown.Toggle as="a">
                                                All
</Dropdown.Toggle>

                                            <Dropdown.Menu menuAlign="right">
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 01</Dropdown.Item>
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 02</Dropdown.Item>
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 03</Dropdown.Item>
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 04</Dropdown.Item>
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 05</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </Form.Label>
                                    <Form.Label>
                                        <span>Filter:</span>
                                        <Dropdown>
                                            <Dropdown.Toggle as="a">
                                                Show All
</Dropdown.Toggle>

                                            <Dropdown.Menu menuAlign="right">
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 01</Dropdown.Item>
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 02</Dropdown.Item>
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 03</Dropdown.Item>
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 04</Dropdown.Item>
                                                <Dropdown.Item onClick={e => e.preventDefault()} href="-">Option 05</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Form.Label>
                                    <Button variant="primary" className="icon-btn">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/icon-add.svg'} alt="Add" />
                                    </Button>
                                </div>
                            </div>

                            {/* Start Table */}
                            <Table className="table" responsive striped>
                                <thead>
                                    <tr>
                                        <th width="30">
                                            <Form.Check
                                                custom
                                                id='check-01'
                                                htmlFor='check-01'
                                            />

                                        </th>
                                        <th>Invoice</th>
                                        <th>User</th>
                                        <th>Order date</th>
                                        <th>Amount</th>
                                        <th className="text-center">Status</th>
                                        <th>Tracking Number</th>
                                        <th width="50"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Form.Check
                                                custom
                                                id='check-02'
                                                htmlFor='check-02'
                                            />

                                        </td>
                                        <td>#53431</td>
                                        <td>Steve N. Horton</td>
                                        <td>Oct 22, 2014</td>
                                        <td>$45.00</td>
                                        <td className="text-center">
                                            <Badge pill variant="success">
                                                Paid
</Badge>

                                        </td>
                                        <td>CGX0089734531</td>
                                        <td className="actions">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit">
                                                <img src={process.env.PUBLIC_URL + '/assets/images/icon-edit.svg'} alt="Edit" />

                                            </a>
                                            <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/icon-delete.svg'} alt="Delete" /></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Form.Check
                                                custom
                                                id='check-03'
                                                htmlFor='check-03'
                                            />

                                        </td>
                                        <td>#53431</td>
                                        <td>Steve N. Horton</td>
                                        <td>Oct 22, 2014</td>
                                        <td>$45.00</td>
                                        <td className="text-center">
                                            <Badge pill variant="success">
                                                Paid
</Badge>
                                        </td>
                                        <td>CGX0089734531</td>
                                        <td className="actions">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/icon-edit.svg'} alt="Edit" /></a>
                                            <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/icon-delete.svg'} alt="Delete" /></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Form.Check
                                                custom
                                                id='check-04'
                                                htmlFor='check-04'
                                            />

                                        </td>
                                        <td>#53431</td>
                                        <td>Steve N. Horton</td>
                                        <td>Oct 22, 2014</td>
                                        <td>$45.00</td>
                                        <td className="text-center">
                                            <Badge pill variant="warning">
                                                Shipped
</Badge>
                                        </td>
                                        <td>CGX0089734531</td>
                                        <td className="actions">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/icon-edit.svg'} alt="Edit" /></a>
                                            <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/icon-delete.svg'} alt="Delete" /></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Form.Check
                                                custom
                                                id='check-05'
                                                htmlFor='check-05'
                                            />

                                        </td>
                                        <td>#53431</td>
                                        <td>Steve N. Horton</td>
                                        <td>Oct 22, 2014</td>
                                        <td>$45.00</td>
                                        <td className="text-center">
                                            <Badge pill variant="warning">
                                                Shipped
</Badge>
                                        </td>
                                        <td>CGX0089734531</td>
                                        <td className="actions">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/icon-edit.svg'} alt="Edit" /></a>
                                            <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/icon-delete.svg'} alt="Delete" /></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Form.Check
                                                custom
                                                id='check-06'
                                                htmlFor='check-06'
                                            />

                                        </td>
                                        <td>#53431</td>
                                        <td>Steve N. Horton</td>
                                        <td>Oct 22, 2014</td>
                                        <td>$45.00</td>
                                        <td className="text-center">
                                            <Badge pill variant="info">
                                                Cancelled
</Badge>
                                        </td>
                                        <td>CGX0089734531</td>
                                        <td className="actions">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/icon-edit.svg'} alt="Edit" /></a>
                                            <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/icon-delete.svg'} alt="Delete" /></a>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <Form.Check
                                                custom
                                                id='check-07'
                                                htmlFor='check-07'
                                            />

                                        </td>
                                        <td>#53431</td>
                                        <td>Steve N. Horton</td>
                                        <td>Oct 22, 2014</td>
                                        <td>$45.00</td>
                                        <td className="text-center">
                                            <Badge pill className="badge-yellow">
                                                Unpaid
</Badge>
                                        </td>
                                        <td>CGX0089734531</td>
                                        <td className="actions">
                                            <a onClick={e => e.preventDefault()} href="-" title="Edit"><img src={process.env.PUBLIC_URL + '/assets/images/icon-edit.svg'} alt="Edit" /></a>
                                            <a onClick={e => e.preventDefault()} href="-" title="Delete"><img src={process.env.PUBLIC_URL + '/assets/images/icon-delete.svg'} alt="Delete" /></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="table-pagination row">
                                <div className="col">
                                    <p>Records: 6 / 100</p>
                                </div>
                                <div className="col-sm-auto">

                                    <Pagination>
                                        <Pagination.Item>
                                            {<img src={process.env.PUBLIC_URL + '/assets/images/prev-arrow.png'} alt="Prev" />}
                                        </Pagination.Item>
                                        <Pagination.Item active>{1}</Pagination.Item>
                                        <Pagination.Item>{2}</Pagination.Item>
                                        <Pagination.Item>{3}</Pagination.Item>
                                        <Pagination.Item >{4}</Pagination.Item>
                                        <Pagination.Item>
                                            {<img src={process.env.PUBLIC_URL + '/assets/images/next-arrow.png'} alt="Next" />}
                                        </Pagination.Item>
                                    </Pagination>

                                </div>
                            </div>
                            {/* End Table */}

                            <h5 className="page-block-heading">Form Style</h5>
                            <div className="default-form">
                                <h6 className="page-block-subheading">One Column</h6>
                                <Form.Group>
                                    <Form.Label>Textbox</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Dropdown</Form.Label>
                                    <Form.Control as="select" custom>
                                        <option>Option 01</option>
                                        <option>Option 02</option>
                                        <option>Option 03</option>
                                        <option>Option 04</option>
                                        <option>Option 05</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <br />
                                <h6 className="page-block-subheading">Two Column</h6>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" />
                                        </Form.Group>

                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Disabled</Form.Label>
                                            <Form.Control type="text" disabled />
                                        </Form.Group>

                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Focus</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>

                                    </div>
                                </div>

                                <br />
                                <h6 className="page-block-subheading">Three Column</h6>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Dropdown</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Option 01</option>
                                                <option>Option 02</option>
                                                <option>Option 03</option>
                                                <option>Option 04</option>
                                                <option>Option 05</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Dropdown</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Option 01</option>
                                                <option>Option 02</option>
                                                <option>Option 03</option>
                                                <option>Option 04</option>
                                                <option>Option 05</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Dropdown</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Option 01</option>
                                                <option>Option 02</option>
                                                <option>Option 03</option>
                                                <option>Option 04</option>
                                                <option>Option 05</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                </div>

                                <br />
                                <h6 className="page-block-subheading">Four Column</h6>
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Dropdown</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Option 01</option>
                                                <option>Option 02</option>
                                                <option>Option 03</option>
                                                <option>Option 04</option>
                                                <option>Option 05</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Dropdown</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Option 01</option>
                                                <option>Option 02</option>
                                                <option>Option 03</option>
                                                <option>Option 04</option>
                                                <option>Option 05</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Dropdown</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Option 01</option>
                                                <option>Option 02</option>
                                                <option>Option 03</option>
                                                <option>Option 04</option>
                                                <option>Option 05</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <Form.Group controlId="exampleForm.SelectCustom">
                                            <Form.Label>Dropdown</Form.Label>
                                            <Form.Control as="select" custom>
                                                <option>Option 01</option>
                                                <option>Option 02</option>
                                                <option>Option 03</option>
                                                <option>Option 04</option>
                                                <option>Option 05</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </div>
                                </div>

                                <br />
                                <h6 className="page-block-subheading">Leftside Column</h6>

                                <Form>
                                    <Form.Group as={Row}>
                                        <Form.Label column md="2">
                                            Name
</Form.Label>
                                        <Col md="10">
                                            <Form.Control type="text" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="exampleForm.SelectCustom">
                                        <Form.Label column md="2">Dropdown:</Form.Label>
                                        <Col md="10">
                                            <Form.Control as="select" custom>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>

                                </Form>

                                <br />
                                <h6 className="page-block-subheading">Other Elements</h6>
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <Form.Group>
                                            <Form.Label>File Upload</Form.Label>
                                            <Form.File
                                                id="custom-file"
                                                label=""
                                                custom
                                            />
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-horizontal">
                                            <Form.Group as={Row} className="mb-0">
                                                <Form.Label column md="4">File Upload</Form.Label>
                                                <Col md="auto">
                                                    <Form.File
                                                        id="custom-file"
                                                        label="Custom file input"
                                                        custom
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                                <Form.Group>
                                    <Form.Label>Check Boxes</Form.Label>
                                    <div>
                                        <Form.Check
                                            custom
                                            inline
                                            label='Option 1'
                                            id='customCheck1'
                                            htmlFor='customCheck1'
                                        />

                                        <Form.Check
                                            custom
                                            inline
                                            label='Option 2'
                                            id='customCheck2'
                                            htmlFor='customCheck2'
                                        />

                                        <Form.Check
                                            custom
                                            inline
                                            label='Option 3'
                                            id='customCheck3'
                                            htmlFor='customCheck3'
                                        />
                                    </div>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Radio Buttons</Form.Label>
                                    <div>
                                        <Form.Check
                                            custom
                                            inline
                                            type={'radio'}
                                            label='Option 1'
                                            id='customRadio1'
                                            htmlFor='customRadio1'
                                        />

                                        <Form.Check
                                            custom
                                            inline
                                            type={'radio'}
                                            label='Option 2'
                                            id='customRadio2'
                                            htmlFor='customRadio2'
                                        />

                                        <Form.Check
                                            custom
                                            inline
                                            type={'radio'}
                                            label='Option 3'
                                            id='customRadio3'
                                            htmlFor='customRadio3'
                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group>
                                    <div className="buttons form-btn clearfix">
                                        <Button variant="primary" className="rounded-0">Primary</Button>
                                        <Button variant="secondary" className="rounded-0">Secondary</Button>
                                        <Button variant="primary" className="rounded-0" size="sm">Small Button</Button>
                                    </div>
                                </Form.Group>
                                <Alert variant='success' show={showSuccessAlert}>

                                    <span className="icon">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/alert-success-icon.svg'} alt="Success" />
                                    </span>
This is a success message.
<button type="button" className="close-icon" onClick={() => setShowSuccessAlert(false)}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/close.svg'} alt="Close" />
                                    </button>
                                </Alert>
                                <Alert variant='info' show={showInfoAlert}>
                                    <span className="icon">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/alert-info-icon.svg'} alt="Success" />
                                    </span>
This is an info message.
<button type="button" className="close-icon" onClick={() => setShowInfoAlert(false)}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/close.svg'} alt="Close" />
                                    </button>
                                </Alert>
                                <Alert variant='warning' show={showWarningAlert}>
                                    <span className="icon">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/alert-warning-icon.svg'} alt="Success" />
                                    </span>
This is an alert message.
<button type="button" className="close-icon" onClick={() => setShowWarningAlert(false)}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/close.svg'} alt="Close" />
                                    </button>
                                </Alert>
                                <Alert variant='danger' show={showDangerAlert}>
                                    <span className="icon">
                                        <img src={process.env.PUBLIC_URL + '/assets/images/alert-danger-icon.svg'} alt="Success" />
                                    </span>
This is an error message.
<button type="button" className="close-icon" onClick={() => setShowDangerAlert(false)}>
                                        <img src={process.env.PUBLIC_URL + '/assets/images/close.svg'} alt="Close" />
                                    </button>
                                </Alert>

                                <br />
                                <h6 className="page-block-subheading">Tab Style</h6>

                                <Tabs defaultActiveKey="propertyDetails">
                                    <Tab eventKey="propertyDetails" title="Property Details">
                                        <p>
                                            01 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                    </Tab>
                                    <Tab eventKey="tenancyDetails" title="Tenancy Details">
                                        <p>
                                            02 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                    </Tab>
                                    <Tab eventKey="features" title="Features & Preferences">
                                        <p>
                                            03 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                    </Tab>
                                    <Tab eventKey="uploadImage" title="Upload Images & Documents">
                                        <p>
                                            04 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                    </Tab>
                                    <Tab eventKey="additionalDetails" title="Additional Features">
                                        <p>
                                            05 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
                                    </Tab>
                                </Tabs>

                            </div>
                        </section>
                        {/* End Yearly Sales */}
                    </div>
                </main>
                {/* End Main Content */}
            </div >

            {/* Start Footer */}
            < Footer />
            {/* End Footer */}
        </>
    );
};

export default Innerpage;