// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

//import Profile from './qcomps/profile_mistake';
// import FirstComponent from './qcomps/firstcomp';
// import Bio from './qcomps/bios'
// import TodoList from './qcomps/todos';

import Profile from "./components/profile_props"
import Gallery from "./qcomps/gallery_props"
export default function Home() {
  return (
    
    <div>
      <Profile />
      <Gallery />
      {/* <FirstComponent />
      <Bio />
      <TodoList /> */}
    </div>
  )
}
