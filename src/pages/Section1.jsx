import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CountUp from 'react-countup';


export default function Section1() {
  return (
    <>
      <Container className='p-3'>
        <Row>
          <Col xs="9">
            <span class="notification">Freelance Çalışmaya Açık</span>
            <h3 class="mt-3 fs-1">Merhabalar, sizlere<h3 class="fs-1" style={{ color: "red" }}>FullStack Developer</h3> Geliştirme Hizmetleri Sunuyorum </h3>
          </Col>

          <Col xs="3" className="d-flex align-items-center" height="100%">
            <img src="../images/responsive.gif" width="100%" />
          </Col>

          <Col xs="12" class="mt-5" style={{ fontFamily: "Montserrat" }}>

            <ul class="list-unstyled w-100  mt-4 d-flex flex-column flex-md-row ">
              <Col xs="12" lg="5">
                <li class="d-flex flex-direction-row flex-wrap-nowrap align-items-center"  >
                  <span class="shadow-sm rounded-circle p-3 d-block">
                    <img class="" height="30px" src="../images/project-icon.png" />
                  </span>
                  <span class="ms-4">
                    <h3 class="fw-bold"> <CountUp end={13} duration={5} />+</h3>
                    <span style={{ color: "rgb(96 96 96)" }}>Proje tamamlandı.</span>
                  </span>
                </li>
              </Col>
              <Col xs="12" lg="7">
                <li class="d-flex flex-direction-row flex-wrap-nowrap align-items-center"  >
                  <span class="shadow-sm rounded-circle p-3 d-block">
                    <img class="" height="30px" src="../images/paper.png" />
                  </span>
                  <span class="ms-4">
                    <h3 class="fw-bold">    <CountUp end={5} duration={5} />+</h3>
                    <span style={{ color: "rgb(96 96 96)" }}>Projede çalışıyorum.</span>
                  </span>
                </li>
              </Col>
            </ul>




          </Col>


       


        </Row>


      </Container>


    </>
  )
}
