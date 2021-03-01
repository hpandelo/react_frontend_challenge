import React from 'react'
import styled from 'styled-components';

const MasterPictureImg = styled.img`
  border-radius: 50%;
`;

const Container = styled.div`
  order: ${props => props.order};
`;

export default function MasterPicture({ pictureUrl, pictureAlt, order }) {
  return (
    <Container order={ order }>
      <MasterPictureImg src={ pictureUrl } alt={ pictureAlt } />
    </Container>
  )
}
