import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Helmet } from "react-helmet";
import { Badge, Form, Table, Button } from 'react-bootstrap';
import Footer from './Footer';

function Dashboard() {
    return (
        <>
            <Helmet>
                <title>{'Dashboard | Admin Theme'}</title>
            </Helmet>

            <div className="wrapper">

                {/*Start Sidebar */}
                <Sidebar />

                {/* End Sidebar */}

                {/* Main Content */}
                <main className="main-content">
                    <div className="main-content-inner">

                        {/* Start Header */}
                        <Header />
                        {/* End Header */}

                        <h4 className="page-name">Dashboard</h4>
                        <div>

                            {/* Start Summary */}
                            <ul className="row">
                                <li className="col-xl-3 col-md-6">
                                    <div className="summary" >
                                        <p className="medium-text">New User</p>
                                        <div className="chart-part clearfix">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/chart-icon-01.png'} alt="Chart" />
                                            <h3 className="primary-color">45 <img src={process.env.PUBLIC_URL + '/assets/images/down-arrow-01.png'} alt="Chart" /></h3>
                                        </div>
                                        <p><span>10% Active Users</span></p>
                                    </div>
                                </li>

                                <li className="col-xl-3 col-md-6">
                                    <div className="summary" >
                                        <p className="medium-text">Page Views</p>
                                        <div className="chart-part clearfix">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/chart-icon-02.png'} alt="Chart" />
                                            <h3 className="pink-color">165 <img src={process.env.PUBLIC_URL + '/assets/images/up-arrow-02.png'} alt="Chart" /></h3>
                                        </div>
                                        <p><span>15% Page Views</span></p>
                                    </div>
                                </li>

                                <li className="col-xl-3 col-md-6">
                                    <div className="summary" >
                                        <p className="medium-text">Daily Sales</p>
                                        <div className="chart-part clearfix">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/chart-icon-03.png'} alt="Chart" />
                                            <h3 className="violet-color">425 <img src={process.env.PUBLIC_URL + '/assets/images/up-arrow-03.png'} alt="Chart" /></h3>
                                        </div>
                                        <p><span>45% Daily Sales</span></p>
                                    </div>
                                </li>

                                <li className="col-xl-3 col-md-6">
                                    <div className="summary" >
                                        <p className="medium-text">Total Earnings</p>
                                        <div className="chart-part clearfix">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/chart-icon-04.png'} alt="Chart" />
                                            <h3 className="green-color">5134 <img src={process.env.PUBLIC_URL + '/assets/images/up-arrow-04.png'} alt="Chart" /></h3>
                                        </div>
                                        <p><span>65% Dollars</span></p>
                                    </div>
                                </li>
                            </ul>
                            {/* End Summary */}



                            <div className="row">
                                <div className="col-xl-8 content-block-outer">
                                    <section className="content-block" >
                                        <h6 className="content-block-heading">Yearly Sales</h6>
                                        <div className="chart">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/yearly-sales-chart.jpg'} alt="Yearly Sales" />
                                        </div>
                                    </section>
                                </div>


                                <div className="col-xl-4 content-block-outer">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-6 mb-30">
                                            <section className="content-block pink-bg" >
                                                <h6 className="content-block-heading">Sales Analytics <span>March 2017</span></h6>
                                                <div className="chart-part clearfix">
                                                    <h3><img src={process.env.PUBLIC_URL + '/assets/images/up-arrow-05.png'} alt="Sales Analystics" />35487</h3>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/sales-analytics-chart.png'} alt="Sales Analystics" />
                                                </div>
                                            </section>
                                        </div>
                                        <div className="col-xl-12 col-lg-6">
                                            <section className="content-block violet-bg" >
                                                <h6 className="content-block-heading">Bandwidth Usage <span>March 2017</span></h6>
                                                <div className="chart-part clearfix">
                                                    <h3><img src={process.env.PUBLIC_URL + '/assets/images/up-arrow-05.png'} alt="Bandwidth Usage" />50 GB</h3>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/bandwidth-usage-chart.png'} alt="Bandwidth Usage" />
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-lg-6 content-block-outer" >
                                    <section className="content-block">
                                        <h6 className="content-block-heading">To Do List</h6>
                                        <ul className="checkbox-listing">
                                            <li>
                                                <Form.Check
                                                    custom
                                                    id='customCheck1'
                                                    label='Schedule meeting'
                                                    htmlFor='customCheck1'
                                                />
                                            </li>

                                            <li>
                                                <Form.Check
                                                    custom
                                                    id='customCheck2'
                                                    label='Give Purchase report Today'
                                                    htmlFor='customCheck2'
                                                />
                                                <Badge pill variant="success">
                                                    Today
                                                </Badge>
                                            </li>

                                            <li>
                                                <Form.Check
                                                    custom
                                                    id='customCheck3'
                                                    label='Book flight for holiday'
                                                    htmlFor='customCheck3'
                                                />
                                            </li>

                                            <li>
                                                <Form.Check
                                                    custom
                                                    id='customCheck4'
                                                    label='Forward all tasks 2 weeks'
                                                    htmlFor='customCheck4'
                                                />
                                                <Badge pill variant="warning">
                                                    2 Weeks
                                                </Badge>
                                            </li>

                                            <li>
                                                <Form.Check
                                                    custom
                                                    id='customCheck5'
                                                    label='Recieve shipment'
                                                    htmlFor='customCheck5'
                                                />
                                            </li>

                                            <li>
                                                <Form.Check
                                                    custom
                                                    id='customCheck6'
                                                    label='Important tasks to do'
                                                    htmlFor='customCheck6'
                                                />
                                                <Badge pill variant="info">
                                                    3 Weeks
                                                </Badge>
                                            </li>
                                        </ul>
                                    </section>
                                </div>

                                <div className="col-xl-4 col-lg-6 content-block-outer" >
                                    <section className="content-block">
                                        <h6 className="content-block-heading">Chat</h6>
                                        <div className="chat-listing-outer">
                                            <ul className="chat-listing">
                                                <li>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/chat-img-01.jpg'} alt="Chat" />
                                                    <div className="chat-text">
                                                        <p className="name"><b className="primary-color">Jordan Hurst</b> <em>10:00 am</em></p>
                                                        <span>Hi All</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/chat-img-02.jpg'} alt="Chat" />
                                                    <div className="chat-text">
                                                        <p className="name"><b className="pink-color">Jordan Hurst</b> <em>10:00 am</em></p>
                                                        <span>Hi, How are you Sonu? ur next concert?</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/chat-img-01.jpg'} alt="Chat" />
                                                    <div className="chat-text">
                                                        <p className="name"><b className="primary-color">Jordan Hurst</b> <em>10:00 am</em></p>
                                                        <span>Hi All</span>
                                                    </div>
                                                </li>

                                                <li>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/chat-img-02.jpg'} alt="Chat" />
                                                    <div className="chat-text">
                                                        <p className="name"><b className="pink-color">Jordan Hurst</b> <em>10:00 am</em></p>
                                                        <span>Hi, How are you Sonu? ur next concert?</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <form className="chat-form">
                                            <Form.Control type="text" className="input" placeholder="Say Something" />
                                            <Button variant="primary">Send</Button>
                                        </form>
                                    </section>
                                </div>

                                <div className="col-xl-4 col-lg-6 content-block-outer" >
                                    <section className="content-block">
                                        <h6 className="content-block-heading">Chart</h6>

                                        <div className="chart">
                                            <img src={process.env.PUBLIC_URL + '/assets/images/download-sales-chart.png'} alt="Download Sales" />
                                        </div>
                                    </section>
                                </div>


                                <div className="col-lg-12 content-block-outer mb-0" >
                                    <section className="content-block">
                                        <h6 className="content-block-heading">Recent sales</h6>

                                        <Table className="table" responsive striped>
                                            <thead>
                                                <tr>
                                                    <th>Invoice</th>
                                                    <th>User</th>
                                                    <th>Order date</th>
                                                    <th>Amount</th>
                                                    <th className="text-center">Status</th>
                                                    <th width="160">Tracking Number</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>#53431</td>
                                                    <td>Steve N. Horton</td>
                                                    <td>Oct 22, 2014</td>
                                                    <td>$45.00</td>
                                                    <td className="text-center"><span className="badge badge-pill badge-success">Paid</span></td>
                                                    <td>CGX0089734531</td>
                                                </tr>

                                                <tr>
                                                    <td>#53431</td>
                                                    <td>Steve N. Horton</td>
                                                    <td>Oct 22, 2014</td>
                                                    <td>$45.00</td>
                                                    <td className="text-center"><span className="badge badge-pill badge-success">Paid</span></td>
                                                    <td>CGX0089734531</td>
                                                </tr>

                                                <tr>
                                                    <td>#53431</td>
                                                    <td>Steve N. Horton</td>
                                                    <td>Oct 22, 2014</td>
                                                    <td>$45.00</td>
                                                    <td className="text-center"><span className="badge badge-pill badge-warning">Shipped</span></td>
                                                    <td>CGX0089734531</td>
                                                </tr>

                                                <tr>
                                                    <td>#53431</td>
                                                    <td>Steve N. Horton</td>
                                                    <td>Oct 22, 2014</td>
                                                    <td>$45.00</td>
                                                    <td className="text-center"><span className="badge badge-pill badge-warning">Shipped</span></td>
                                                    <td>CGX0089734531</td>
                                                </tr>

                                                <tr>
                                                    <td>#53431</td>
                                                    <td>Steve N. Horton</td>
                                                    <td>Oct 22, 2014</td>
                                                    <td>$45.00</td>
                                                    <td className="text-center"><span className="badge badge-pill badge-info">Cancelled</span></td>
                                                    <td>CGX0089734531</td>
                                                </tr>

                                                <tr>
                                                    <td>#53431</td>
                                                    <td>Steve N. Horton</td>
                                                    <td>Oct 22, 2014</td>
                                                    <td>$45.00</td>
                                                    <td className="text-center"><span className="badge badge-pill badge-yellow">Unpaid</span></td>
                                                    <td>CGX0089734531</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};
export default Dashboard;