import DevIng from './DevImg'
import Image from 'next/image'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase} from 'lucide-react'
import DevImg from './DevImg'

const infoData = [
    {
        icon : <User2 size={20}/>,
        text : 'Bandit Khawyen',
    },
    {
        icon : <PhoneCall size={20}/>,
        text : '+66 94 954 5903',
    },
    {
        icon : <MailIcon size={20}/>,
        text : 'khawyenbd@gmail.com',
    },
    {
        icon : <Calendar size={20}/>,
        text : 'Born on 10 May.',
    },
    {
        icon : <GraduationCap size={20}/>,
        text : 'Master on Computer Engineering',
    },
    {
        icon : <HomeIcon size={20}/>,
        text : '99/1 Moo 16',
    }
]
const qualificationData = [
    {
        title : 'education',
        data : [
            {
                university : 'Ragamangala ',
                qualification : 'Bachelor of Engineering',
                years : '2020 - 2023',
            },
        ]
    },
    {
        title : 'experience',
        data : [
            {
                university : 'Kwanp ERP',
                qualification : 'Frontend Developer',
                years : '2023 - present',
            },
        ]
    }
];

const skillData = [
    {
        title : 'skills',
        data : [
            {
                name : 'HTML, CSS',
            },
            {
                name : 'Front-end Development',
            },
            {
                name : 'Javascript, Typescript',
            },
            {
                name : 'Back-end Development',
            },
        ]
    },
    {
        title : 'tools',
        data : [
            {
                imgPath : '/about/vscode.svg',
            },
            {
                imgPath : '/about/figma.svg',
            },
            {
                imgPath : '/about/notion.svg',
            },
            {
                imgPath : '/about/wordpress.svg',
            },
        ]
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item)=> item.title === title);
    }

    return <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className="container mx-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About Me</h2>
            <div className='flex flex-col xl:flex-row'>
                <div className='hidden xl:flex flex-1 relative'>
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark
                    w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png'/>
                </div>

                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>

                        <div className='text-lg mt-12 xl:mt-8'>
                            <TabsContent value="personal">
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>Unmatched Service Quality for Over 10 Years</h3>
                                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>I specialize in crafing intuative website wite</p>

                                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index)=> {
                                            return <div key={index} className='flex items-center gap-x-4 mx-auto xl:mx-0'>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="qualifications">Qualifications Info</TabsContent>
                            <TabsContent value="skills">Skills Info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
}

export default About
