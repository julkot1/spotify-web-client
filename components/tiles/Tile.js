import Link from 'next/link'
import styled from 'styled-components'
const StyledTile = styled.article`
  background: #424242;
  width: 220px;
  border-radius: 10px;
  padding: 0.3rem;
  height: 100%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Text = styled.p`
  max-width: 10em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
`
const Tile = ({ data: { title, desc, type, img, id } }) => {
  return (
    <StyledTile>
      <img src={img} width={200} height={200} />
      <Link href={`/${type}/${id}`}>
        <a>
          <Text>{title}</Text>
        </a>
      </Link>
      <Text>{desc}</Text>
    </StyledTile>
  )
}
export default Tile
