import Image from "next/image";
import ScoreMiniGood from "../../public/score-mini-good.png"
import ScoreMiniOkay from "../../public/score-mini-okay.png"
import ScoreMiniBad from "../../public/score-mini-bad.png"
import Poster1 from "../../public/posters/asteroid-city.png";
import Poster2 from "../../public/posters/barbie.png";
import Poster3 from "../../public/posters/blue-beetle.png";
import Poster4 from "../../public/posters/daredevil.png";
import Poster5 from "../../public/posters/encanto.png";

const Carousel = () => {
  return (
    <div className="flex flex-row justify-around items-center py-4">
      <div className="flex-col justify-center">
        <Image src={Poster1} className="w-40" alt="movie poster" />
        <Image src={ScoreMiniGood} className="w-40 pb-2" alt="score" />
        <div className="font-bold text-lg text-neutral-700 text-center">Asteroid City</div>
      </div>
      <div className="flex-col justify-center">
        <Image src={Poster2} className="w-40" alt="movie poster" />
        <Image src={ScoreMiniOkay} className="w-40 pb-2" alt="score" />
        <div className="font-bold text-lg text-neutral-700 text-center">Barbie</div>
      </div>
      <div className="flex-col justify-center">
        <Image src={Poster3} className="w-40" alt="movie poster" />
        <Image src={ScoreMiniBad} className="w-40 pb-2" alt="score" />
        <div className="font-bold text-lg text-neutral-700 text-center">Blue Beetle</div>
      </div>
      <div className="flex-col justify-center">
        <Image src={Poster4} className="w-40" alt="movie poster" />
        <Image src={ScoreMiniGood} className="w-40 pb-2" alt="score" />
        <div className="font-bold text-lg text-neutral-700 text-center">Daredevil</div>
      </div>
      <div className="flex-col justify-center">
        <Image src={Poster5} className="w-40" alt="movie poster" />
        <Image src={ScoreMiniOkay} className="w-40 pb-2" alt="score" />
        <div className="font-bold text-lg text-neutral-700 text-center">Encanto</div>
      </div>
    </div>
  );
};

export default Carousel;