import {
    Button,
    Card,
    CardFooter,
    Input,
    Link,
    Image,
    Divider,
    User,
    Chip,
    Table,
    TableHeader,
    TableColumn, TableBody, TableRow, TableCell, Tabs, Tab, CardBody, CardHeader, Tooltip
} from "@nextui-org/react";
import {APP_ENV} from "../../env";

import {useEffect, useState} from "react";

import { TypeAnimation } from 'react-type-animation';
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";
import {useParams} from "react-router-dom";
import {HeartIcon} from "../../iconsNextUI/HeartIcon.tsx";
import {PenIcon} from "../../iconsNextUI/PenIcon.tsx";
import {TrashIcon} from "@heroicons/react/24/outline";
import {EyeIcon} from "../../iconsNextUI/EyeIcon.tsx";
import {Col, Modal, Row} from "antd";
import axios from "axios";

export default function BoardPage() {
    const {isLogin, isAdmin, user} = useAppSelector(state => state.account);
    const baseUrl = APP_ENV.BASE_URL;
    const [isVisible, setIsVisible] = useState(false);
    const [posts, setPosts] = useState([]);
    const navigator = useNavigate();
    const { Id } = useParams();



    useEffect(() => {
        // Fetch users from your API
        fetch(`${baseUrl}/api/Posts/Get/${Id}`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);
    console.log(posts);

    function handleDelete(postId) {
        // Show confirmation modal
        Modal.confirm({
            title: 'Are you sure you want to delete this post?',
            content: 'This action cannot be undone',
            okText: 'Yes, delete it',
            okType: 'danger',
            cancelText: 'No, cancel',
            onOk() {
                // User confirmed deletion
                axios.delete(`${baseUrl}/api/Posts/${postId}`)
                    .then(() => {
                        // Successfully deleted the post
                        setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
                        // Optionally, display a success message
                    })
                    .catch(error => {
                        // Handle the error
                        console.error('Error deleting post:', error);
                        // Optionally, display an error message
                    });
            },
            onCancel() {
                console.log('Cancel delete');
            },
        });
    }


    function handleShow(postId) {
        navigator(`/viewMemory/${postId}`)
    }

    return (

        <div className={"bg-pink-100 min-h-screen font-serif  "}>

            <div className={"flex border-b border-black shadow justify-center  mt-16 h-52 bg-[#EDCACF]"}>
                <img
                    className=" mx-auto"
                    src="/memorieshead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="/memorieshead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="/memorieshead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="/memorieshead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="/memorieshead.png"
                    alt="Your Company"
                />
                <img
                    className=" mx-auto"
                    src="/memorieshead.png"
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
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'board',
                                    1000,
                                ]}
                                speed={30}
                                className="mt-10 text-center text-5xl  leading-9 tracking-tight text-gray-900"
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className="mt-5 border-t border-black flex gap-5 p-5  justify-center mb-4">
                <Row gutter={[16, 16]} justify="center">

                {posts.map((post) => (
                    <Col >

                    <Card className="py-4">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">

                            {post?.tags?.map((tag) => (
                                <small className="text-default-500">{tag.tag.name}</small>
                            ))}
                            <h4 className="font-bold underline text-pink-300 text-large">{post.title}</h4>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={`${baseUrl}/uploads/1200_${post.imagesPath[0]}`}
                                width={270}
                            />
                        </CardBody>
                        <CardFooter>
                            <Chip  className="text-tiny bg-red-200 uppercase font-bold">{post.category.name}</Chip>
                            <div className={"ml-auto flex gap-1"}>
                                {user?.Id != Id ? (
                                    <Button isIconOnly className={"bg-red-300"} aria-label="Like">
                                        <HeartIcon />
                                    </Button>
                                ) : null}

                                <Button onClick={() => handleShow(post.id)} isIconOnly className={"bg-yellow-300"} aria-label="Like">
                                    <EyeIcon className={"size-6"}/>
                                </Button>
                                <Button isIconOnly className={"bg-blue-300"} aria-label="Like">
                                    <PenIcon className={"size-8/12"} />
                                </Button>
                                {user?.Id === Id ? (
                                    <Button onClick={() => handleDelete(post.id)} isIconOnly className={"bg-purple-300"} aria-label="Like">
                                    <TrashIcon className={"size-8/12"} />
                                    </Button>

                                    ) : null}


                            </div>

                        </CardFooter>
                    </Card>
                    </Col>

                    // <div key={post.id} className="m-2">
                    //     {/* Render post content here */}
                    //     <div>
                    //        <p className={"underline text-3xl"}>{post.title}</p>
                    //     </div>
                    //     <div>
                    //         {post.content}
                    //     </div>
                    //     <div>
                    //         {post?.tags?.map((tag) => (
                    //             <Chip color={"danger"} key={tag.id}>{tag.tag.name}</Chip>
                    //         ))}
                    //     </div>
                    // </div>
                ))}
                </Row>

            </div>
        </div>


    )
}
