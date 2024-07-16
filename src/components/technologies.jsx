import { RiReactjsLine } from 'react-icons/ri';
import hf_logo from '../assets/hf-logo.png';

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 p-24">
            <h1 className="my-17 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-purple-900 p-4">
                    <RiReactjsLine className="text-7xl text-blue-500" />
                    <p className="text-lg text-center">React</p>
                </div>
                <div className="rounded-2xl border-4 border-purple-800 p-4 ">
                    <img src={hf_logo} alt="HF Logo" className="w-20" />
                    <p className="text-xs text-center">Hugging Face</p>

                </div>


            </div>
        </div>
    )
};

export default Technologies;

// hi
