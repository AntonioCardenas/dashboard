import React from "react";
import "../../styles/batchlist.scss";
import "../../styles/modals.scss";
import {LinkIcon} from "../icons/link";
import {Blockchain} from "../icons/blockchain";
import {FarmIcon} from "../icons/farm";
import NewMap from "../common/NewMap";

export const DefaultLanding = () => {
    return (
        <>
            <section>
                <div id="header" className="hero min-h-screen" style={{ backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/affogato-fde9c.appspot.com/o/Banners%2FCOMSA.jpg?alt=media&token=bc36aa90-dc6f-4bb6-b40d-c17310dbd5f9")` }}>
                        <div className="hero-overlay bg-opacity-40 bg-black"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="max-w-2xl mb-4 text-6xl font-black md:text-6xl xl:text-7xl text-white">
                                    Plataforma de trazabilidad de PlaceHolder de Cooperativa
                                </h1>
                                <p className="max-w-2xl mb-6 text-3xl font-light lg:mb-8 md:text-lg lg:text-xl xl:text-4xl text-white">
                                    Nuestro café trazado con la seguridad de la tecnología de blockchain.
                                </p>

                            </div>
                        </div>
                    </div>

                <div id="info" className="section relative pt-20 pb-8 md:pt-16 md:pb-0">
                        <div className="container xl:max-w-6xl mx-auto px-4">
                            <div className="flex flex-wrap flex-row -mx-4 text-center">
                                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
                                     data-wow-duration="1s"
                                >
                                    <div
                                        className="py-8 px-12 mb-12  border-b border-gray-100 bg-stone-100 shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-2">
                                        <div className="inline-block text-black mb-4">
                                            <Blockchain/>
                                        </div>
                                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">BlockChain</h3>
                                        <p className="text-gray-500">Tecnología y registro de información en una cadena de bloques segura, transparente y descentralizada.</p>
                                        <br className="w-4"/>
                                    </div>
                                </div>
                                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                                    <div
                                        className="py-8 px-12 mb-12  border-b border-gray-100 bg-stone-100 shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-2">
                                        <div className="inline-block text-gray-900 mb-4">
                                            <LinkIcon/>
                                        </div>
                                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Trazabilidad</h3>
                                        <p className="text-gray-500">Los movimientos en la cadena de valor del café, almacenados en un blockchain inmutable sin posibilidad de corromper la información.</p>
                                    </div>
                                </div>
                                <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                                    <div
                                        className="py-8 px-12 mb-12  border-b border-gray-100 bg-stone-100  shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-2">
                                        <div className="inline-block text-gray-900 mb-4">
                                            <FarmIcon/>
                                        </div>
                                        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Lotes</h3>
                                        <p className="text-gray-500">Cada lote de café, con su productor y finca correspondiente, es trazado y visible en el blockchain de Ethereum.</p>
                                        <br className="w-4"/>
                                    </div>
                                </div>
                                <br/>
                                <div id="map" className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap bg-zinc-100 rounded-lg">
                                    <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative ">

                                        <iframe width="100%" height="100%" className={'absolute inset-0 opacity-75'}  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=COPRANIL,%20Corqu%C3%ADn+(COPRANIL,%20Corqu%C3%ADn)&amp;t=k&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>

                                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                                            <div className="lg:w-1/2 px-6">
                                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">Dirección</h2>


                                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>

                                                <p className="text-indigo-500 mt-1 m-3">

                                                </p>

                                            </div>
                                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">


                                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>

                                                <p className="text-indigo-500 leading-relaxed">

                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                                        <p className="text-gray-900 text-6xl text-center title-font font-bold  mb-1">
                                            num
                                        </p>


                                        <div className="flex mb-4 border-b-2 justify-center">
          <span className="flex items-center">
          Perfil de Taza
          </span>
                                        </div>
                                        <p className="leading-relaxed">Socios:</p>

                                        <div className="flex mt-4 items-center justify-center pb-2">
                                            <div className=" items-center">
                                                <span className="leading-relaxed">Mujeres:</span>
                                            </div>
                                            <span className="flex ml-3 pl-3 py-2 space-x-2s">
                                        <div className="flex ml-6 items-center">

                                                    <span className="mr-3 text-2xl font-black">
                                                        NUM
                                                    </span>
                                        </div>
                                            </span>
                                        </div>
                                        <div className="flex  items-center justify-center pb-2">
                                            <div className=" items-center">
                                                <span className="leading-relaxed">Hombres:</span>
                                            </div>
                                            <span className="flex ml-3 pl-3 py-2 space-x-2s">
                                        <div className="flex ml-6 items-center">
                                                    <span className="mr-3 text-2xl font-black">
                                                        NUM
                                                    </span>
                                        </div>
                                            </span>
                                        </div>

                                        <div className="flex mt-2 items-center justify-center pb-5">
                                            <div className=" items-center">
                                                <span className="leading-relaxed font-black">Áreas Productivas:</span>
                                            </div>
                                            <span className="flex ml-3 pl-3 py-2 space-x-2s">
                                        <div className="flex ml-6 items-center">

                                                    <span className="mr-3 text-2xl font-black">
                                                        num
                                                    </span>
                                        </div>
                                            </span>
                                        </div>
                                        <p className="leading-relaxed">Productos / Servicios</p>

                                        <p className="leading-relaxed">
                                            num
                                        </p>

                                        <div className="flex mt-6 items-center justify-center pb-5">


                                        </div>
                                        <p className="leading-relaxed">Certificados</p>

                                        <p className="leading-relaxed">
                                            num
                                        </p>
                                        <br/>

                                        <div className=" items-center">
                                            <p className="leading-relaxed">Reseña</p>

                                            <span className="leading-relaxed font-black">
                                                <p className="leading-relaxed">
                                                    datos
                                                </p>
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div id="fotos" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            nombre
                        </h2>

                    </div>
                    <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
                        <img
                             className="object-cover w-full h-56 rounded shadow-lg"
                             src={`url("https://dummyimage.com/420x260")`} alt="" />
                        <img
                            
                            className="object-cover w-full h-56 rounded shadow-lg"
                            src={`url("https://dummyimage.com/420x260")`} alt="" />
                        <img
                            
                            className="object-cover w-full h-56 rounded shadow-lg"
                            src={`url("https://dummyimage.com/420x260")`} alt="" />
                        <img

                            className="object-cover w-full h-56 rounded shadow-lg"
                            src={`url("https://dummyimage.com/420x260")`} alt="" />
                    </div>

                </div>

            </section>

        </>
    );
};