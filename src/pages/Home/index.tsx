import { GetServerSideProps } from 'next'
import { getSession, signOut, useSession } from 'next-auth/react'

import Image from 'next/image'

import { useState, useEffect } from 'react'

import Confetti from 'react-confetti'

export default function Login() {
  const { data: session } = useSession()

  const [pieces, setPieces] = useState(1000)
  const stopConfetti = () => {
    setTimeout(() => setPieces(0), 3000)
  }

  useEffect(() => stopConfetti(), [])
  return (
    <>
      <Confetti numberOfPieces={pieces} width={2000} height={952} />
      <div className="h-screen flex flex-col justify-center items-center  text-center text-slate-950 bg-slate-600 ">
        <div className=" flex flex-col text-white">
          <p className=" mb-6 text-lg text-gray-300">
            welcome to the home page
          </p>
          <div className="flex flex-row w-96  items-center ml-8 mb-6">
            {session?.user?.image && (
              <Image
                className=" rounded-full"
                src={session.user.image}
                width={80}
                height={80}
                alt="Picture of the author"
              />
            )}
            <p className=" text-xl ml-3">{session?.user?.name}</p>
          </div>
          <button
            className=" h-10 rounded-xl bg-orange-800"
            onClick={() => signOut()}
          >
            Sair
          </button>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }
}
