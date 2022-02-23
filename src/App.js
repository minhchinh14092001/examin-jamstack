import logo from './images/logo.png'
import banner from './images/banner.png'
import cloud from './images/cloud.png'
import technology from './images/technology.png'
import research from './images/research.png'
import seo from './images/customerservice.png'
import solution from './images/marketing-img.png'

function App() {
  return (
    <div class='pb-20 px-10'>
      <header class='border-b-4 border-black'>
      <img src={logo} alt="" class='scale-50'  class=' py-8'/>
      </header>
      <body class='px-40'>
        <div class='flex'>
          <div className="text" class='max-w-2xl pt-44'>
          <p class='font-bold text-5xl mb-3'>Make business with us & become beautiful</p>
          <p class='text-sm mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button class='bg-pink-500 text-white px-6 py-2 text-xs'>GET STARTED</button>
          </div>
          <div className='image'>
            <img src={banner} class='scale-75'/>
          </div>
        </div>
        <div className='services'>
          <p class='font-bold text-3xl mb-3'>Services</p>
          <p class='text-sm mb-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum</p>
          <div className='card' class='flex justify-evenly'>
            <div className='card-1 w-60 drop-shadow-2xl bg-white rounded-3xl'>
              <img src={research} alt="" class='scale-150 m-10 mx-auto'/>
              <p class='text-center py-2 font-bold'>Market Research</p>
              <p class='text-center pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='card-1 w-60 drop-shadow-2xl bg-white rounded-3xl'>
              <img src={technology} alt="" class='scale-150 m-10 mx-auto'/>
              <p class='text-center py-2 font-bold'>Lastest Technology</p>
              <p class='text-center pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='card-1 w-60 drop-shadow-2xl bg-white rounded-3xl'>
              <img src={cloud} alt="" class='scale-150 m-10 mx-auto'/>
              <p class='text-center py-2 font-bold'>Data Processing</p>
              <p class='text-center pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
            <div className='card-1 w-60 drop-shadow-2xl bg-white rounded-3xl'>
              <img src={seo} alt="" class='scale-150 m-10 mx-auto'/>
              <p class='text-center py-2 font-bold'>Customer Service</p>
              <p class='text-center pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </div>
          </div>
        </div>
        <div className='solution' class='mt-40 flex justify-between'>
          <div className='text' class='w-2/5'>
            <p class='font-bold text-3xl mb-3'>Best Digital Marketing Solution</p>
            <p class='text-sm mb-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum Lorem ipsum dolor sit amet, hendrerit mel, es vidit eu lorem animal iracundia. Ius te altera essent incorrupte.</p>
            <ul class='font-bold'>
              <li>Hendrerit omittantur mel,es vidit eu lorem animal.</li>
              <li>The best marketing company to boost your web</li>
              <li>The Secrets to Successful About Hexan</li>
            </ul>
          </div> 
          <div class='image'>
            <img src={solution} class='w-96 scale-125 bg-pink-50 py-5 px-20 rounded-l-full'/>
          </div>
        </div>
        <div className='contact' class='mt-40'>
          <div className='text'>
            <p class='font-bold text-3xl mb-3'>Contact</p>
            <p class='text-sm mb-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum</p>
          </div>
          <form class='flex justify-evenly pt-10' name='contact-form' method='POST' data-netlify='true'>
            <input type='hidden' name='form-name' value='contact-form'></input>
            <input type="text" placeholder='Mail' name='email' class="mt-1 w-3/5 px-3 py-2 bg-white border-pink-400 rounded-full text-sm shadow-sm placeholder-slate-400 border-4" />
            <button type='submit' class='bg-pink-400 rounded-full py-3 px-16 text-white font-bold'>SUBMIT</button>
          </form>
        </div>
      </body>
      <img src={logo} class='mt-20 mb-10'/>
      <footer class='text-center border-t-4 border-black pt-5'>
        <p>© all Rights Reserved by Hexan</p>
      </footer>
    </div>
  );
}

export default App;
