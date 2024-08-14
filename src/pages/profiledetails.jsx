import React from 'react'

export default function profiledetails() {
  return (
  <>
  <ul className="list-unstyled w-100 p-3">
    <li className="p-3 d-flex justify-content-start" style={{borderBottom: "1px solid #ccc"}}>

    <img src="../images/suitcase.png"  height="45px" className='mt-3'></img>
  <div className="ms-4">
  <h5  class="text-primary">Portfolyom</h5>
    <span>Yaratıcı projelerimi kontrol et!</span>
  </div>
    </li>
    <li className="p-3 d-flex justify-content-start" style={{borderBottom: "1px solid #ccc"}}>
       <img src="../images/task-management.png"  height="45px" className='mt-3'></img>
       <div className="ms-4">
       <h5 class="text-primary">Servislerim</h5>
    <span class="fw-normal">Kendi aktif oluşturup kullandığım bazı servisler</span>
  </div>
    </li>
    <li className="p-3 d-flex justify-content-start">
    <img src="../images/blog.png"  height="45px" className='mt-2'></img>
    <div className="ms-4">
    <h5  class="text-primary">Portfolyom</h5>
    <span>portfolyo detaylarımı görmek için tıkla</span>
  </div>
    </li>
  </ul>
  </>
  )
}
