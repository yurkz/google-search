import Header from '@/components/Header'
import { getProviders, signIn } from 'next-auth/react'


export default function signin({ providers }) {

    return (
        <>
            <Header />
            <div className='mt-40'>
                {Object.values(providers).map(p => (
                    <div className='flex flex-col items-center' key={p.name}>
                        <img
                            className='w-52 object-cover '
                            alt="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" />

                        <p
                            className='text-sm italic my-10'>
                            This website is created for learning purposes.</p>

                        <button
                            className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-500'
                            onClick={() => signIn(p.id, {
                                callbackUrl: "/"
                            })}>
                            Sign In {p.name}
                        </button>

                    </div>
                ))}
            </div>
        </>
    )
}

export async function getServerSideProps() {
    console.log("getProviders()", await getProviders())
    const providers = await getProviders();
    return {
        props: { providers }
    }
}