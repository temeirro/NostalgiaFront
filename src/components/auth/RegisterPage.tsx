import {Button, Input, Link} from "@nextui-org/react";

import {useState} from "react";

import { TypeAnimation } from 'react-type-animation';
import {EyeSlashFilledIcon} from "../../iconsNextUI/EyeSlashFilledIcon.tsx";
import {EyeFilledIcon} from "../../iconsNextUI/EyeFilledIcon.tsx";
import {MailIcon} from "../../iconsNextUI/MailIcon.tsx";
import {UserIcon} from "../../iconsNextUI/UserIcon.tsx";

export default function RegisterPage() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className={"bg-pink-100 font-serif h-screen"}>
            <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
                <div
                    className="absolute inset-x-0 top-[-10rem]  -z-10 transform-gpu overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#000000] to-[#B438E1] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>

                <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-20 w-auto"
                            src="logo.png"
                            alt="Your Company"
                        />
                        <div className={"text-center mt-5"}>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'nnnnostalgia',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'notes',
                                    1000,
                                    'nexus',
                                    1000,
                                    'narrative',
                                    1000
                                ]}
                                speed={30}
                                className="mt-10 text-center text-5xl  leading-9 tracking-tight text-gray-900"
                                repeat={Infinity}
                            />
                        </div>


                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    //username
                                </label>
                                <div className="mt-2">
                                    <Input type="email"
                                           placeholder="> ur username"
                                           startContent={
                                               <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                           }
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    //first name
                                </label>
                                <div className="mt-2">
                                    <Input type="email" label="> ur first name"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    //last name
                                </label>
                                <div className="mt-2">
                                    <Input type="email" label="> ur last name"/>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    //e-mail
                                </label>
                                <div className="mt-2">
                                    <Input
                                        type="email"
                                        placeholder="you@example.com"
                                        startContent={
                                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        }
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        //password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <Input
                                        label="> ur pass"
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                                {isVisible ? (
                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        //password again
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <Input
                                        label="> ur pass, again"
                                        endContent={
                                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                                {isVisible ? (
                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={isVisible ? "text" : "password"}
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    color="default"
                                    className="flex w-full justify-center rounded-md bg-red-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                                >
                                    Sign up
                                </Button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            u r don`t own ur memories?{' '}
                            <Button
                                href="https://github.com/nextui-org/nextui"
                                as={Link}
                                color="warning"
                                showAnchorIcon
                                variant="solid"
                                className={"h-8"}
                            >
                                start now
                            </Button>
                        </p>
                    </div>
                </div>


            </div>

        </div>

    )
}
