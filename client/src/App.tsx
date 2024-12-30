import { Container, Stack } from "@chakra-ui/react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import Navbar from "./components/Navbar"

export const BASE_URL = "http://localhost:5000/api"

function App() {
  return (
    <Stack h='100vh'>
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  )
}

export default App
