import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { IoLogOutOutline } from "react-icons/io5";
import { Dialog , DialogHeader , DialogDescription , DialogContent} from '@/components/ui/dialog';
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';
// import { toast } from '@/hooks/use-toast';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDialogueBox , setOpenDialogueBox] = useState(false) ;

  const user = JSON.parse(localStorage.getItem('user')) ;

  const login = useGoogleLogin ({
    onSuccess:(response) => getUserData(response), 
    onError : (err) => console.log(err) 
  })

  const getUserData = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}` , {
      headers : {
        Authorization : `Bearer ${tokenInfo?.access_token}` , 
        Accept : 'Application/json'
      }
    }).then((response) => {
      localStorage.setItem('user' , JSON.stringify(response.data))
      setOpenDialogueBox(false) ;
      window.location.reload() ;
    })
  }


  // Effect to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`text-white ${user? 'p-1' : 'p-4'} fixed w-full z-10 ${isScrolled || isMenuOpen? 'bg-white shadow-md ': 'bg-transparent '}`}>
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo.svg" className="text-2xl font-bold" />
        <nav className="hidden md:flex space-x-6 ">
          <a href="/home" className="text-[black] font-bold hover:">Home</a>
          <a href="/howItWorks" className="text-[black] font-bold hover">How it Works</a>
          <a href="/testimonials" className="text-[black] font-bold hover">Testimonials</a>
          <a href="#" className="text-[black] font-bold hover">Contact</a>
        </nav>

        {user ?
          <div className='flex gap-8 items-center'>
            <a href='/my-trips'>
            <Button >My Trips</Button>
            </a>
            <Popover>
              <PopoverTrigger className={`${user ? 'bg-transparent' : 'bg-transparent'}`}><img src={user?.picture} alt="" className=' rounded-full w-10 h-10' />
              </PopoverTrigger>
              <PopoverContent className='w-full flex gap-2 items-center'>
                <IoLogOutOutline />
                  <h2 className='font-semibold cursor-pointer'
                      onClick={() => {
                        googleLogout() 
                        localStorage.clear() ;
                        window.location.reload() ;
                      }}
                  >LogOut</h2>
              </PopoverContent>
            </Popover>

          </div>
          :
          <Button onClick={() => {
            setOpenDialogueBox(true)
          }} className="hidden md:flex">Sign In</Button>
        }
              <Dialog open={openDialogueBox} >
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <img src="logo.svg" alt="" />
            <h2 className='font-bold text-black mt-7 text-lg justify-evenly'>Sign In with Google</h2>
            <p>Sign In to App with google securely</p>

            <Button onClick={login} className='w-full mt-5 flex gap-4 items-center' >
              
              <FcGoogle className='h-7 w-7'/>
                Sign In with Google
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
      </Dialog>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
          {isMenuOpen ? <X />  : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-2 mt-4 md:hidden"
        >
          <a href="/home" className=" text-[black] hover:">Home</a>
          <a href="/howItWorks" className="text-[black] hover">How it Works</a>
          <a href="/testimonials" className="text-[black] hover">Testimonials</a>
          <a href="#" className="text-[black] hover">Contact</a>
          {user ? 
          ''
          :
          <Button className="w-[100px]" >Sign In</Button>
          } 
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
