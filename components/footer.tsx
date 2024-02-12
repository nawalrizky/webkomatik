import { Facebook, Instagram, Line, Mail } from "@/components/icons";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="footer" className="second-section mt-[10vh] sm:mt-[30vh] px-5 lg:px-10 py-12 bg-white backdrop-blur-md bg-opacity-20 font-sans ">
          <h1 className=" font-bold text-3xl min-[480px]:text-[36px] sm:text-[42px] md:text-[48px] md:leading-tight lg:text-[54px] xl:text-[64px] xl:leading-none">
            Komunitas Mahasiswa TIK <br /> Universitas Gadjah Mada
          </h1>
          <p className="sm:w-2/3 sm:mt-4 min-[480px]:w-2/3 lg:w-1/3 text-left font-light md:text-[24px]">
            Bulaksumur F11, Caturtunggal, Depok, Sleman, Daerah Istimewa
            Yogyakarta 555281
          </p>
          <div className="wrap inline-flex gap-10 mt-6">
            <Link className="hover-fx flex items-center p-2" href="https://www.instagram.com/komatikugm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <Instagram />
            </Link>
            <a className="hover-fx flex items-center p-2" href="mailto:komatik.wg@ugm.ac.id">
              <Mail />
            </a>
            <a className="hover-fx flex items-center p-2" href="https://line.me/R/ti/p/fsr3694v">
              <Line />
            </a>
            <a className="hover-fx flex items-center p-2" href="https://facebook.com/gemastikUGM">
              <Facebook />
            </a>
          </div>
        </footer>
    );}