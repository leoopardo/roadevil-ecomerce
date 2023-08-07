"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="h-96 w-screen bg-black mt-56 pl-32 pr-32 pt-10 flex flex-wrap flex-row justify-center">
      <div
        className="flex flex-col items-start mr-8"
        style={{ maxWidth: "220px", minWidth: "150px" }}
      >
        <h2 className="text-gray-200 text-2xl italic mb-6">CONTATO</h2>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-3"
          style={{ opacity: 0.6 }}
        >
          10 Praça João Paulo II Bauru, São Paulo
        </motion.p>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-3"
          style={{ opacity: 0.6 }}
        >
          99999-999
        </motion.p>
        <motion.a
          whileHover={{
            opacity: 1,
            textDecoration: "underline",
          }}
          className="text-gray-200 text-base"
          style={{ opacity: 0.6 }}
          href="/"
        >
          roadevil@email.com
        </motion.a>
      </div>
      <div
        className="flex flex-col items-start mr-8"
        style={{ maxWidth: "220px", minWidth: "150px" }}
      >
        <h2 className="text-gray-200 text-2xl italic mb-6">SUPORTE</h2>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-3"
          style={{ opacity: 0.6 }}
        >
          Termos e condições
        </motion.p>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-3"
          style={{ opacity: 0.6 }}
        >
          Política de privacidade
        </motion.p>
      </div>
      <div
        className="flex flex-col items-start mr-8"
        style={{ maxWidth: "220px", minWidth: "150px" }}
      >
        <h2 className="text-gray-200 text-2xl italic mb-6">REDES SOCIAIS</h2>
        <div className="flex flex-row justify-between w-full">
          <motion.img
            whileHover={{
              opacity: 1,
            }}
            style={{ opacity: 0.6 }}
            className="h-8"
            src="/facebook.svg"
          />{" "}
          <motion.img
            whileHover={{
              opacity: 1,
            }}
            style={{ opacity: 0.6 }}
            className="h-7"
            src="/twitter.svg"
          />{" "}
          <motion.img
            whileHover={{
              opacity: 1,
            }}
            style={{ opacity: 0.6 }}
            className="h-8"
            src="/instagram.svg"
          />{" "}
          <motion.img
            whileHover={{
              opacity: 1,
            }}
            style={{ opacity: 0.6 }}
            className="h-8"
            src="/youtube.svg"
          />
        </div>
      </div>{" "}
      <div
        className="flex flex-col items-start mr-8"
        style={{ maxWidth: "220px", minWidth: "150px" }}
      >
        <h2 className="text-gray-200 text-2xl italic mb-6">SOBRE</h2>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-3"
          style={{ opacity: 0.6 }}
        >
          Pesquisar
        </motion.p>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-3"
          style={{ opacity: 0.6 }}
        >
          Sobre nós
        </motion.p>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-3"
          style={{ opacity: 0.6 }}
        >
          Novidades
        </motion.p>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-3"
          style={{ opacity: 0.6 }}
        >
          Contatos
        </motion.p>
      </div>
      <div
        className="flex flex-col items-start mr-8"
        style={{ maxWidth: "260px", minWidth: "150px" }}
      >
        <h2 className="text-gray-200 text-2xl italic mb-6">
          ME MANTENHA INFORMADO
        </h2>
        <motion.p
          whileHover={{
            opacity: 1,
          }}
          className="text-gray-200 text-base mb-6"
          style={{ opacity: 0.6 }}
        >
          Deixe seu email e para que possamos lhe enviar promoções e novidades
        </motion.p>
        <div className="w-full h-16 flex justify-center items-center">
          {" "}
          <input
            className="bg-gray-800 border-gray-950 h-11 w-64 ml-1 text-white pl-3"
            placeholder="email"
          />{" "}
          <button className="bg-gray-800 border-gray-950 h-11 ml-1 text-white w-6">
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
