import React, { useContext } from 'react';
import { playerContext } from '../context/playerContext';
import { assets, songsData } from '../assets/assets';

const Player = () => {
  const { track,seekBg, seekBar, playStatus, play, pause ,time,previous,next,seekSong} = useContext(playerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="Shuffle" />
          <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt="Previous" />
          {playStatus ?
            <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="Pause" />
            : <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="Play" />
          }
          <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt="Next" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="Loop" />
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none bg-green-800 rounded-full' />
          </div>
          <p>{time.Totaltime.minute}:{time.Totaltime.second}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;