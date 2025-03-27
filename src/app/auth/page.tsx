"use client"

import Github from '@/components/icons/Github';
import Google from '@/components/icons/Google';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FieldValues, useForm } from 'react-hook-form';

// interface FormData {
//   email: string;
//   password: string;
// }

const Page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <main className='flex flex-col items-center justify-center gap-4 h-screen w-screen p-4'>
      <h1>Welcome to Chatrize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 max-w-sm w-full'>
        <Input {...register('email',  { required: true })} placeholder='Email' />
        {errors.email && <span className='text-red-500'>Email is required</span>}

        <Input {...register('password',  { required: true })} placeholder='Password' />
        {errors.password && <span className='text-red-500'>Password is required</span>}
        
        <Button type='submit'>Submit</Button>
      </form>
      <section className='flex flex-col items-center gap-2'>
        <p>Or continue with</p>
        <div className='flex gap-2'>
          <Button>
          <Github /> Github
        </Button>
        <Button>
          <Google /> Google
        </Button>
        </div>
      </section>
    </main>
  )
}

export default Page;
