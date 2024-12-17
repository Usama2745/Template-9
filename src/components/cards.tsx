import React from 'react'
import Image from "next/image";

function cards() {
  return (
    <div>
    <div className='flex flex-col-1 w-[216px] h-[24px] gap-2 top-[-3190] left-[-2554]'>
        <Image src="/PinterestLogo.png" alt='logo'width={15} height={14.24}  />
        <Image src="/Vector (2).png" alt='logo'width={24} height={24}  />
        <Image src="/twitter.png" alt='logo'width={18.99} height={16.5}  />
        <Image src="/instagram.png" alt='logo'width={24} height={24}  />
        <Image src="/youtube.png" alt='logo'width={19.5} height={14.93}  />

    </div>
    <div className='w-[312px] h-[382px] py-12'>
        <Image src="/photo.png" alt='image' width={312} height={312} />
        <div className='text-center '>
        <h1 className='font-bold text-2xl'>Bulbul Hassan</h1>
        <p>Chef</p>
        </div>
    </div>

    <div className='py-12 flex'>
        <Image src='/Icon.png' alt='logo' width={100} height={98} />
        <div >
        <h1 className='font-bold px-2 text-2xl'>High Quality coffee</h1>
        <p className='font-Helvetica text-normal px-2'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Leo augue nibh .</p>
        </div>
    </div>

    <div className='w-[312px] h-[382px] py-12'>
        <Image src="/photo2.png" alt='image' width={312} height={379.17} />
        <div className='text-center '>
        <h1 className='font-bold text-2xl'>Tahmina Rumi</h1>
        <p>Chef</p>
        </div>
    </div>
   

   
    <div className=' w-[241px] h-[40px] rounded-6px py-12'>
        <div className='py-16'>
            <input type='text ' placeholder='Enter You Email' />
            <button className='bg-orange-500'><Image src='/carbon_send-alt-filled (1).png' alt='logo' width={19} height={19} /></button>
        </div>
    </div>

    <div>
        <div className='py-16 flex my-6'>
            <Image src='/Factory.png' alt='logo' width={55} height={56} />
            <p className='font-Helvetica my-3 mx-2 font-bold text-2xl'>Quality maintain</p>
        </div>
    </div>

    <div className='w-[312px] h-[398px] py-12'>
        <Image src="/photo3.png" alt='image' width={312} height={398} />
        <div className='text-center '>
        <h1 className='font-bold text-2xl'>Mark Henry</h1>
        <p>Owner</p>
        </div>
    </div>

    <div className='py-12'>
    <div className='w-[312px] h-[364px] my-16 rounded-6 py-12'>
        <Image src="/photo4.png" alt='image' width={312} height={364} />
        <div className='text-center '>
        <h1 className='font-bold text-2xl'>Grand Italiano</h1>
        <p className='font-Helvetica text-normal leading-24'>26 Item</p>
        </div>
    </div>
    </div>

    <div className='w-[260px] h-[76px] rounded-6px  flex py-12 px-4 mx-2'>
        <div className='w-[55px] h-[56px]'>
        <Image src='/Timer.png' alt='timer' width={37.81} height={38.5} />
        </div>
        <p className='my-2 font-Helvetica'>24/7 services</p>

    </div>

    <div className='w-[424px] h-[556px] my-16 rounded-6 py-12'>
        <Image src="/photo5.png" alt='image' width={391} height={313} />

        <div className='mx-6'>
        <div className='flex  w-[280px] h-[24px] my-2 space-6'>
        <div>
        <p className=' flex'> <Image src='/Calendar.png' alt='logo' width={24} height={24} />02-jan-2022</p>
        </div>
        <div>
        <p className=' flex'> <Image src='/Chats.png' alt='logo' width={24} height={24} />Comments (03)</p>
        </div>
        </div>

        <div className='w-[384px] h-[56px]'>
            <h1 className='font-Helvetica text-20px leading-28px font-bold text-2xl'>Chocolate Truffle Cake With <br />
            Honey Flavor</h1>
            <p className='w-[384px] h-[72px] font-Helvetica text-normal'>Lorem ipsum dolor sit amet, consectetur elit. Non mi <br />
             sed etiam a id at ultricies neque.Tempus,poten diam <br />
              ac integer id tellus est.</p>
              <div className='flex space-1 my-4'>
                <p>Read more</p>
                <Image src='/ArrowRight (1).png' alt='logo' width={19.14} height={20} />
              </div>
        </div>
        </div>


        <div className='my-12 py-14 flex'>
            <div className='my-12 flex mx-4 '>
                <Image src='/Hamburger.png' alt='logo' width={55} height={56.73} />
                <h1 className='my-4 font-bold mx-2 text-2xl'>Fresh food</h1>
            </div>
        </div>
    </div>

    <div className='w-[378px] h-[60px] py-14 flex'>
        <div>
        <button className='w-[189px] h-[60px] bg-[#FF9F0D] rounded-md'>Show more</button>
        </div>
        <div className='flex mx-4'>
            <button className='rounded-full bg-[#FF9F0D] w-[60px] h-[60px] justify-center mx-2'>
                <div className='items-center mx-4 flex'>
                <Image src='/Play.png' alt='logo' width={24} height={24} /> 
                <h1 className='px-4 py-3 mx-4 font-bold'>Watch </h1>
              </div>
            </button>
        </div>
    </div>

    <div className='w-[427.12px] h-[548px] my-16 rounded-6 py-12'>
        <Image src="/photo6.png" alt='image' width={417} height={293} />

        <div className='mx-6'>
        <div className='flex  w-[280px] h-[24px] my-2 space-6'>
        <div>
        <p className=' flex mx-2'>09 February2022</p>
        </div>
        <div className='flex mx-2'>
        <Image src='/men.png' alt='logo' width={13} height={15} />
        </div>
        <div className='mx-4'>
        <p className=' flex '> By Albert</p>
        </div>
        </div>

        <div className='w-[294px] h-[64px]'>
            <h1 className='font-Helvetica text-20px leading-28px font-bold text-2xl'>Simple coffee Recipes for 
            Next Spring !</h1>
            <p className='w-[384px] h-[72px] font-Helvetica text-normal'>Lorem ipsum dolor sit amet, consectetur elit. Non mi <br />
             sed etiam a id at ultricies neque.Tempus,poten diam <br />
              ac integer id tellus est.</p>
              <div className=' py-4'>
                <Image src='/Medium.png' alt='logo' width={178} height={52} />
              </div>
        </div>
        </div>
            <div className='py-12'>
        <div className='flex py-12 my-12 w-[578px] h-[88px]'>
            <h1 className='text-[#FF9F0D] font-bold w-[247px] h-[28px] text-2xl'>Raw Scallops From Erquy</h1>
            <h1 className=' text-[#FF9F0D] px-4 py-2'> <Image src='/Line 43.png' alt='line' width={248} height={13} />
            <div className='py-2'>
            <Image src='/Line 44.png' alt='line' width={248} height={13} />
            </div></h1>
            <h1 className='text-[#FF9F0D] font-bold text-2xl'>32$</h1>
        </div>
        <p className='my-1 py-1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Varius sed pharetra dictum neque massa congue
        </p>
        </div>
   </div>

   <div className='w-[427.12px] h-[548px] my-16 rounded-6 py-12'>
        <Image src="/photo6.png" alt='image' width={417} height={293} />
        <div className=' flex'>
            <div className='py-2 mx-2'>
                <Image src='/Calendar.png' alt='logo' width={20} height={19.98} />
            </div>
        <div className='flex  w-[280px] h-[24px] my-2 '>
        <p className=' flex '>09 February2022</p>
        </div>
        <div className='flex '>
        <Image src='/men.png' alt='logo' width={13} height={15} />
        </div>
        <div className='py-2'>
        <p className=' flex '> By Albert</p>
        </div>
        </div>
        <div className='w-[294px] h-[64px] px-4'>
            <h1 className='font-Helvetica text-20px leading-28px font-bold text-2xl'>Simple coffee Recipes for 
            Next Spring !</h1>
            <p className='w-[384px] h-[72px] font-Helvetica text-normal'>Lorem ipsum dolor sit amet, consectetur elit. Non mi <br />
             sed etiam a id at ultricies neque.Tempus,poten diam <br />
              ac integer id tellus est.</p>
              <div className=' py-4'>
                <Image src='/Medium.png' alt='logo' width={178} height={52} />
              </div>
        </div>
        </div>

        <div className='px-4'>
            <Image src='/Button.png ' alt='button' width={190} height={60} />
        </div>

<div className='px-4 flex py-12'>
<Image src='/ICON (1).png ' alt='button' width={118.85} height={118.47} />
<div>
    <h1 className='font-bold w-[184] h-[40] py-4 text-700 text-2xl' >Cappuccino</h1>
    <p>Lorem ipsum dolor sit amet, consectetur
        <br /> adipiscing elit. Leo augue nibh est nisi.</p>
</div>
</div>
<div className='w-[443px h-[98px] flex' >
<button className=' bg-[#BC9A6C] w-[100px] h-[98px] justify-center mx-2'>
                <div className='items-center  flex mx-4 px-2'>
                <Image src='/Group.png' alt='logo' width={46} height={72} /> 
                </div>
                </button>
                <div className=''>
                <h1 className='font-bold w-[184] h-[40] py-4 text-700 text-2xl' >Promo and deal</h1>
    <p>Lorem ipsum dolor sit amet, consectetur
        <br /> adipiscing elit. Leo augue nibh est nisi.</p>
        </div>
              </div>


              <div className='py-12 my-12 mx-4'>
                <button className='w-[189px] h-[60px] rounded-md bg-[#FF9F0D] text-white font-semibold'>Show more</button>
              </div>

              <div className='w-[443px h-[98px] flex' >
<button className=' bg-[#BC9A6C] w-[100px] h-[98px] justify-center mx-2'>
                <div className='items-center  flex mx-4 px-2'>
                <Image src='/Group (2).png' alt='logo' width={47} height={72.38} /> 
                </div>
                </button>
                <div className=''>
                <h1 className='font-bold w-[184] h-[40] py-4 text-700' >Best chef & Team</h1>
    <p>Lorem ipsum dolor sit amet, consectetur
        <br /> adipiscing elit. Leo augue nibh est nisi.</p>
        </div>
              </div>


              <div className='w-[427.12px] h-[527px] my-16 rounded-6 py-12'>
        <Image src="/photo7.png" alt='image' width={386} height={300} />

        <div className='mx-6'>
        <div className='flex  w-[280px] h-[24px] my-2 space-6'>
        <div className='text-slate-600'>
        <p className=' flex mx-2'>02 January 2022</p>
        </div>
       
        <div className='mx-4 text-slate-600'>
        <p className=' flex '> Comments (03)</p>
        </div>
        </div>
        </div>
        <div className='w-[261px] h-[64px] mx-4'>
            <h1 className='text-2xl font-bold '>Chocolate Truffle Cake<br />
            With Honey Flavor</h1>
            <p className='w-[310px] h-[48px]'>
            Lorem ipsum dolor sit amet, consectetur 
            Varius sed pharetra dictum 
            </p>
            <button className='flex py-4 my-2 '> Read more
            <Image src='/ArrowRight (1).png' alt='Butthon' width={20} height={20} className='mx-1 my-1' />
            </button>
        </div>
    </div>

    <div className='flex'>
        <div className='mx-4'>
            <button className='w-[190px] h-[60px] bg-[#BC9A6C] text-white font-bold'>
                Order now
            </button>
        </div>

        <div className='mx-4'>
            <button className='w-[190px] h-[60px] text-[#BC9A6C] bg-white font-bold border-[#BC9A6C]'>
                See menu
            </button>
        </div>
    </div>

    <div className='w-[1320] h-[240] flex py-12'>
        <h1 className='text-2xl font-bold mx-2'>
        Subscribe<br />
        To Our Newsletter
        </h1>
        <div className='mx-6 w-[559px] h-[56px] mx-4 px-4'>
        <input type='text' placeholder='Enter your Email' className='w-559px] h-[56px]' />
        <button className='bg-[#BC9A6C] text-white fond-bold w-[193px] h-[54.07px]'>Subscribe now</button>
        </div>
        <div className='flex gap-3 h-6 my-4'>
            <Image src='/icon (5).png' alt='Facebook' width={30} height={32} />
            <Image src='/icon (6).png' alt='twitter' width={30} height={20} />
            <Image src='/icon (7).png' alt='youtube' width={30} height={20} />
        </div>
    </div>

    <div className='py-8'>
        <div className='flex my-2 mx-4'>
        <Image src='/Am 1.png' alt='coffee logo' width={45} height={45} />
        <h1 className='my-6 mx-4 font-bold'>
        Americano
        </h1>
        </div>
       
        </div>
        

        <div className='w-[427.12px] h-[527px] my-16 rounded-6 py-12'>
        <Image src="/photo8.png" alt='image' width={386} height={300} />

        <div className='mx-6'>
        <div className='flex  w-[280px] h-[24px] my-2 space-6'>
        <div className='text-slate-600'>
        <p className=' flex mx-2'>02 January 2022</p>
        </div>
       
        <div className='mx-4 text-slate-600'>
        <p className=' flex '> Comments (03)</p>
        </div>
        </div>
        </div>
        <div className='w-[261px] h-[64px] mx-4'>
            <h1 className='text-2xl font-bold '>Traditional Soft Pretzels
            with Sweet Beer Cheese</h1>
            <p className='w-[310px] h-[48px]'>
            Lorem ipsum dolor sit amet, consectetur 
            Varius sed pharetra dictum 
            </p>
            <button className='flex py-4 my-2 '> Read more
            <Image src='/ArrowRight (1).png' alt='Butthon' width={20} height={20} className='mx-1 my-1' />
            </button>
        </div>
        </div>
       

       <div className='py-8 '>
        <div className='py-8'>
            <Image src='/icon (8).png' alt='logo' width={66} height={46} />
        </div>
        </div>


        <div className='flex'>
            <div>
                <Image src='/Ellipse 30.png' alt='photo' width={81} height={81} />
            </div>

            <div className='mx-4 w-[642px] h-[289px]'>
                    <h1 className='text-3xl font-bold my-2'>
                    Md.Arafat Hossion
                    </h1>
                    <p className='text-2xl'>Chef, London</p>
                    <p className='text-2xl flex gap-2 my-2'>5.0
                        <Image src='/star 4.png' alt='star' width={24} height={24} />
                        <Image src='/star 4.png' alt='star' width={24} height={24} />
                        <Image src='/star 4.png' alt='star' width={24} height={24} />
                        <Image src='/star 4.png' alt='star' width={24} height={24} />
                        <Image src='/star 5.png' alt='star' width={24} height={24} />
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque<br />
                     diam pellentesque bibendum non dui volutpat fringilla bibendum. <br />
                     Urna, elit augue urna, vitae feugiat pretium donec id elementum. <br />
                     Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit<br />
                     eu velit in consequat.
                    </p>
            </div>
        </div>

        <div className='py-8 my-8'>
        <div className='w-[376px] h-[79px] flex'>
            <Image src='/photo9.png' alt='logo' width={80} height={79} className='rounded-md mx-2' />
            <h1 className='my-4 mx-4 py-8 text-2xl font-bold text-[#195A00]'>12.5$</h1>
        </div>
        </div>


        <div>
            <Image src='/Component 49.png' alt='logo' width={760} height={111} />
        </div>


        <div className='py-8'>
        <div className='flex my-2 mx-4'>
        <Image src='/out line.png' alt='coffee logo' width={45} height={45} />
        <h1 className='my-6 mx-4 font-bold'>
        Esperesso
        </h1>
        </div>


        <div className='w-[427.12px] h-[527px] my-16 rounded-6 py-12'>
        <Image src="/photo10.png" alt='image' width={386} height={300} />

        <div className='mx-6'>
        <div className='flex  w-[280px] h-[24px] my-2 space-6'>
        <div className='text-slate-600'>
        <p className=' flex mx-2 my-4'>02 January 2022</p>
        </div>
       
        <div className='mx-4 text-slate-600'>
        <p className=' flex my-4'> Comments (03)</p>
        </div>
        </div>
        </div>
        <div className='w-[261px] h-[64px] mx-4'>
            <h1 className='text-2xl font-bold my-6 '>To Do A Digital Detox 
            Cooking Challenge</h1>
            <p className='w-[310px] h-[48px] my-4'>
            Lorem ipsum dolor sit amet, consectetur 
            Varius sed pharetra dictum 
            </p>
            <button className='flex py-4 my-2 '> Read more
            <Image src='/ArrowRight (1).png' alt='Butthon' width={20} height={20} className='mx-1 my-1' />
            </button>
        </div>
        </div>
        </div>


        
        <div className='py-8'>
        <div className='flex my-2 mx-4'>
        <Image src='/icon (9).png' alt='coffee logo' width={45} height={45} />
        <h1 className='my-6 mx-4 font-bold text-2xl'>
        Arabica
        </h1>
        </div>
        </div>
      

  

    </div>
  )
}

export default cards