import React from 'react'

const Banking = () => {
    return (
        <div className='container pt-5'>
            <div className="main text-center">
                <div>
                    <h4>Stay on top of your money</h4>
                    <p style={{ width: "70%" }} className='mx-auto'>Connect your bank and credit cards to fetch all your transactions. Create, categorize and match
                        these transactions to those you have in Zoho Books.</p>
                    <div className='mt-5 mb-5'>
                        <button className='btn btn-primary' >Conect Bank/Credit Card</button>
                        <button className='ms-3 btn btn-secondary' >Add Manually</button>
                    </div>
                    <p className='fw-bold'>Dont use Banking For Your Bussiness ?<span className='text-primary'>Skip</span></p>
                </div>
            </div>
        </div>
    )
}

export default Banking
