import React from 'react';
import TodoListCard from './components/TodoListCard';
import './styles/app.css'
import {QueryClient,QueryClientProvider} from 'react-query'
const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoListCard/>
    </QueryClientProvider>
  );
}

export default App;
