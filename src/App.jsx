import './App.css'
import { useForm } from './hooks/useForm';

function App() {

  const {onInputChange, user, password, onReset} = useForm({initialForm: {
    user: '',
    password: ''
  }});

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("user: ", user);
    console.log("password: ", password);

    onReset();
  }

  return (
    <section>
      <div className='mx-auto container flex justify-center items-center'>
        <form className='max-w-72 rounded-lg shadow-lg p-4' onSubmit={onSubmit} >
          <div className='flex flex-col'>
            <label htmlFor="user">Usuario: </label>
            <input 
              type="text"
              className='border-2 border-black rounded-lg p-1' 
              name='user'
              onChange={onInputChange}
              value={user}
            />
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor="password">Password: </label>
            <input 
              type="text" 
              className='border-2 border-black rounded-lg p-1' 
              name='password'
              onChange={onInputChange}
              value={password}
            />
          </div>
          <div className='mt-4'>
            <button
              className='border-2 border-black rounded-lg p-1 w-full bg-slate-500'
              type='submit'
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default App
