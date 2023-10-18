import "./App.css"
const BlogSection=() =>{
    return(
        <div id="blog-section">
        <div className='blog-card'>
          <img className='blog-image'
          src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"/>
          <div className='blog-content'>
          <div className='blog-titile'><h3>Fresh Graduate or IT professional Looking f</h3></div>
          <p className='author-name'>Arman Ahmad | <spam className ="date">05 Jul 2019 </spam> </p>
          <div className='description'>If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology </div>
          </div>
        </div>
        <div className='blog-card'>
          <img className='blog-image'
          src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"/>
          <div className='blog-content'>
          <h3 className='blog-titile'>Introducing you all to EdYoda - www.edyoda.com</h3>
          <p className='author-name'>Arman Ahmad | <spam className ="date">05 Jul 2019 </spam> </p>
          <div className='description'>Really ecstatic and immensely proud to introduce you all to our latest</div>
          </div>
          
        </div>
        <div className='blog-card'>
          <img className='blog-image'
          src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"/>
          <div className='blog-content'>
          <h3 className='blog-titile'>From identity crisis to the Success Story - The DevOps revolution!</h3>
          <p className='author-name'>Kalyan Mahalingam| <spam className ="date">05 Jul 2019 </spam> </p>
          <div className='description'>DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations.  </div>
          </div>
        </div>
        <div className='blog-card'>
          <img className='blog-image'
          src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"/>
          <div className='blog-content'>
          <h3 className='blog-titile'>Typical day of Data Scientist - An insider story!</h3>
          <p className='author-name'>Saurav Ghosh | <spam className ="date">05 Jul 2019 </spam> </p>
          <div className='description'>I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right -Big Data and Data Science are the foundation of all the trends that are emerging in the world today.</div>
          </div>
        </div>
        <div className='blog-card'>
          <img className='blog-image'
          src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"/>
          <div className='blog-content'>
          <h3 className='blog-titile'>Amazon Web Services (AWS) Cloud Day - Bangalore</h3>
          <p className='author-name'>Kalyan Mahalingam  | <spam className ="date">05 Jul 2019 </spam> </p>
          <div className='description'>I recently had the opportunity to attend the AWS Cloud Day event organized by Amazon Web Services. The AWS Cloud Day brings together the cloud computing community to connect, collaborate and learn about AWS. Here, I have tried to share my learning and experience of the event.</div>
          </div>
        </div>
        <div className='blog-card'>
          <img className='blog-image'
          src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"/>
          <div className='blog-content'>
          <h3 className='blog-titile'>EdYoda Meetup #01 : A Date with Cloud</h3>
          <p className='author-name'>Ashish Pandey | <spam className ="date">05 Jul 2019 </spam> </p>
          <div className='description'> I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the series of meetups planned by the team here. The focus area of the meetups is emerging technologies including Big Data, Cloud, Machine Learning, Blockchain, IOT, and others.</div>
          </div>
        </div>
        
      </div>
    )
}
export default BlogSection;