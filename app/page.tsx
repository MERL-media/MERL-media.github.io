import Image from 'next/image';
import Hero from '../public/hero-image.png';
import Score from "../public/score.png";
import Carousel from "./components/carousel.tsx";
import Poster7 from "../public/posters/spiderverse.png";
import Poster8 from "../public/posters/wandavision.png";
import Birds from "../public/birds.png";

export default function Home() {
  return (
    <main> 
      {/* hero and tagline */}
      <div className="px-4 py-12">
        <div className="flex flex-row items-center justify-center">
            <Image src={Hero} width={500} alt="hero illustraiton about MERL" />
          <div className="flex-column px-12 w-80">
            <div className="font-bold text-5xl py-4">Media Education Research Lab</div>
            <div className="text-md">MERL is developing methods for representing diveristy in popular media.</div>
          </div>
        </div>
      </div>

      {/* latest reviews */}
      <div className="bg-neutral-700 p-12">
        <h1 className="font-black text-3xl text-white">Latest Reviews</h1>
        <div className="flex flex-row justify-around">
        <div className="flex flex-row py-4">
          <Image src={Poster8} width={200} alt="poster for WandaVision" />
          <div className="flex flex-col justify-center px-4 w-72">
            <div className="font-medium text-2xl font-black text-white pb-4">WandaVision</div>
            <Image className="pb-4" src={Score} width={200} alt="diversity score"></Image>
            <div className="font-medium text-md text-white pb-4">“WandaVision isn&apos;t particularly offensive when it comes to diversity on screen, but it&apos;s not good either.”</div>
            <div className="font-medium text-md text-white pb-4">Read the review {'>'} </div>
          </div>
        </div>
        <div className="flex flex-row py-4">
          <Image src={Poster7} width={200} alt="poster for Spiderverse" />
          <div className="flex-column px-4 w-72">
            <div className="font-medium text-2xl font-black text-white pb-4">Spider-Man: Into the Spider-Verse</div>
            <Image className="pb-4" src={Score} width={200} alt="diversity score"></Image>
            <div className="font-medium text-md text-white pb-4">“Addressing topics of family, Afro-Latino culture, and women mentorship all across the multiverse...”</div>
            <div className="font-medium text-md text-white pb-4">Read the review {'>'} </div>
          </div>
        </div>
        </div>
      </div>

      {/* articles */}
      <div className="bg-white p-12">
        <h1 className="font-black text-3xl text-neutral-700">Articles</h1>
        <div className="flex flex-row justify-around py-4">
          <div className="flex-column px-4 w-80">
            <div className="font-medium text-2xl font-extrabold text-neutral-700 pb-4">Reframe Report on Gender & Hiring in TV 2023</div>
            <div className="font-medium text-md text-neutral-700 pb-4">According to the ReFrame Report on Gender & Hiring in TV, 108 (54 percent) of the top 200 scripted... </div>
            <div className="font-medium text-md text-neutral-700 pb-4">Read more {'>'} </div>
          </div>
          <div className="flex-column px-4 w-80">
            <div className="font-medium text-2xl font-extrabold text-neutral-700 pb-4">Luminate&apos;s 2023 Entertainment Diversity Progress Report</div>
            <div className="font-medium text-md text-neutral-700 pb-4">The takeaways, according to Deadline, are that intersectionality on screen has shown little change... </div>
            <div className="font-medium text-md text-neutral-700 pb-4">Read more {'>'} </div>
          </div>
          <div className="flex-column px-4 w-80">
            <div className="font-medium text-2xl font-extrabold text-neutral-700 pb-4">Your Balanced Media Diet and Dark Matters</div>
            <div className="font-medium text-md text-neutral-700 pb-4">Your Balanced Media Diet as portrayed in the 2021 exhibition at Science Gallery Dublin BIAS BUILT THIS WAY. Artists and scientists... </div>
            <div className="font-medium text-md text-neutral-700 pb-4">Read more {'>'} </div>
          </div>
        </div>
      </div>

      {/* newsletter */}
      <div className="bg-white pb-12 flex flex-row justify-center items-center">
        <div className="font-bold text-md text-neutral-700 mx-7">Like what you see? Subscribe to our newsletter!</div>
        <input type="text" placeholder="Email Address" className="rounded font-medium text-sm outline outline-neutral-300 px-2 py-1 mx-7 w-96" />
        <button className="rounded font-medium text-md text-white bg-green-700 outline outline-green-700 px-2 py-1 mx-7">Subscribe</button>
      </div>

      {/* carousels */}
      <div className="bg-white p-12">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-black text-3xl text-neutral-700">MERL&apos;s Top 10</h1>
          <h1 className="font-md text-lg text-blue-600">VIEW COLLECTION</h1>
        </div>
        <Carousel />
      </div>
      <div className="bg-white p-12">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-black text-3xl text-neutral-700">Most Popular in 2023</h1>
          <h1 className="font-md text-lg text-blue-600">VIEW COLLECTION</h1>
        </div>
        <Carousel />
      </div>

      {/* how it works */}
      <div className="bg-white p-12 flex flex-row items-centers justify-center">
        <div className="flex-col bg-neutral-700 w-[600px] p-10">
          <div className="text-white font-black text-3xl pb-4">How it Works</div>
          <div className="text-white text-lg pb-4">Each of our reviews is written by a real person. With values. and training! research!</div>
          <div className="text-white text-md pb-4">something about quantitative and qualitative scoring. we want to create legible, meaningful, transparent scores.</div>
          <div className="text-white text-md">Read more about our rating system {'>'} </div>
        </div>
        <Image src={Birds} width={300} height={300} className="mx-4" alt="some birds" />
      </div>

      <footer>
        <div className="bg-white p-12 flex flex-row items-centers justify-center">
          <div className="flex-col mx-8">
            <div className="text-purple-800 font-bold text-lg">About Us</div>
            <div className="text-neutral-700 text-md">Home</div>
            <div className="text-neutral-700 text-md">About MERL</div>
            <div className="text-neutral-700 text-md">Blog</div>
            <div className="text-neutral-700 text-md">Press</div>
            <div className="text-neutral-700 text-md">Contact</div>
          </div>
          <div className="flex-col mx-8">
            <div className="text-purple-800 font-bold text-lg">Our Reviews</div>
            <div className="text-neutral-700 text-md">All Reviews</div>
            <div className="text-neutral-700 text-md">Review System</div>
            <div className="text-neutral-700 text-md">Contributors</div>
          </div>
          <div className="flex-col mx-8">
            <div className="text-neutral-700 font-bold text-lg">Support MERL</div>
            <button className="rounded font-bold text-md text-purple-800 outline outline-purple-800 px-2 py-1 my-2">Donate</button>
            <div className="text-neutral-700 font-bold text-lg mt-2">Social Media</div>
            <div className="text-neutral-700 text-md">imagine icons here</div>
          </div>
          
          <div className="flex-col mx-8">
            <div className="text-neutral-700 font-bold text-lg">Like what you see?</div>
            <div className="text-neutral-700 text-md py-1">Subscribe to our newsletter!</div>
            <div className="py-2"><input type="text" placeholder="Email Address" className="rounded font-medium text-sm outline outline-neutral-300 px-2 py-1 w-56" /></div>
            <div className="py-2"><button className="rounded font-medium text-sm text-white bg-green-700 outline outline-green-700 px-2 py-1">Subscribe</button></div>
            
          </div>
        </div>

      </footer>

    </main>
  )
}
