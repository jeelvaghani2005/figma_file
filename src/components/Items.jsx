import React from 'react'

const Items = () => {
  return (
    <div className='container py-5'>
        <div className='shadow items-drop d-flex align-items-center py-3 px-2'>
            <p className='m-0 fw-bold'>All Items</p>
            <i className="fa-solid fa-angle-down ms-4 text-primary" style={{marginTop:"5px"}}></i>
        </div>
        <table className='table mt-5' style={{border:"1px solid #a7a0a0"}} >
            <thead className='p-2'>
                <tr>
                    <th style={{color:"#a7a0a0",textTransform:"uppercase"}} >Name</th>
                    <th style={{color:"#a7a0a0",textTransform:"uppercase"}} >Description</th>
                    <th style={{color:"#a7a0a0",textTransform:"uppercase"}} >PURCHASE DESCRIPTION</th>
                    <th style={{color:"#a7a0a0",textTransform:"uppercase"}} >RATE</th>
                    <th style={{color:"#a7a0a0",textTransform:"uppercase"}} >PURCHASE RATE</th>
                    <th style={{color:"#a7a0a0",textTransform:"uppercase"}} >USAGE UNIT</th>
                    <th style={{color:"#a7a0a0",textTransform:"uppercase"}} ><i className="fa-solid fa-magnifying-glass"></i></th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default Items
