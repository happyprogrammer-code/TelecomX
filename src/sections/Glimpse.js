import React from 'react'
import './glimpse.css'
import { mainTv, lightBlueTv, blueTv } from './img'
 
export default function Glimpse() {
    return (
       <section className="glimpse-main">
           <div className="glimpse-title">

                <svg className="glimpse-top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#db6400" fill-opacity="1" d="M0,0L48,32C96,64,192,128,288,128C384,128,480,64,576,69.3C672,75,768,149,864,197.3C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

                    <div className="glimpse-title-box">
                        <div className="con-90-res"><h1>GLIMPSE OF OUR PRODUCT</h1></div>
                    </div>

                <svg className="glimpse-bot-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#db6400" fill-opacity="1" d="M0,0L48,32C96,64,192,128,288,128C384,128,480,64,576,69.3C672,75,768,149,864,197.3C960,245,1056,267,1152,234.7C1248,203,1344,117,1392,74.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

           </div>
           <div className="glimpse-grid">
               <div className="con-90-res">
               <div className="glimpse-product">
                   <div className="glimpse-product-title">
                       <h3>LED HD 123</h3>
                   </div>
                   <div className="glimpse-img">
                       <img src={mainTv} alt="" srcset=""/>
                   </div>
                   <div className="glimpse-texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Omnes enim iucundum motum, quo sensus hilaretur. Tubulo putas dicere? Duo Reges: constructio interrete. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Minime vero istorum quidem, inquit.</p>
                        <div className="button"><button>BUY NOW</button></div>
                   </div>
               </div>
               <div className="glimpse-product">
                   <div className="glimpse-product-title">
                       <h3>LED HD 321</h3>
                   </div>
                   <div className="glimpse-img">
                       <img src={lightBlueTv} alt="" srcset=""/>
                   </div>
                   <div className="glimpse-texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Omnes enim iucundum motum, quo sensus hilaretur. Tubulo putas dicere? Duo Reges: constructio interrete. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Minime vero istorum quidem, inquit.</p>
                        <div className="button"><button>BUY NOW</button></div>
                   </div>
               </div>
               <div className="glimpse-product">
                   <div className="glimpse-product-title">
                       <h3>LED HD 132</h3>
                   </div>
                   <div className="glimpse-img">
                       <img src={blueTv} alt="" srcset=""/>
                   </div>
                   <div className="glimpse-texts">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ab hoc autem quaedam non melius quam veteres, quaedam omnino relicta. Omnes enim iucundum motum, quo sensus hilaretur. Tubulo putas dicere? Duo Reges: constructio interrete. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Minime vero istorum quidem, inquit.</p>
                        <div className="button"><button>BUY NOW</button></div>
                   </div>
               </div>
               </div>
           </div>
       </section>
    )
}
