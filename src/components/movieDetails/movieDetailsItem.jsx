import React from "react"
import {
  Wrapper,
  Title,
  Img,
  Text,
  TextBlock,
  Tagline,
  List, GenresItem
} from "components/movieDetails/movieDetailsItem.styled"

const MovieDetailsItem = ({
  title,
  genres,
  overview,
  poster,
  release,
  tagline,
  vote
}) => {


  return <Wrapper>
      <Img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} width="280" height="421" />
      <TextBlock>
        <Title>
          {title}
        </Title>
        <Tagline>
          {tagline}
        </Tagline>
        <List>
          <GenresItem>
            <Text>
              ⭐ {vote}
            </Text>
          </GenresItem>
          <GenresItem>
            <Text>
              {release}
            </Text>
          </GenresItem>
        </List>
        <List>
          {genres.map(genre => {
            return <GenresItem key={genre}>
                <Text>
                  {genre}
                </Text>
              </GenresItem>
          })}
        </List>

        <Text>
          {overview}
        </Text>
      </TextBlock>
    </Wrapper>
}

export default MovieDetailsItem
