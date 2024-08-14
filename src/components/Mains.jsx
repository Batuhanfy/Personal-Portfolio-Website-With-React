import React from 'react'

import { Route, Routes } from 'react-router-dom';
import ProfileBand from '../pages/profile.jsx'
import ProfileBandDetails from '../pages/profiledetails.jsx'
import RightMenus from '../pages/RightMenus.jsx'
import Section1 from '../pages/Section1.jsx';

export default function Mains() {
  return (
    <>
<div class="container-fluid d-flex justify-content-center">


        <div class="row p-5" >
            <div class="col-lg-3 col-md-4 col-xs-12 mb-4 mt-4  align-items-sm-center ">
                <div class="sticky-div ">
                  <div class="bg-light p-3 rounded-20 shadow-sm">
                  <ProfileBand/>
                  </div>
                  
                
                  <div class="bg-light p-3 rounded-20 mt-4">
                  <ProfileBandDetails/>
                  </div>
                 </div>
            </div>
            <div class="col-lg-8 col-md-8 col-xs-12 mb-4 mt-4 ">
                <div class="content-div bg-white p-3 rounded-20">
                
                <Section1/>
  
                </div>

                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
                <div class="content-div bg-white p-3 rounded-20 mt-4" >
                    <h1>Orta İçerik Alanım</h1>
                    <p>
                        Bu alanı daha sonra dolduracağım.
                    </p>
  
                </div>
            </div>
            <div class="col-lg-1 d-xs-none d-md-none d-lg-block mt-4 ">
                <div class="sticky-div rounded-20 bg-light p-3 shadow">
      <RightMenus/>
              </div>
            </div>
        </div>
    </div>


      
    </>
  )
}
