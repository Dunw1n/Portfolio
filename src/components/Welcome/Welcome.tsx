import { useRef, useState } from 'react';
import { InfoMe } from '@widgets/InfoMe/InfoMe';
import { MusicTemplate } from '@widgets/MusicTemplate/MusicTemplate';
import { TopBlock } from '@widgets/TopBlock/TopBlock';
import { Animation } from '../Animation/Animation';
import { ContentMain } from '@widgets/ContentMain/ContentMain';

import trackOne from '@assets/sounds/one-track.mp3';
import trackTwo from '@assets/sounds/two-track.mp3';

import PrewievNearLight from "@assets/sounds/logotypes/NearLightLogo.jpg";
import PrewievLoom from "@assets/sounds/logotypes/LoomLogo.jpg";


import './Welcome.scss';

export const Welcome = () => {
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (src: string) => {
    if (!audioRef.current) {
        audioRef.current = new Audio();
    }

    const audio = audioRef.current;

    if (activeTrack !== src) {
        audio.pause();
        audio.currentTime = 0;
        
        audio.src = src;

        audio.load();

        audio.play().catch((err) => {
            console.warn('Playback prevented until user interaction', err);
        });

        setActiveTrack(src);
        setIsPlaying(true);
        return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((err) => {
        console.warn('Playback prevented until user interaction', err);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="app-welcome">
      <div className="container">
        <div className="app-welcome-wrapper">
          <div className="app-welcome-widget">
            <InfoMe />
            <MusicTemplate
              isActive={activeTrack === trackOne && isPlaying}
              PrewievSound={PrewievNearLight}
              onPlay={() => togglePlay(trackOne)}
              nameMusic="Near Light"
              teamMusic="Olafur Arnalds"
            />
            <MusicTemplate
              isActive={activeTrack === trackTwo && isPlaying}
              PrewievSound={PrewievLoom}
              onPlay={() => togglePlay(trackTwo)}
              nameMusic="Loom"
              teamMusic="Olafur Arnalds, Bonodo"
            />
          </div>

          <div className="app-welcome-text">
            <TopBlock textContent="Добро пожаловать" />
            <ContentMain />
          </div>
        </div>
      </div>
      <Animation />
    </div>
  );
};