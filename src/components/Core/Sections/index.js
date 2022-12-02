import angular from './../../assets/angular.svg'
import react from './../../assets/react.png'
import python from './../../assets/python.png'

export default function Section1 () {
    return (
        <section id="our-services" class="bg-[#69BABB] py-[40px]">
   <div class="container mx-auto">
     <h1 class="font-semibold text-[2rem] md:text-[3.25rem] mx-auto"> Nossos Serviços </h1>
     <p class="text-[0.8rem] md:text-[1rem] my-2"> Há 4 ano no mercado e em constante expansão, nossa empresa é uma das principais fornecedoras de sistemas e soluções de software para aplicações e automações. Trabalhamos com algumas das mais importantes e atuais tecnologias existentes no mercado atualmente, desenvolvendo soluções integradas que levam a ganhos de produtividade. </p>
     <div id="cards-services" class="flex items-center mt-6 flex-wrap">
       <div id="card-item" class="grow basis-[230px] max-w-[230px] mt-4 ml-3 shrink">
         <img src={angular} alt="Descreva a imagem" class="w-[100%] h-[165px] bg-slate-400 rounded-[10px]" />
         <span class="block font-medium text-[1rem] md:text-[1rem] mt-2"> React.Js - Web </span>
       </div>
       <div id="card-item" class="grow basis-[230px] max-w-[230px] mt-4 ml-3 shrink">
         <img src={react} alt="Descreva a imagem" class="w-[100%] h-[165px] bg-slate-400 rounded-[10px]" />
         <span class="block font-medium text-[1rem] md:text-[1rem] mt-2"> Angular - Multiplataforma </span>
       </div>
       <div id="card-item" class="grow basis-[230px] max-w-[230px] mt-4 ml-3 shrink">
         <img src={python} alt="Descreva a imagem" class="w-[100%] h-[165px] bg-slate-400 rounded-[10px]" />
         <span class="block font-medium text-[1rem] md:text-[1rem] mt-2"> Python - API | Multiplataforma </span>
       </div>
     </div>
   </div>
 </section>
    )
}