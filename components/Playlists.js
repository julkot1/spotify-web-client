import Link from 'next/link'
const Playlists = ({ playlists }) => {
  return (
    <div>
      <ul>
        {playlists.map(({ name, owner, tracks, id }) => (
          <li key={id}>
            <Link
              href={`playlist?id=${id}`}
            >{`${name} by ${owner} (${tracks} tracks)`}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Playlists
