
/**
 * @param name - song name
 * @param duration - song duration in seconds
 */
export interface SongProps {
  name: string;
  duration: number;
}

function Song({ name, duration }: SongProps) {
  const minutes = Math.floor(duration / 60);
  const seconds = String(duration % 60).padStart(2, "0");

  return (
    <li>
      {name} | {minutes}:{seconds}
    </li>
  );
}

export default Song;