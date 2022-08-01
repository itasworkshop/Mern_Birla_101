import React from 'react';
import talukamaval from "../components/img/talukamaval.jpg";
import goldvalley from "../components/img/goldvalley.jpg";
import little from "../components/img/little.jpg"


function Book() {
  return (
    <div class="book">
        <h1 className='heading'>
            <span>B</span>
        <span>o</span>
        <span>o</span>
        <span>k</span>
        <span class="space  "></span>
        <span>n</span>
        <span>o</span>
        <span>w</span>
        </h1>
        <div class="card text-center">
        
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Food </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">HOTEL</a>
      </li>
   
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Top Hotel Collections</h5>
    <p class="card-text">Special items povided according to state wise</p>
    <a href="#" class="btn btn-primary">Book Now</a>
  </div>

  <div class="card-group">
  <div class="card">
    <img src={talukamaval} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={goldvalley}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={little} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
 </div>
  )
}

export default Book