import React from "react";

const About = () => {
  
  return (
    <>
     <div>
      {/* carousel start */}
      <div>
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-photo/still-life-with-literature-concept_23-2148104348.jpg?t=st=1719912160~exp=1719915760~hmac=272dc3e18f1246ef2bee7b361f0c91a1161e8377786d21d085386d72d52e2a9f&w=996"
                className="w-full md:h-[600px] h-[350px]" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-photo/couple-enjoying-bookstore-date_23-2150396412.jpg?t=st=1719912703~exp=1719916303~hmac=4b365c63c78357a0e5c31e0cb0c552d6271f338ecbab57542320c23e51ea640f&w=996"
                className="w-full md:h-[600px] h-[350px]" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-photo/girl-sitting-table-looking-notebook_23-2147657343.jpg?t=st=1720871566~exp=1720875166~hmac=76fcee80743880ecf29a4549b6c20797f95e509fec3b8c4c55484fc10745e6af&w=996"
                className="w-full md:h-[600px] h-[350px]" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.freepik.com/free-photo/full-shot-student-library_23-2149647115.jpg?t=st=1720871668~exp=1720875268~hmac=b80dbf49f3a39cd9a187d1fef902b2232e1f1e623a91274fdda0d504a2b24535&w=996"
                className="w-full md:h-[600px] h-[350px]" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
      </div>  
       {/* carousel end */}
       <div className="md:mt-5 md:mb-3">
        <h1 className="text-center md:text-4xl tracking-widest text-gray-600 text-2xl my-4">OUR MISSION</h1>
       </div>
       <div className="md:flex md:justify-evenly">
        <div><img src="https://cdn.prod.website-files.com/6267f35934aa8b1795cf1a9f/62f5394f512f1534599827db_vend-p-500.png" alt="" /></div>
        <div className="md:w-[700px] md:mt-[100px]">
        <p className="p-4 m-auto">Our mission is simple: To help all over India, independent bookstores or directly to users thrive in the age of ecommerce.<br/><br/><strong>Certified as a B Corp</strong>, Bookstore puts this mission and the public good above financial interests, giving over 80% of our profit margin to independent bookstores. In 2022, B-Labs announced we were "best for the world":&nbsp;in the top 5% of all B-Corps.<br/><br/>It is written in our governance documents that we will never sell the company to Amazon or any major U.S. retailer.<br/><br/> As a Climate Neutral company, we are committed to operating sustainably.</p>
        </div>
       </div>
       <div className="md:flex justify-evenly my-4">
        <div>
            <img className="w-[279px] bg-slate-500 p-4 ml-[70px]" src="https://cdn.prod.website-files.com/6267f35934aa8b1795cf1a9f/62f53aa452bdef40b1b2fe8f_b-corp-wide-p-500.png" alt="" />
        </div>
        <div className="mt-[5px]">
          <p className="md:w-[700px] mb-2 w-[400px] p-2 m-auto">
            <strong>B Corp Certification</strong> is a designation that a business is meeting high standards of verified performance, accountability, and transparency on factors from employee benefits and charitable giving to supply chain practices and input materials.
          </p>
          <a href="#"><strong className="bg-slate-500 p-1 rounded-sm ml-5">More Information on B Corps</strong></a>
        </div>
       </div>
       <div className="md:flex md:justify-evenly bg-slate-500 md:p-6 md:mt-6 p-2">
        <div>
            <img className="w-[260px] md:h-[140px] ml-[78px] my-3" src="https://cdn.prod.website-files.com/6267f35934aa8b1795cf1a9f/62f53adb9abfb332f0745735_CertifiedClimateNeutral_Badge_Horizontal_800x-p-500.webp" alt="" />
        </div>
        <div>
            <img className="w-[260px] h-[135px] ml-[78px] my-3" src="https://cdn.prod.website-files.com/6267f35934aa8b1795cf1a9f/62f53adb9abfb33ff2745732_trustpilot-916eb54aa274c0e1b31ff4d2b161a8fea74e14617bcb349678fb2560fd142e5c.webp" alt="" />
        </div>
        <div>
            <img className="w-[260px] h-[140px] ml-[78px] my-3" src="https://cdn.prod.website-files.com/6267f35934aa8b1795cf1a9f/62f53adb9abfb3338174572f_fast-p-500.png" alt="" />
        </div>
      </div>
      <div className="md:mt-6">
          <h1 className="md:text-4xl text-2xl text-center text-gray-600 dark:text-gray-400 mt-4">
              SERVICES WE CAN PROVIDE
          </h1>
          <h2 className="md:text-xl text-center my-3 text-gray-400 dark:text-gray-600 md:mt-3">
              WE ARE MORE THAN HAPPY TO OFFER YOU
          </h2>
          
      </div>
      <div className="flex">
        <div><img className="md:mx-7 md:w-[450px] md:h-[450px] w-[500px] h-[150px]" src="https://img.freepik.com/free-photo/man-hand-picking-books-from-shelf_158595-5197.jpg?t=st=1719483454~exp=1719487054~hmac=386bfe2b3b637218762a4419d99c323c5f0891a8949aabbbb09aadfb78186a9a&w=996" alt="select-book" />
        <h1 className="text-center md:text-3xl mt-2">Select Your Book</h1>
        {/* <h2 className="md:text-xl">First you have to select a book from our book store and add into cart</h2> */}
        </div>
        <div><img className="md:mx-7 md:w-[450px] md:h-[450px] w-[500px] h-[150px]" src="https://img.freepik.com/free-photo/front-view-online-shopping-concept_23-2148625710.jpg?t=st=1719483622~exp=1719487222~hmac=5dd26041430a0616927311b305e5ad68c3632c28f54b1cf30f71bcf1e308a57d&w=996" alt="purchase-book" />
        <h1 className="text-center md:text-3xl mt-2">Purchase Your Book</h1>
        {/* <h2 className="md:text-xl">Purchase your book from cart and you can pay it with credit, debit and cash on delivery options.</h2> */}
        </div>
        <div><img className="md:mx-7 md:w-[450px] md:h-[450px] w-[500px] h-[150px]" src="https://img.freepik.com/free-photo/deliver-man-holding-package_23-2148890014.jpg?t=st=1719483719~exp=1719487319~hmac=dbbefde3e25c1d8eb2fa674fc88e7b5869a8007bd36399b7a1fd58131efe5dd3&w=360" alt="delivery-book" />
        <h1 className="text-center md:text-3xl mt-2">Get Your Book</h1>
        {/* <h2 className="md:text-xl">First you have to select a book from our book store and add into cart</h2> */}
        </div>
      </div>
      <div className="md:mt-6 mt-2 mb-2">
        <hr />
      </div>
     
      {/* our mission */}
      <div>
        <h1 className="text-center font-bold md:text-3xl md:my-4 text-gray-600 my-4">
          OUR SPONSORS
        </h1>
      </div>
      <div className="md:flex bg-slate-500 p-6"> 
        <div className="md:w-1/3 md:mx-2 md:mt-6 md:mb-6 my-6">
          <p className="text-center">“This funding came at the most perfect time when I prayed I would have rent for next month and payroll and purchases. Your team will never, ever, know how much booksellers like me appreciate your business.”</p>
          <h2 className="text-center font-bold text-xl">VaLinda Miller</h2>
          <h3 className="text-center">Turning Page Bookshop</h3>
          <h4 className="text-center">Goose Creek, SC</h4>
        </div>
        <div className="md:w-1/3 md:mx-3 md:mt-6 md:mb-6 my-6">
            <p className="text-center">“These funds mean more than money. It means community to me. And for that, I will be forever grateful.”</p>
            <h2 className="text-center font-bold text-xl">Fawn Fernandes</h2>
            <h3 className="text-center">Curious Capybara Bookshop</h3>
            <h4 className="text-center">Hendersonville, TN</h4>
        </div>
        <div className="md:w-1/3 md:mx-3 md:mt-6 md:mb-6 my-6">
            <p className="text-center">“Bookshop has absolutely transformed our business, and I am just so continually grateful for your service and, ultimately, support. Thank you so much for your vision and your commitment to us indies.”</p>
            <h2 className="text-center font-bold text-xl">Lexi Walter Wright</h2>
            <h3 className="text-center">High Five Books</h3>
            <h4 className="text-center">Northampton, MA</h4>
        </div>
      </div>
      {/* Frequently asked questions */}
      <div className="md:mt-8">
        <h1 className="md:text-4xl text-center text-xl my-2">
        FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      <div className="md:mt-8">
                <div className="collapse collapse-arrow bg-base-200 dark:text-white dark:bg-slate-950 md:mt-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">How can I place an order?</div>
            <div className="collapse-content">
              <p>You can place an order directly through our website by adding items to your cart and proceeding to checkout. You can also call us at +91 78140-73920 to place an order over the phone.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 dark:text-white dark:bg-slate-950 md:mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How long will it take to receive my order?</div>
            <div className="collapse-content">
              <p>Orders are typically processed within 1-2 business days. Shipping times vary depending on your location and the shipping method selected at checkout.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 dark:text-white dark:bg-slate-950 md:mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium"> How do I return an item?</div>
            <div className="collapse-content">
              <p>To return an item, please go to our contact page and send us an email and type your query for ex- why are you returning an item.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 dark:text-white dark:bg-slate-950 md:mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Can I exchange an item?</div>
            <div className="collapse-content">
              <p>Yes, exchanges are possible within 30 days of purchase. Please contact our customer service to initiate an exchange.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 dark:text-white dark:bg-slate-950 md:mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How can I find out if a book is in stock?</div>
            <div className="collapse-content">
              <p>You can check the availability of a book on our website. If a book is out of stock, you can sign up to be notified when it becomes available.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 dark:text-white dark:bg-slate-950 md:mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">How can I contact customer service?</div>
            <div className="collapse-content">
              <p>You can reach our customer service team by email at piyushmittal033@gmail.com or by phone at +91 78140-73920. We are available Monday to Friday from 9 AM to 6 PM.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 dark:text-white dark:bg-slate-950 md:mt-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">Do you offer gift wrapping services?</div>
            <div className="collapse-content">
              <p>No, currently we are'nt offerring any gift wrapping services. But You can see this option very soon😊.</p>
            </div>
          </div>
      </div>

    </div>
    </>
   
  )
}

export default About
