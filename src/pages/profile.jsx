import React from 'react'
import {Container,Row,Col} from 'reactstrap'


export default function profile() {
  return (
  <>
  <Container>
    <Row>
       <Col xs="12" className="d-flex justify-content-center flex-column align-items-xs-center">
        <div class="col-xs-12 d-flex justify-content-center">
        <img src={`../images/batuhan.jpg`} width="250px" className="rounded items-align-center" alt="Batuhan Korkmaz" />
        </div>
        <h3 className="mt-2 fs-3 text-center mt-3">Batuhan Korkmaz</h3>
        <span class="mt-2 fs-6 text-center rounded-pill fw-light" style={{background:"rgb(238 238 238)"}}>Fullstack Developer</span>
        <ul style={{listStyle:"none",padding:"0"}} className=" mt-4 d-flex justify-content-around justify-content-lg-center" >
        <li className="m-1" >
            <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path> </g></svg>
            </li>
            <li className="m-1">
            <svg width="25px" height="25px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"> </path> </g> </g> </g> </g></svg>
            </li>
            <li className="m-1">
          <svg width="25px" height="25px" viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M599.256 326.893C638.207 324.995 644.199 388.816 601.453 383.223C565.997 382.224 561.503 327.892 599.256 326.893Z" fill="white"></path> <path d="M726.895 478.902C729.991 250.487 638.505 220.924 429.866 233.608C286.146 222.522 229.716 331.386 229.317 460.125C221.527 586.168 260.378 745.468 417.282 732.085C613.137 728.59 735.984 708.714 726.895 478.902ZM384.423 85.7931C608.743 64.9192 868.418 97.079 871.514 377.828C879.404 507.066 883.599 645.593 820.278 762.847C752.862 877.503 640.503 872.709 523.649 875.406C420.877 879.501 314.91 888.39 215.834 854.732C114.86 819.776 87.3942 743.571 89.5915 643.895C86.0959 558.103 82.6002 472.51 84.0984 386.617C89.0921 183.071 177.981 81.099 384.423 85.7931Z" fill="#000000"></path> <path d="M429.866 233.608C638.505 220.924 729.89 250.487 726.894 478.902C735.983 708.714 613.136 728.49 417.381 732.085C260.377 745.469 221.626 586.068 229.416 460.125C229.716 331.386 286.145 222.522 429.866 233.608ZM682.949 486.093C682.949 344.67 665.571 269.763 504.972 276.954C457.231 281.648 401.401 274.557 353.461 290.837C257.181 337.878 270.465 467.216 279.354 556.904C288.043 701.823 408.193 697.528 520.652 681.349C658.779 674.058 684.248 614.432 682.949 486.093Z" fill="white"></path> <path d="M495.188 393.309C393.515 388.116 362.155 555.606 473.715 560.101C578.584 557.604 594.664 423.172 495.188 393.309ZM473.915 354.857C649.495 342.972 638.709 602.448 473.116 600.65C316.212 595.856 330.894 368.84 473.915 354.857Z" fill="white"></path> <path d="M473.813 560.102C362.252 555.508 393.513 388.017 495.286 393.31C594.662 423.173 578.582 557.605 473.813 560.102Z" fill="#000000"></path> <path d="M504.973 276.955C665.572 269.664 683.05 344.67 682.95 486.093C684.149 614.433 658.781 674.058 520.653 681.349C408.194 697.529 288.044 701.823 279.355 556.905C270.466 467.117 257.282 337.878 353.462 290.837C401.402 274.558 457.233 281.649 504.973 276.955ZM473.213 600.65C638.706 602.448 649.592 342.972 474.012 354.857C330.89 368.84 316.209 595.856 473.213 600.65ZM601.452 383.222C644.199 388.815 638.206 325.094 599.255 326.892C561.502 327.891 565.997 382.223 601.452 383.222Z" fill="#000000"></path> </g></svg>           
           </li>
           <li className="m-1">
           <svg fill="#000000" height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="78.9,450.3 162.7,401.1 78.9,351.9 "></polygon> <path d="M-143,145v512h512V145H-143z M241,446.8L241,446.8c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5 c0-44.1,44.1-44.1,44.1-44.1h167.8c44.1,0,44.1,44.1,44.1,44.1V446.8z"></path> </g> </g></svg>           </li>
        </ul>

        <a href="/" class="text-center">  
            <span class="d-block bg-primary text-white w-100 p-1 rounded button-left">Mesaj Gönder</span>
            </a>
        </Col> 
    </Row>
  </Container>
  </>
  )
}
