import React from "react";
import { Footer } from "flowbite-react";
import { overview } from "../data";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { header } from "../data";

const MyFooter = () => {
  const { logo } = header;

  return (
    <footer
      className="bg-gradient-to-r from-emerald-900 to-emerald-900 rounded-none font-secondary py-8 text-white"
    >
      <div
        className="w-full container mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-1">
            <div className="mx-auto flex justify-center items-center">
            <a
              href=""
              className="text-2xl font-semibold flex"
            >
              <img 
                src={logo}
                alt=""
                className="w-[150px] flex justify-center items-center"
              />
            </a>
            </div>
            <div className="mt-4 ml-5 flex space-x-6 sm:mt-0 sm:justify-start justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
            </div>
          </div>
          <div className="flex flex-cols space-x-[150px] font-semibold">
            <div className="text-center text-[12px]">
              <p className="text-2xl">Alamat</p>
              <p>Universitas Riau</p>
              <p className="max-w-[170px]"> Kampus Bina Widya Km 12,5 Simpang Baru</p>
              <p>Pekanbaru 28293 – Indonesia</p>
            </div>
            <div>
            <div className="text-center text-[12px]">
              <p className="text-2xl">Profil</p>
              <p><a href="#">Beranda</a></p>
              <p><a href="#">Tentang Kami</a></p>
              <p><a href="#">Kontak</a></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
