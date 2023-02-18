import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
import Todos from '../components/todo'

export default function Home() {
  return (
    <div>
     <Todos/>
    </div>
  )
}
