/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { AppProps } from "./types";
import Link from "next/link";

const BlogPage = ({ title }: AppProps) => {
  return(
    <div>
      <Head>
        <title>Blog: You are reading blog zone</title>
        <meta name="description" content="Main container for every zones" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sticky top-0 w-full backdrop-blur bg-slate-900/75">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 border-b border-slate-900/10 px-8">
            <div className="relative flex items-center">
              <a className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto">
                <span className="sr-only">Tailwind CSS home page</span>
                <svg height="40" version="1.1" viewBox="0 0 148 90" width="82"><path d="M34.992 23.495h27.855v2.219H37.546v16.699h23.792v2.219H37.546v18.334h25.591v2.219H34.992v-41.69zm30.35 0h2.96l13.115 18.334 13.405-18.334L113.055.207 83.1 43.756l15.436 21.429H95.46L81.417 45.683 67.316 65.185h-3.018L79.85 43.756 65.343 23.495zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47H99.64zM.145 23.495h3.192l44.011 66.003L29.16 65.185 2.814 26.648l-.116 38.537H.145v-41.69zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443H135c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z" fill="white" fillRule="nonzero"></path></svg>
              </a>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    <li>
                      <Link href='/'>
                        <a className="hover:text-sky-500 dark:hover:text-sky-400">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/blog'>
                        <a className="hover:text-sky-500 dark:hover:text-sky-400">Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/'>
                        <a className="hover:text-sky-500 dark:hover:text-sky-400">App</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-100 h-screen bg-green">
          <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
              <img className="h-12 w-12" src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg" alt="ChitChat Logo" />
            </div>
            <div>
              <div className="text-xl font-medium text-black">{title}</div>
              <p className="text-slate-500">You have a new message!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage