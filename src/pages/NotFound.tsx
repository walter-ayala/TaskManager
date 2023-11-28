import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ThemeLayout from '../layout/ThemeLayout'

const NotFound: React.FC = () => {
  return (
    <ThemeLayout>
      <Container>
        <Title>Page not found</Title>
        <Link to='/'>Go to the dashboard</Link>
      </Container>
    </ThemeLayout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundDark};
  gap: 10px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
`

const Title = styled.p`
  font-size: 30px;
  color: ${(props) => props.theme.white};
  margin: 0;
`
export default NotFound
