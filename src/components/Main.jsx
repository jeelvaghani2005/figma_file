import React from 'react'
import chart_1 from '../images/Frame 114.png'
import chart_1_1 from '../images/Frame 116.png'
import small_1 from '../images/Frame 87.png'
const Main = () => {
    return (
        <div className="container py-5 main">
            <div className='row'>
                <div className="col-6">
                    <div className="card">
                        <div className="card-footer px-3 py-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className='fw-semibold m-0' style={{fontSize:"20px"}}>Total Receivables <i className="fa-regular fa-circle-question"></i></h4>
                            </div>
                            <div>
                                <p className='m-0'><i className="fa-solid fa-circle-plus text-primary"></i> New</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><span>Total Unpaid Invoice &#8377; 0.00</span></p>
                        </div>
                        <div style={{backgroundColor:"white"}} className="card-footer d-flex justify-content-around">
                            <div style={{marginLeft:"-145px"}}>
                                <p style={{color:"#8c78e5",fontWeight:"700"}}>Current</p>
                                <h4 style={{fontSize:"16px"}} ><span>&#8377;</span> 0.00</h4>
                            </div>
                            <div style={{borderLeft:"2px solid black",marginLeft:"-100px"}}>
                                <p style={{color:"#ba5b16",fontWeight:"700", paddingLeft:"20px"}}>Oberdue</p>
                                <h4 style={{fontSize:"16px", paddingLeft:"20px"}} ><span>&#8377;</span> 0.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-footer px-3 py-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className='fw-semibold m-0' style={{fontSize:"20px"}}>Total Payables <i className="fa-regular fa-circle-question"></i></h4>
                            </div>
                            <div>
                                <p className='m-0'><i className="fa-solid fa-circle-plus text-primary"></i> New</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className="card-text"><span>Total Unpaid Invoice &#8377; 0.00</span></p>
                        </div>
                        <div style={{backgroundColor:"white"}} className="card-footer d-flex justify-content-around">
                            <div style={{marginLeft:"-145px"}}>
                                <p style={{color:"#8c78e5",fontWeight:"700"}}>Current</p>
                                <h4 style={{fontSize:"16px"}} ><span>&#8377;</span> 0.00</h4>
                            </div>
                            <div style={{borderLeft:"2px solid black",marginLeft:"-100px"}}>
                                <p style={{color:"#ba5b16",fontWeight:"700", paddingLeft:"20px"}}>Oberdue</p>
                                <h4 style={{fontSize:"16px", paddingLeft:"20px"}} ><span>&#8377;</span> 0.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-12">
                    <img className='chart-img-1' src={chart_1} style={{width:"100%"}} alt="" />
                    <img className='chart-img-1_1' src={chart_1_1} alt="" />
                </div>
            </div>
            <div className="row py-3">
                <div className="col-6">
                    <div>
                        <img style={{width:"100%"}} src={small_1} alt="" />
                          <img className='chart-img-1_1' style={{width:"90%",left:"40px",bottom:"60px"}} src={chart_1_1} alt="" />
                    </div>
                </div>
                <div className="col-6">
                <div>
                        <img style={{width:"100%"}} src={small_1} alt="" />
                    <img className='chart-img-1_1' style={{width:"90%",left:"40px",bottom:"60px"}} src={chart_1_1} alt="" />
                    </div>
                </div>
            </div>
            <div className="row py-3">
                <div className="col-6">
                    <div className="card" >
                    <div className="card-footer px-3 py-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className='fw-bold m-0' style={{fontSize:"20px"}}>Bank And Credit Card <i className="fa-regular fa-circle-question"></i> </h4>
                            </div>
                            <div>
                                <p className='m-0'>The Fiscal Year</p>
                            </div>
                        </div>
                        <div className="card-body" style={{padding:"130px"}}>
                            <p className='fw-bold mx-auto' >Yet to add Bank and Credit Card detail Add Bank Account</p>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card" >
                    <div className="card-footer px-3 py-3 d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className='fw-bold m-0' style={{fontSize:"20px"}}>Account Watchlist <i className="fa-regular fa-circle-question"></i> </h4>
                            </div>
                            <div>
                                <p className='m-0'>Cash</p>
                            </div>
                        </div>
                        <div className="card-body" style={{padding:"162px"}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
