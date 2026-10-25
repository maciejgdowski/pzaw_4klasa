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
    <>
      <td>
        <span className="fw-bold">{name}</span>
      </td>
      <td>
        <span className="float-end">{minutes}:{seconds}</span>
      </td>
    </>
  );
}

export default Song;
