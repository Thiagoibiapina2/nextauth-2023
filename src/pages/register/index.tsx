import Head from 'next/head'

// import { useSession, signIn, signOut } from 'next-auth/react'

import { AiOutlineUser } from 'react-icons/ai'

// import { useForm } from 'react-hook-form'
// import { useRouter } from 'next/router'

// import { yupResolver } from '@hookform/resolvers/yup'
// import * as yup from 'yup'
import { signIn } from 'next-auth/react'

export default function Home() {
  // const router = useRouter()

  return (
    <div>
      <Head>
        <title>Form - Use Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen flex-col items-center  bg-purple-600 justify-center">
        <div className="justify-center items-center bg-white w-32rem h-41rem rounded-md text-gray-600">
          <div className="flex flex-col items-center text-4xl mt-6 ">
            <AiOutlineUser />
            <h1>Cadastro</h1>
          </div>

          <div className="text-center itens-center justify-center   mt-10 text-2xl">
            <button
              className=" mt-14 text-white h-9  w-36 rounded-lg  bg-fuchsia-600"
              type="submit"
              onClick={() => signIn('google')}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/*

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z]+$/, 'O nome deverá conter somente letras')
      .required('O nome é obrigatório'),
    email: yup
      .string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: yup
      .string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelos menos 6 digitos'),
  })
  .required()


   const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })



  <form onSubmit={handleSubmit(onSubmit)}>
            <label className="flex flex-col m-10 text-1.4rem">
              Nome
              <input
                {...register('name')}
                type="text"
                placeholder="Digite seu nome"
              />
              <span className=" text-red-600 text-sm">
                {errors.name?.message}
              </span>
            </label>

            <label className="flex flex-col m-10 text-1.4rem">
              Email
              <input
                {...register('email')}
                type="text"
                placeholder="Digite seu email"
              />
              <span className=" text-red-600 text-sm">
                {errors.email?.message}
              </span>
            </label>

            <label className="flex flex-col m-10 text-1.4rem">
              Senha
              <input
                className="text-1xl"
                {...register('password')}
                type="password"
                placeholder="Digite sua senha"
              />
              <span className=" text-red-600 text-sm">
                {errors.password?.message}
              </span>
            </label>
            */