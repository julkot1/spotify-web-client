import FilterBar from '@components/tiles/FilterBar'
import Tile from '@components/tiles/Tile'
import filter from '@utils/filter'
import { useState } from 'react'
import styled from 'styled-components'
import cookies from 'js-cookie'
const Folder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 240px);
  justify-content: center;
`
const Item = styled.li`
  margin: 0.5em;
  height: 300px;
`
const Bar = styled.input`
  width: 400px;
  outline: none;
  border: none;
  border-bottom: 2px
    ${cookies.get('primary_color') ? cookies.get('primary_color') : 'white'}
    solid;
  font-size: 1.25rem;
  color: white;
  background-color: inherit;
`
const FolderItems = ({ id, tiles, title }) => {
  const [Q, setQ] = useState(null)
  cookies.set('primary_color', 'green')
  return (
    <Folder>
      <FilterBar setQ={setQ} Input={Bar} />
      <List>
        {filter(tiles, ['title', 'desc'], Q).map((data) => (
          <Item key={data.id}>
            <Tile data={data} />
          </Item>
        ))}
      </List>
    </Folder>
  )
}
export default FolderItems
