import React from 'react';
import srinagar from "../components/img/srinagar2.jpg";
import jaipur from "../components/img/jaipur.jpg";
import rajsthan from "../components/img/rajsthan.jpg";
import Andaman from "../components/img/Andaman.jpg";


function Packages() {
  return (
    <div className='packages'>
        <h3>India Tour Packages</h3>
<p>About India Tourism: A South Asian nation synonymous with the phrase “unity in diversity,” India is a land of rich culture and heritage. It’s known for its varied geographical terrain, historical monuments, languages, cuisines, religions, festivals, and so much more! From north to south and east to west, there is plenty to see and experience here, and you can do so with Holidify’s numerous India tour packages that are fit for all.</p>

<p>The best way to plan a trip to India is by region. When it comes to North India, the area comprises states like Uttarakhand, Rajasthan, Jammu and Kashmir, Delhi and Uttar Pradesh. It’s known for its breathtaking snowy terrain and the majestic Himalayas and is a paradise for skiing, hiking and trekking, snowboarding, camping, etc.</p>
<p>
The region boasts heritage sites like the Mughal Taj Mahal, colonial Parliament House, Christ Church and the Namgyal Monastery, Badrinath Temple and Dilwara Temples. Visit Mehrangarh Fort, Red Fort and City Palace to know more about its tryst with royalty and experience riding shikaras across Dal Lake, shopping at Connaught Place or spotting tigers at Corbett National Park.</p>
  <p>Moving to the west, India tour packages include the beautiful beaches of Goa like Calangute Beach, heritage sites like Maharashtra’s Elephanta Caves and Gateway of India, Mahabaleshwar’s green valleys and the vast Rann of Kutch. Central India, primarily comprising Madhya Pradesh and Chhattisgarh, is well-known for the Kanha National Park that organises wildlife safaris and the nearly-impenetrable Gwalior Fort built by Babur.
    </p>  
    <p>Champaran in Chhattisgarhs Raipur and Hajra in Bhilai frequently attract large crowds. As you go south, you would find yourself in awe of its temples like the Vithala Temple, Kurinji Temple and Karumadikkuttan. States like Karnataka, Kerala, Tamil Nadu and Andhra Pradesh welcome you with picturesque hill stations like Ooty and Coorg, expansive plantations and beaches like Paradise Beach. Mysore Palace and Lalbagh are pretty famous too.</p>
    
    <h4>Popular Tour Packages for India</h4>
    
    <table class="table table-dark">
    <thead>
  <tr>
    <th>Packages</th>
    <th>Price</th>
    <th>Days</th>
    <th>Inclusion</th>
     
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>Shimla, Manali</td>
    <td>₹ 12,999</td>
    <td>5 N / 6 D</td>
    <td>Hotels, Car, Meals</td>
    
  </tr>
  <tr>
    <td>Munnar, Alleppey, Kovalam</td>
    <td>₹ 20,000</td>
    <td>4 Nights / 5 Days</td>
    <td>Other, Meals, Sightseeing, Hotels</td>
  </tr>
  <tr>
    <td>Leh, Pangong Lake, Nubra Valley</td>
    <td>₹ 15,000</td>
    <td>6 Nights / 7 Days</td>
    <td>Hotels, Sightseeing, Meals</td>
  </tr>
  <tr>
    <td>Srinagar, Gulmarg, Pahalgam</td>
    <td>₹ 15,000</td>
    <td>5 Nights / 6 Days</td>
    <td>Meals, Sightseeing, Car, Hotels</td>
  </tr>
  <tr>
    <td>Shimla, Manali, Mcleodganj</td>
    <td>₹ 30,000</td>
    <td>6 Nights / 7 Days</td>
    <td>Hotels, Car, Meals</td>
  </tr>
  </tbody>
</table>
<h1>Top Places in India for tour packages</h1>
<div class="row row-cols-1 row-cols-md-4 g-3">
  <div class="col">
    <div class="card h-100">
      <img src={srinagar}class="card-img-top" alt="..."/>
 <div class="card-body">
        <h5 class="card-title">Wonders of Kashmir Tour Package</h5>
        <div>
        <i class="fa-solid fa-location-dot"></i>
        <p>Srinagar(2N) → Pahalgam(1N) </p>
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <p>11,850 per adult onwa</p>
        </div>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={jaipur} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Wonders of jaipur Tour Package</h5>
        <i class="fa-solid fa-location-dot"></i>
        <p class="card-text">This is a short card.</p>
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <p>11,850 per adult onwa</p>
        
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={rajsthan} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Wonders of rajsthan Tour Package</h5>
        <i class="fa-solid fa-location-dot"></i>
        <p class="card-text">Rajsthan-2N.</p>
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <p>20000 per adult onwa</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={Andaman} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Wonders of Andaman Nicobar Tour Package</h5>
        <i class="fa-solid fa-location-dot"></i>
        <p class="card-text">Andaman Nicobar-2S.</p>
        <i class="fa-solid fa-indian-rupee-sign"></i>
        <p>30000 per adult onwa</p>
        
      </div>
    </div>
    </div>
    </div>
    
  

</div>
)
}

export default Packages;