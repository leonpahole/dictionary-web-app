import Image from "next/image";
import IconPlay from "public/images/icon-play.svg";
import { useRef } from "react";

interface IProps {
  audioUrl: string;
}

export const PlaySoundButton = ({ audioUrl }: IProps) => {
  const audio = useRef<HTMLAudioElement | null>();

  const play = () => {
    if (audio.current == null || audio.current.src !== audioUrl) {
      audio.current = new Audio(audioUrl);
    }

    audio.current.play();
  };

  return (
    <button type="button" onClick={play}>
      <Image src={IconPlay} alt="Play audio" width="75" height="75" />
    </button>
  );
};
