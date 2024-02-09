import React from 'react';
import './Footer.css'
export default function App() {
  return (
    <div bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className='section'>
        <div className='text-center text-md-start mt-5'>
          <div className='mt-3'>
            <div md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <div icon="gem" className="me-3" />
                CrediWatch
              </h6>
              
            </div>
<div className='Footer-Section'>
            <div md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>
            

            <div md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <div icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <div icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <div icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <div icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </div>
  );
}