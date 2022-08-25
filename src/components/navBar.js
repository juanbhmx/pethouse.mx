import { Fragment, useState, useEffect } from "react";
import FotoProfile from '../img/prod.jpg'
import Logo from '../img/logo.png'
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import ProfileUser from "./Profile";
import Home from "./Home";
// import Message from './Messages'
import Messenger from './Messenger'
import NotiHome from "./NotificaHome";
// import NotificationPush from './Notification'
import HelpUrgente from './HelpUrgent'
// import MarketPlace from './Marketplace/Marketplace'
import Filter from './Marketplace/Filter'
import Notificaciones from "./Notifications/NotificaMobil";
import MenuMob from "./MenuMob/Menu";


export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [nav, setNav] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    window.addEventListener("click", (event) => {
      const isSidebar = event.target.closest("#sidebar")
      if (isSidebar) return;
      setNav("bloquea notifitions")
    })
  })



  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (

    <ul id="sidebar" className={openNav ? "mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" : "mb-4 mt-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"}>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        {/* <a href="#" className="flex items-center">
                    Perfil
                </a> */}
        <Link to="/" onClick={() => setNav(1)}>
          <svg className={nav === 1 ? "w-8 h-8 text-green-400" : "w-8 h-8 text-white"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
        </Link>

        {/* {nav == 1 ? "w-8 h-8 text-sm border-green-400 pt-3 rounded-t text-white mr-12" : "w-8 h-8 text-sm text-white py-3 flex items-center mr-12 hover:text-white cursor-pointer"} */}

      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a className="cursor-pointer" onClick={() => setNav("active")}>
          <svg className={nav === "active" ? "w-8 h-8 text-green-400" : "w-8 h-8 text-white"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </a>
        {/* <Link to="/notification" onClick={() => setNav("active")}>
                    <svg className={nav == 2 ? "w-8 h-8 text-green-400" : "w-8 h-8 text-white"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                </Link> */}
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >

        <Link to="/marketplace" onClick={() => setNav("marketplace")}>
          <svg className={nav === "marketplace" ? "w-8 h-8 text-green-400" : "w-8 h-8 text-white"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/help" onClick={() => setNav(3)}>
          <svg className={nav === 3 ? "w-8 h-8 text-green-400" : "w-8 h-8 text-white"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/messenger" onClick={() => setNav(5)}>
          <svg className={nav === 5 ? "w-8 h-8 text-green-400" : "w-8 h-8 text-white"} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
        </Link>
      </Typography>

    </ul>
  );

  return (
    <Router>

      <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4 dark:bg-slate-700 text-white dark:border-slate-700">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">

          <Link to="/">
            <img className="p-1 h-10 dark:ring-green-400 cursor-pointer" src={Logo} alt="Bordered avatar" />
          </Link>

          <div className="hidden lg:block">{navList}</div>
          <Link to="/profile" onClick={() => setNav(5)}>
            <img className=" p-1 w-10 h-10 rounded-full ring-2 ring-green-400 dark:ring-green-400 cursor-pointer" src={FotoProfile} alt="Bordered avatar" />
          </Link>


        </div>
      </Navbar>


      <div className="w-full md:hidden lg:hidden xl:hidden">
        <section id="bottom-navigation" className="block fixed inset-x-0 bottom-0 z-10 bg-slate-700 text-white shadow-lg">
          <div id="tabs" className="flex justify-between">
            <div className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <svg className="w-6 h-6 inline-block mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <Link to="/">
                <span className="tab tab-home block text-xs">Inicio</span>
              </Link>
            </div>
            <div href="#" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <svg className="w-6 h-6 inline-block mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              <Link to="/help">
                <span className="tab tab-whishlist block text-xs">Ayuda</span>
              </Link>
            </div>
            <div href="#" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <svg className="w-6 h-6 inline-block mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              <Link to="/marketplace">
                <span className="tab tab-explore block text-xs">Marketplace</span>
              </Link>
            </div>
            <div href="#" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <svg className="w-6 h-6 inline-block mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
              <Link to="/notifications">
                <span className="tab tab-kategori block text-xs">Notificaciones</span>
              </Link>
            </div>
            <div href="#" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <svg className="w-6 h-6 inline-block mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              <span className="tab tab-kategori block text-xs" onClick={() => setMobileFiltersOpen(true)}>Menú</span>
            </div>

          </div>
        </section>
      </div>

      {mobileFiltersOpen ?
        <>
          <MenuMob />
        </>
        :
        null
      }





      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Filter />} />
        <Route path="/help" element={<HelpUrgente />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/notifications" element={<Notificaciones />} />
      </Routes>

      <NotiHome estatumodal={nav} />

      {/* <NotificationPush name="Juan Bautista" comentario="Hola sabandija" />
            <NotificationPush name="Test Prop" comentario="jelow soy notification" /> */}
    </Router>
  );
}