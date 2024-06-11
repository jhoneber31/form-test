import { useForm } from 'react-hook-form';
import './App.css'

function App() {

  const {
    register, 
    handleSubmit, 
    formState: {errors},
    reset
  } = useForm({
    defaultValues:{
      user: "jhon"
    }
  });


  const onSubmit = handleSubmit((data) => {
    console.log("data es: ", data)
    reset();
  })

  return (
    <section>
      <div className='mx-auto container flex justify-center items-center'>
        <form className='max-w-72 rounded-lg shadow-lg p-4' onSubmit={onSubmit} >
          <div className='flex flex-col'>
            <label htmlFor="user">Usuario: </label>
            <input 
              type="text"
              className='border-2 border-black rounded-lg p-1' 
              {...register("user", {
                required:{
                  value:true,
                  message:"usuario es requerido"
                },
              })}
            />
            {
              errors.user && <span className='text-red-500'>{errors.user.message}</span>
            }
          </div>
          <div className='flex flex-col mt-4'>
            <label htmlFor="password">Password: </label>
            <input 
              type="text" 
              className='border-2 border-black rounded-lg p-1' 
              {...register("password", {
                required:{
                  value:true,
                  message:"password es requerido"
                },
                minLength:{
                  value:6,
                  message:"Minimo 6 caracteres"
                }
              })}
            />
            {
              errors.password && <span className='text-red-500'>{errors.password.message}</span>
            }
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
