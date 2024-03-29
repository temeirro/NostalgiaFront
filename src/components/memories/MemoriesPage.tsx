import {Button, Card, CardFooter, Input, Link, Image, Divider, User, Chip} from "@nextui-org/react";

import {useEffect, useState} from "react";

import { TypeAnimation } from 'react-type-animation';
import {EyeSlashFilledIcon} from "../../iconsNextUI/EyeSlashFilledIcon.tsx";
import {EyeFilledIcon} from "../../iconsNextUI/EyeFilledIcon.tsx";
import {UserIcon} from "../../iconsNextUI/UserIcon.tsx";

export default function MemoriesPage() {

    const [isVisible, setIsVisible] = useState(false);
    const [users, setUsers] = useState([]);

    const toggleVisibility = () => setIsVisible(!isVisible);
    useEffect(() => {
        // Fetch users from your API
        fetch('https://localhost:7101/api/Accounts')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []); // Empty dependency array means this effect will only run once when the component mounts


    return (

        <div className={"bg-pink-100 font-serif h-dvh"}>

            <div className={"flex shadow justify-center  mt-16 h-52 bg-[#EDCACF]"}>
                <img
                    className=" mx-auto"
                    src="mainpagehead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="mainpagehead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="mainpagehead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="mainpagehead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="mainpagehead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="mainpagehead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="mainpagehead.png"
                    alt="Your Company"
                />
            </div>
            <div className="isolate  mt-5">
                <div className="flex min-h-full flex-1 flex-col justify-center  lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <div className={"text-center"}>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'nnnnostalgia',
                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
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
                </div>
            </div>
            <div className={"mt-5 flex items-center gap-5 justify-center"}>
                <Chip>Members</Chip>

                {users.map(user => (
                    <User
                        key={user.id} // Ensure each user has a unique key
                        name={user.userName}
                        description={user.email}
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d", // Assuming your user object has an 'avatarUrl' property
                        }}
                    />
                ))}
                {/*<User*/}
                {/*    name="Jane Doe"*/}
                {/*    description="Product Designer"*/}
                {/*    avatarProps={{*/}
                {/*        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"*/}
                {/*    }}*/}
                {/*/>*/}
            </div>

            <div className=" flex mb-4">
                <div className="w-1/2 shadow-2xl">
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    username
                                </label>
                                <div className="mt-2">
                                    <Input type="email"
                                           placeholder="enter ur username"
                                           startContent={
                                               <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                           }
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold underline text-yellow-500 hover:text-pink-300">
                                            forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <Input
                                        label="enter ur pass"
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
                                    Sign in
                                </Button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            u r don`t own ur memories?{' '}
                            <Button
                                href="register"
                                as={Link}
                                color="warning"
                                showAnchorIcon
                                variant="solid"
                                className={"h-8"}
                            >
                                start now
                            </Button>
                        </p>
                        <Divider className="my-4" />

                        <div className="text-center  flex justify-center mt-5 transform scale-100 hover:scale-110 transition-transform duration-300">
                            <Card
                                isFooterBlurred
                                radius="lg"
                                className="border-none text-center w-72 "
                            >
                                <Image
                                    alt="Woman listing to music"
                                    className="object-cover"
                                    height={400}
                                    src="https://trello.com/1/cards/65f345f88c7f3935ff51afca/attachments/65f348c2c23aa13401ee717e/previews/65f348c4c23aa13401ee7865/download/nostalgia.png"
                                    width={400}
                                />
                                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                                    <p className="text-tiny text-white/80">or u can dive into other`s memories</p>
                                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                        take me there
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                </div>
                <div className="w-1/2  h-12"></div>
            </div>
        </div>


    )
}
