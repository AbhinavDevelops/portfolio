import { RiReactjsLine } from 'react-icons/ri';
import hf_logo from '../assets/hf-logo.png';
import python_logo from "../assets/python.png"
import llama_logo from "../assets/llama.png"
import { BiLogoPostgresql } from 'react-icons/bi';

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 p-24">
            <h1 className="my-17 text-center text-4xl">Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 p-8">


                <div className="rounded-2xl border-4 border-purple-800 p-4 w-28 h-28">
                    <a href="https://www.python.org/" target="_blank">
                        <img src={python_logo} alt="Python logo" className="w-20 text-7xl" />
                    </a>

                </div>

                <div className="rounded-2xl border-4 border-purple-800 p-4 w-28 h-28">
                    <a href="https://huggingface.co/" target="_blank">
                        <img src={hf_logo} alt="HF Logo" className="w-20 text-7xl" />
                    </a>

                </div>


                <div className="rounded-2xl border-4 border-purple-800 p-4 w-28 h-28">
                    <a href="https://react.dev" target="_blank">
                        <RiReactjsLine className="text-7xl text-blue-500" />
                    </a>
                </div>

                <div className="rounded-2xl border-4 border-purple-800 p-4 w-28 h-28">
                    <a href="https://llama.meta.com/llama3/" target="_blank">
                        <img src={llama_logo} alt="Llama logo" className="w-20 text-3xl" />
                    </a>

                </div>

                <div className="rounded-2xl border-4 border-purple-800 p-4 w-28 h-28">
                    <a href="https://llama.meta.com/llama3/" target="_blank">
                        <BiLogoPostgresql className="text-7xl text-blue-500" />
                    </a>

                </div>


            </div>
        </div>
    )
};

export default Technologies;
