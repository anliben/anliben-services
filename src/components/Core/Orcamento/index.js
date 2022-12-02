import img from './../../assets/intro.jpg'

export default function Orcamento() {
    return (
        <div className="flex flex-row items-center justify-center flex-wrap relative">

            <img className='w-full opacity-60' src={img} width='400px' height='400px' alt="reuniao" />
            <h1 className='absolute text-4xl font-medium'>Tiramos a sua ideia do papel!</h1>
        </div>
    );
}