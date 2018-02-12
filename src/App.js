import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="page-overlay">
		{/* Preloader */}
        <div id="preloader">
        	<div className="alignment">
            	<div className="v-align center-middle"> 
            		<div className="heart-animation one">                	
            			<i className="icon icon-heart"></i>
               	 	</div>
                	<div className="heart-animation two">
            			<i className="icon icon-heart"></i>
                	</div>    
            		<div className="heart-animation three">                	
            			<i className="icon icon-heart"></i>
               	 	</div>
                	<div className="heart-animation four">
            			<i className="icon icon-heart"></i>
                	</div>     
                </div>
            </div>
        </div>
		{/* END Preloader */}
		{/* Background image */}
  		<div className="page-image-bg reveal scale-in"></div>
		{/* END Background image */}
		{/* Overlay */}
		<div className="overlay-bg-black overlay-opacity"></div>
		{/* END Overlay */}
		<header>
			<nav className="navbar navbar-fixed-top">
		    	<div className="container-fluid">
		        	<div className="row">
		          		<div className="col-md-12 text-white col-transform">
		            		<div className="navbar-wrapper">
		              			{/* Navbar Button */}
		              				<button className="navbar-button show-info" data-href="#content">
		                				<span></span>
		                				<span></span>
		                			<span></span>
		              				</button>
		              			{/* End Navbar Button */}
		            		</div>
		          		</div>
		        	</div>
		      	</div>
		    </nav>
		</header>
		<div id="info" className="col-md-12 text-white text-center page-info col-transform">
			<div className="title-front">We are getting married</div>
			<div className="logo">
				<img src="static/img/logo.png" alt=""/>
			</div>
			<div className="all-title">
				Sophia <span>&</span> Daniel
			</div>
			<div className="countdown-title">
				Countdown To Wedding Day
			</div>
            {/* Countdown */}
			<div id="countdown"></div>
            {/* END Countdown */}
			<div className="title-date">
				<span className="swirl-left"><span className="swirl-right">17<span>.</span>05<span>.</span>2018</span></span>
			</div>
			<div className="title-under">Save the date</div>
			<i className="icon ico-l-sm icon-l-arrows-slim-down-dashed animated fadeInDown"></i>
			<a className="btn btn-border-white show-info animated fadeInUp" role="button" data-href="#content">More info</a>
      	</div>
		<div id="content" className="page-content col-md-6 text-center bg-white">
			{/* Happy Couple */}
        <section className="section">
            {/* Section Title Happy Couple */}
			<h2 className="section-title">
				<span>Happy Couple</span>
			</h2>
            {/* END Section Title Happy Couple */}
				<div className="row single-happy-wrapp">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div className="single-happy">
							<img src="static/img/girl.jpg" alt=""/>
							<div className="info-box">
								<div className="info-box-wrap">
									<div className="overlay-info-box"></div>
									<div className="info-box-text">
										<h3>Sophia</h3>
										<span>Bride</span>
										<p>He is a very good friend, he always supports me when I need his help. I always call him when I need someone to hear me out and someone to share the news with, weather they are good or bad – I know I can always rely on him is me.</p>
										<ul>
											<li><a href="#" title=""><i className="icon icon-facebook"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-twitter"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-linkedin"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-skype"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-gplus"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-pinterest"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="single-happy-and">&</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
						<div className="single-happy">
							<img src="static/img/boy.jpg" alt=""/>
							<div className="info-box">
								<div className="info-box-wrap">
									<div className="overlay-info-box"></div>
									<div className="info-box-text">
										<h3>Daniel</h3>
										<span>Groom</span>
										<p>She is very funny and she likes to crack jokes. Her favorite holiday is the 1st of April. Her positive energy makes me always feel better and smile. She is very optimistic and when I have a bad day she always tries to cheer me up.</p>
										<ul>
											<li><a href="#" title=""><i className="icon icon-facebook"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-twitter"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-linkedin"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-skype"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-gplus"></i></a></li>
											<li><a href="#" title=""><i className="icon icon-pinterest"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Happy Couple */}
			{/* Love Story */}
        	<section className="section">
	            {/* Section Title Love Story */}
				<h2 className="section-title t60">
					<span>Love Story</span>
				</h2>
	            {/*END Section Title Love Story */}
	            <div className="container w100">
	                <div className="story-section">
	            		<div className="story-line hidden-xs"></div>
	                    <div className="row">
	                        <div className="time col-md-6 col-sm-6 col-xs-12">                            
	                            <div className="story-content left animated">  
	                                <div className="story-c-block">
	                                	<div className="col-md-6 col-sm-6">                               
	                                		<h3>We met for the first time</h3>
	                                		<span className="story-date">12th March 2012</span> 
	                                	</div>
	                                	<div className="col-md-6 col-sm-6">
	                                		<img src="static/img/gallery/store-1.jpg" alt="" className="img-responsive" />
	                                	</div>
	                                </div>
	                                <p className="text-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
	                            </div>                            
	                        </div>                        
	                        <div className="date col-md-6 col-sm-6 col-xs-12">
	                            <div className="story-content right animated">
	                                <div className="story-c-block">
	                                	<div className="col-md-6 col-sm-6">
	                                		<img src="static/img/gallery/store-2.jpg" alt="" className="img-responsive" />
	                                	</div>
	                                	<div className="col-md-6 col-sm-6">  
	                                		<h3 className="pull-right">Our first date</h3>
	                                		<span className="story-date">14th May 2014</span>
	                                	</div>
	                                </div>
	                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
	                            </div>
	                        </div>
	                        <div className="together col-md-6 col-sm-6 col-xs-12">                            
	                            <div className="story-content left animated">  
	                                <div className="story-c-block">
	                                	<div className="col-md-6 col-sm-6">                                 
	                                		<h3>We live together</h3>
	                                		<span className="story-date">15th August 2015</span> 
	                                	</div>
	                                	<div className="col-md-6 col-sm-6">
	                                		<img src="static/img/gallery/store-3.jpg" alt="" className="img-responsive" />
	                                	</div>  
	                                </div>  
	                                <p className="text-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
	                            </div>                            
	                        </div>                      
	                        <div className="offer col-md-6 col-sm-6 col-xs-12">
	                            <div className="story-content right animated">
	                                <div className="story-c-block">
	                                	<div className="col-md-6 col-sm-6">
	                                		<img src="static/img/gallery/store-4.jpg" alt="" className="img-responsive" />
	                                	</div>
	                                	<div className="col-md-6 col-sm-6"> 
	                                		<h3 className="pull-right">He made me an offer</h3>
	                                		<span className="story-date">17th May 2018</span>
	                                	</div>
	                                </div>
	                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
            </section>
            {/*END Love Story */}
			{/* Gallery */}
        	<section className="section section-gallery" id="gallery">
	            {/* Section Title Gallery */}
				<h2 className="section-title t60">
					<span>Photo Album</span>
				</h2>
	            {/* END Section Title Gallery */}
	            {/* Gallery Images */}
	            <div className="gallery-images row">
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space">
		                <div className="bearr-gallery-item">
		                	<a href="static/img/gallery/gallery-img1.jpg">
		                		<img src="static/img/gallery/gallery-img1.jpg" alt=""/>
		                		<div className="fade-icon">
		                            <span className="icon"><i className="icon icon-heart"></i></span>
		                        </div>
		                	</a>
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space">
		                <div className="bearr-gallery-item">
		                	<a href="static/img/gallery/gallery-img2.jpg">
		                		<img src="static/img/gallery/gallery-img2.jpg" alt=""/>
		                		<div className="fade-icon">
		                            <span className="icon"><i className="icon icon-heart"></i></span>
		                        </div>
		                	</a>
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space">
		                <div className="bearr-gallery-item">
		                	<a href="static/img/gallery/gallery-img3.jpg">
		                		<img src="static/img/gallery/gallery-img3.jpg" alt=""/>
		                		<div className="fade-icon">
		                            <span className="icon"><i className="icon icon-heart"></i></span>
		                        </div>
		                	</a>
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space">
		                <div className="bearr-gallery-item">
		                	<a href="static/img/gallery/gallery-img4.jpg">
		                		<img src="static/img/gallery/gallery-img4.jpg" alt=""/>
		                		<div className="fade-icon">
		                            <span className="icon"><i className="icon icon-heart"></i></span>
		                        </div>
		                	</a>
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space">
		                <div className="bearr-gallery-item">
		                	<a href="static/img/gallery/gallery-img5.jpg">
		                		<img src="static/img/gallery/gallery-img5.jpg" alt=""/>
		                		<div className="fade-icon">
		                            <span className="icon"><i className="icon icon-heart"></i></span>
		                        </div>
		                	</a>
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space">
		                <div className="bearr-gallery-item">
		                	<a href="static/img/gallery/gallery-img6.jpg">
		                		<img src="static/img/gallery/gallery-img6.jpg" alt=""/>
		                		<div className="fade-icon">
		                            <span className="icon"><i className="icon icon-heart"></i></span>
		                        </div>
		                	</a>
		                </div>
		            </div>      
	       		</div>
	            {/* END Gallery Images */}
        	</section>
        	{/* END Gallery */}
	        {/* Our Wedding Location */}
        	<section className="section">
		        {/* Section Title Our Wedding Location */}
				<h2 className="section-title t60">
					<span>Our Wedding Location</span>
				</h2>
		        {/* END Section Title Our Wedding Location */}
				<div className="wrapp location">  
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space location-block">
		                <div className="section-activity">
		                    <h2>Restauraunt</h2>                
		                    <h4>52 West Road, Apt. 10</h4> 
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space location-block color-two">
		                <div className="section-activity">
		                    <h2>Church</h2>                        
		                    <h4>5 Green Avenue, 3</h4> 
		                </div>
		            </div>
		            <div className="col-lg-4 col-md-4 col-sm-4 no-space location-block">
		                <div className="section-activity">
		                    <h2>Hotel</h2>                       
		                    <h4>20 Lombard Str.</h4> 
		                </div>
		            </div>
		        </div>
				{/* Google Maps */}
		    	<div id="map-canvas"></div>
		    	{/* END Google Maps */}
	    	</section>
	        {/* END Our Wedding Location */}  
			{/* Donation */}
        	<section className="section">
		        {/* Section Title Donation */}
				<h2 className="section-title t60">
					<span>Make A Donation</span>
				</h2>
		        {/* END Section Title Donation */}
				<div className="container w100 donation-container">
					<div className="donation-text">You can help us with money to make our day even more enjoyable</div>
					<div className="row mt-20">
		                <div className="col-lg-3 col-sm-3 col-xs-3">
		                    <a href="#" className="donation-item">50$ <i className="icon icon-shopping-basket"></i></a>
		                </div>
		                <div className="col-lg-3 col-sm-3 col-xs-3">
		                    <a href="#" className="donation-item">100$ <i className="icon icon-shopping-basket"></i></a>
		                </div>
		                <div className="col-lg-3 col-sm-3 col-xs-3">
		                    <a href="#" className="donation-item">250$ <i className="icon icon-shopping-basket"></i></a>
		                </div>
		                <div className="col-lg-3 col-sm-3 col-xs-3">
		                    <a href="#" className="donation-item">500$ <i className="icon icon-shopping-basket"></i></a>
		                </div>
		            </div>
				</div>
	    	</section>
			{/* END Donation */}
		    {/* Copyright */}
	    	<div className="footer copyrights">
	            <div className="copyright">&copy; 2018 myWedding | Development by <a href="http://exsythemes.com/" target="_blank">EXSYthemes</a></div>
		    </div>
		    {/* END Copyright */}
	    </div>	
	</div>
  <div className="switcher__color"></div>  
	  {/* END Switcher color panel */}
    {/* All JavaScript Libraries */}
    <script src="static/js/jquery-3.1.1.min.js"></script>   
    <script src="static/js/bootstrap.min.js"></script>
    <script src="static/js/jquery.arctext.js"></script>
    <script src="static/js/flipclock.js"></script>
    <script src="static/js/simple-lightbox.min.js"></script> {/* Simple Lightbox */}
    {/*Google maps*/}
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBEjla2nPAcJpZBb1aA3AkzFd__o7Nha38"></script> {/* Google Map API */}
    <script src="static/js/infobox.min.js"></script> {/* Infobox */}
    {/* Custom JavaScript */}
      <script src="static/js/main.js"></script>
    {/* Switcher Color JavaScript */}
    <script src="static/js/switcher/cookie.js"></script>
    <script src="static/js/switcher/colorswitcher.js"></script>
   
  </div>
      
    );
  }
}

export default App;
