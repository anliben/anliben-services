import img from './../../assets/logo-asp.png'
import face from './../../assets/facebook50.png'
import link from './../../assets/linkedin50.svg'
import ins from './../../assets/instagram50.png'

export default function Footer() {
    return (
            <footer className='bg-black flex flex-row'>
                <div class="container">
            <div id="footer-wrapper" class="flex flex-col md:flex-row items-start justify-between py-8">
                <div id="logo" class="flex items-center bg-gray-600 grow md:grow-0 rounded-md">
                    <img src={img} alt="Logo da Anliben Services Pro" srcset="" class="w-12 h-auto cursor-pointer" />
                        <div class="relative top-1">
                            <span class="text-white font-medium text-[16px]">Anliben Services Pro</span>
                            <span class="text-white relative -top-2 block font-normal text-[10px] mr-1"> Tecnologia e seguranca para o seu negocio! </span>
                            </div>
                        </div>
                <div class="mt-[1.5rem] md:mt-0 mx-auto">
                    <h5 class="text-white font-semibold text-[1rem]">Nossos Produtos</h5>
                    </div>
                    <div class="mt-[1.5rem] md:mt-0 mx-auto">
                        <h5 class="text-white text-[1rem] font-semibold hover:underline hover:decoration-1 hover:decoration-white cursor-pointer"> Ficou com dúvidas? </h5>
                        <h6 href="#" class="text-white font-normal text-[1rem"> Entre em contato </h6>
                        <h5 class="text-white font-semibold text-[1rem] mt-3"> anlibenservicespro@gmail.com </h5>
                        </div>
                        <div id="our-networks" class="flex flex-col items-start justify-center mt-[1.5rem] md:mt-0 mx-auto">
                            <h5 class="text-white font-medium text-[1rem]"> Nos acompanhe em nossas
                            <br /> redes sociais. </h5>
                            <div id="networks" class="flex space-x-3 mt-3">
                                <a href="https://www.linkedin.com/company/anliben-services-pro/">
                                    <img src={link} alt="" class="w-5 h-5 fill-red-500" />
                                        </a>
                                        <a href="https://www.facebook.com/anlibenservicespro">
                                            <img src={face} alt="" class="w-5 h-5" />
                                                </a>
                                                <a href="https://www.instagram.com/anlibenservicespro_oficial/">
                                                    <img src={ins} alt="" class="w-5 h-5" />
                                                        </a>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        <div id="copyright" class="py-3 flex items-center justify-center border-t-[1px] border-solid border-[#4F4F4F]">
                                                            <span class="text-xs font-normal text-white">© Copyright 2019 - 2022 - Anliben Services Pro. Todos os direitos reservados.</span>
                                                            </div>
                                                            </div>
                                                            </footer>
    )
}