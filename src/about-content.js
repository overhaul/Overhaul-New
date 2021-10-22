import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Cbc from '../src/images/clients/logo-cbc.png'
import Haven from '../src/images/clients/logo-haven.png'
import Naked from '../src/images/clients/logo-naked.png'
import Syncrude from '../src/images/clients/logo-syncrude.png'
import Alberta from '../src/images/clients/logo-alberta.png'
import Edmonton from '../src/images/clients/logo-edmonton.png'
import Katz from '../src/images/clients/logo-katz.png'

export const aboutImage = {
    image : (<StaticImage src='../src/images/OverhaulOffice.jpg' alt='The OverhaulMedia Boardroom' placehodeler='blurred'/>)
}

export const approachImage = {
    imageSrc: (<StaticImage className="block-approach_image" src='../src/images/our-approach.jpg' alt='The OverhaulMedia Approach' placehodeler='blurred'/>)
}

export const team =[
    {
        name: 'Mathew Janzen',
        backgroundImage: (<StaticImage className="background-image" src='../src/images/team/matt-bkg.jpg' alt='A rock with some barnacles' placehodeler='blurred' layout='fixed' width={900}/>),
        imageBefore: (<StaticImage src='../src/images/team/matt-before.jpg' alt='Matt Janzen before mugshot' placehodeler='blurred' layout='fullWidth' objectFit='contain' className="block-team_member-images-two"/>),
        imageAfter: (<StaticImage src='../src/images/team/matt-after.jpg' alt='Matt Janzen, after a haircut' placehodeler='blurred' layout='fullWidth' objectFit='contain' className="block-team_member-images-one"/>),
        title: 'Director',
        profile: 'With over 15 years experience managing design and development projects, Mathew’s familiarity with all elements of digital and visual comms production allow him to create solutions beyond the standard formulas.'
    },
    {
        name: 'Michael Wichuk',
        backgroundImage: (<StaticImage className="background-image" src='../src/images/team/mike-bkg.jpg' alt='A nice lake in the mountains' placehodeler='blurred' layout='fullWidth' />),
        imageBefore: (<StaticImage src='../src/images/team/mike-before.jpg' alt='Mike before a haircut' placehodeler='blurred' layout='fullWidth' objectFit='contain' className="block-team_member-images-two"/>),
        imageAfter: (<StaticImage src='../src/images/team/mike-after.jpg' alt='Mike after a haircut' placehodeler='blurred' layout='fullWidth' objectFit='contain' className="block-team_member-images-one"/>),
        title: 'Senior Designer',
        profile: 'Michael is a talented designer with decades of agency and freelance experience. Michael also practices traditional print methods with his Heidelberg letterpress.'
    },
    {
        name: 'Roman Hermens',
        backgroundImage:(<StaticImage className="background-image" src='../src/images/team/roman-bkg.jpg' alt='The ocean near tofino' placehodeler='blurred' layout='fullWidth' />),
        imageBefore: (<StaticImage src='../src/images/team/roman-before.jpg' alt='Roman before a haircut' placehodeler='blurred' layout='fullWidth' objectFit='contain' className="block-team_member-images-two"/>),
        imageAfter: (<StaticImage src='../src/images/team/roman-after.jpg' alt='Roman after a haircut' placehodeler='blurred' layout='fullWidth' objectFit='contain' className="block-team_member-images-one"/>),
        title: 'Developer',
        profile: 'Roman is a talented, versatile developer. He is also a seasoned designer of brand marks, websites and more.'
    },
    {
        name: 'Peter Elima',
        backgroundImage: (<StaticImage className="background-image" src='../src/images/team/peter-bkg.jpg' alt='A parking lot at Elk Island Park' placehodeler='blurred' layout='fullWidth' />),
        imageBefore: (<StaticImage src='../src/images/team/peter-before.jpg' alt='Peter before a haircut' placehodeler='blurred' layout='fullWidth' objectFit='contain' className="block-team_member-images-two"/>),
        imageAfter: (<StaticImage src='../src/images/team/peter-after.jpg' alt='Peter after a haircut' placehodeler='blurred' layout='fullWidth' objectFit='contain' className="block-team_member-images-one"/>),
        title: 'Designer',
        profile: 'Peter strives to spark conversations and create experiences through his work. With focus primarily on editorial design, brand identities, interactive design and loves to kern type.'
    }
]

export const areas =[
    {
        title: 'Lifestyle, fashion, and beauty.',
        paragraph: '<p>We’ve got extensive experience with DTC and traditional retail for lifestyle, fashion and beauty products. Even some that made the switch along the way.</p>',
        client: [
            {
                title: 'Haven',
                staticAsset: (<StaticImage src='../src/images/expertise/expertise-haven.jpg' alt='Haven Menswear Canada' width={300} placeholder='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Helm',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-helm.jpg' alt='Helm Menswear' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Goldsquare',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-goldsquare.jpg' alt='goldsquare vision' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Fancii',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-fancii.jpg' alt='fancii website' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Healthy Bedroom',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-healthybedroom.jpg' alt='healthy bedrooom website' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Orijen',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-orijen.jpg' alt='Orijen image' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'SOHO Hair',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-soho.jpg' alt='soho hair salon' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Publish Brand',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-publishbrand.jpg' alt='Publish brand website' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Naked and Famous',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-nakedandfamous.jpg' alt='naked and famous demin' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            }
        ]
    },
    {
        title: 'Food, drink, and hospitality.',
        paragraph: 'Often working alongside interior designers, architects, and owners, we help shape place and create a unique experience through various forms of design. ',
        client: [
            {
                title: 'Uptop',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-uptop.jpg' alt='Uptop branding' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Farrow',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-farrow.jpg' alt='farrow sandwiches' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Three Boars',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-threeboars.jpg' alt='three boars eatery' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'HighDough',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-highdough.jpg' alt='Highdough pizza' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Press’d',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-pressd.jpg' alt='pressd sandwiches' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'North 53',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-north53.jpg' alt='north 53 cocktail place' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Wishbone',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-wishbone.jpg' alt='wishbone restaurent' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Baiju',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-baiju.jpg' alt='Baiju restaurent' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Malt and Mortar',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-maltandmortar.jpg' alt='malt and mortar pub' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            }
        ]
    },
    {
        title: 'Commercial real estate (CRE), property and asset management. ',
        paragraph: 'Creating desire, adding value, placemaking for meaningful relationships with the built environment. ',
        client: [
            {
                title: 'Canada ICI',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-canadaici.jpg' alt='canada ici' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Epic Investment Services',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-epic.jpg' alt='epic investments corporation' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'HSBC Place',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-hsbc.jpg' alt='hsbc place edmonton' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Currents of Windermere',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-currentsofwindermere.jpg' alt='currents of wondermere' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Beljan',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-beljan.jpg' alt='beljan developments company' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Hyphen Group',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-hyphen.jpg' alt='hyphen development group' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: '103 Street Center',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-103st.jpg' alt='103 street center' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'North District',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-northdistrict.jpg' alt='north district edmonton' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'DOSC',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-dosc.jpg' alt='dosc pub and club' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            }
        ]
    },
    {
        title: 'Arts, culture, and media.',
        paragraph: 'As creatives we feel it’s important to support the arts and culture. Helping artists, storytellers tell their story and express themselves in a new way.',
        client: [
            {
                title: 'Theater Network',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-theaternetwork.jpg' alt='theater network edmonton' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Georgie Magazine',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-georgiemagazine.jpg' alt='georgie magazine' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Human Odyssey',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-humanodyssey.jpg' alt='the human odyssey' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Handful of Films',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-handfuloffilms.jpg' alt='handful of films' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            }
        ]
    },
    {
        title: 'Politics, advertising and PR',
        paragraph: 'Wether its a site for a national campaign about STD’s, forests in Alberta or our beloved Edmonton’s annual budget. We’ve worked in politics, arms length government orgnaizations.',
        client: [
            {
                title: 'Love AB Forests VR Tour',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-loveabvr.jpg' alt='love alberta forests virtual reality tour' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'YEG City Budget',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-yegcitybudget.jpg' alt='the edmonton city budget' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Report to the City',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-reportotthecity.jpg' alt='a report for hte city of edmonton' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Invest Alberta Corporation',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-iac.jpg' alt='invest alberta corporation' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Alberta Forest Products Association',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-afpa.jpg' alt='albert forestry products association' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'City of Leduc',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-cityofleduc.jpg' alt='the city of leduc' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            }
        ]
    },
    {
        title: 'Professional, healthcare and medical',
        paragraph: 'Old school professions are rapidly evolving in practice. We’re well equipt to help navigate though that transition into today’s modern world. Be it technically, strategically or visually.',
        client: [
            {
                title: 'Cure MD',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-curemd.jpg' alt='cure md' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'SMP',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-smp.jpg' alt='swainson mikki plesket law offices' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Mettra Pharmacy',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-mettra.jpg' alt='mettra pharmacy edmonton' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Pure Aligners',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-purealigners.jpg' alt='pure aligners' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            },
            {
                title: 'Hello Dental',
                staticAsset :(<StaticImage src='../src/images/expertise/expertise-hellodental.jpg' alt='hello dental office' width={300} placehodeler='blurred' layout='fixed' className='block-expertise_content-image'/>),
            }
        ]
    },
]

export const awards =[
    {
        title: 'ACE Award - Winner, Best in Show',
        year: "2021",
        project:"Love AB Forests",
        link:"/work/love-alberta-forests"
    },
    {
        title: 'ACE Award - Winner, Not-for-Profit Campaign',
        year: "2021",
        project:"Love AB Forests",
        link:"/work/love-alberta-forests"
    },
    {
        title: 'ACE Award - Winner, Innovative Use of Technology',
        year: "2021",
        project:"Love AB Forests",
        link:"/work/love-alberta-forests"
    },
    {
        title: 'ACE Award - Winner, Not-for-Profit Microsite',
        year: "2021",
        project:"Love AB Forests",
        link:"/work/love-alberta-forests"
    },
    {
        title: 'ACE Award - Winner, Innovation',
        year: "2021",
        project:"Love AB Forests",
        link:"/work/love-alberta-forests"
    },
    {
        title: 'ACE Award - Distinction, Not-for-Profit Audio Series',
        year: "2021",
        project:"Love AB Forests",
        link:"/work/love-alberta-forests"
    },
    {
        title: 'Awwards, Honorable Mention',
        year: "2020",
        project:"Canada ICI",
        link:"/work/canada-ici"
    },
    {
        title: 'Awwards, Honorable Mention',
        year: "2020",
        project:"GoldSquare",
        link:"/work/goldsquare"
    },
    {
        title: 'Applied Arts, Digital – Single Award',
        year: "2016",
        project:"YEG City Budget",
        link:"/work/yeg-city-budget"
    },
    {
        title: 'Alberta Film & Television Award - Best Cross Platform Production',
        year: "2015",
        project:"The Great Human Odyssey",
        link:"/work/the-great-human-odyssey"
    },
    {
        title: 'FWA - Site of the Day',
        year: "2015",
        project:"The Great Human Odyssey",
        link:"/work/the-great-human-odyssey"
    },
    {
        title: 'ACE Award - Not for Profit Interactive',
        year: "2012",
        project:"Share Hope",
        link:"/work/share-hope"
    },
]

export const listItems =[
    {
        title: 'Good design.',
    },
    {
        title: 'Our community and the ability to give back.',
    },
    {
        title: 'Collaborative attitude.',
    },
    {
        title: 'Embracing change.',
    },
    {
        title: 'Curiosity.',
    },
    {
        title: 'Culture.',
    },
    {
        title: 'Enterprise.',
    }
]

export const serviceAbilities =[
    {
        title: 'Naming',
    },
    {
        title: 'Strategy',
    },
    {
        title: 'Concept Development',
    },
    {
        title: 'Visual Identity',
    },
    {
        title: 'Creative & Art Direction',
    },
    {
        title: 'Print',
    },
    {
        title: 'Packaging',
    },
    {
        title: 'Content',
    },
    {
        title: 'Advertising',
    },
    {
        title: 'Environment',
    },
    {
        title: 'Signage',
    },
    {
        title: 'Digital',
    },
    {
        title: 'eCommerce',
    },
    {
        title: 'Photography',
    },
    {
        title: 'Motion',
    },
    {
        title: 'Video',
    },
    {
        title: 'Writing',
    }
]

export const clients =[
    {
        src: Haven,
        alt: 'Haven'
    },
    {
        src: Cbc,
        alt: 'Canadian Broadcasting Corporation'
    },
    {
        src: Syncrude,
        alt: 'Syncrude'
    },
    {
        src: Naked,
        alt: 'Naked and Famous'
    },
    {
        src: Katz,
        alt: 'Katz Group'
    },
    {
        src: Edmonton,
        alt: 'City of Edmonton'
    },
    {
        src: Alberta,
        alt: 'Province of Alberta'
    },
]

export const ourApproach =[
    {
        paragraph: 'Overhaul is a studio formed to do one thing: help companies transform the way they connect with people. In other words, we build brands that make your business better. Theres no tricks or gimmicks to what we do. Each project we take on is different, but our process remains the same. We simply work with good people, pay attention to details, and put in the time to make work that moves the needle. Sound like what you need? Start the conversation.',
        title: 'The work varies. The process stays the same.'
    },
    {
        paragraph: 'We balk at the idea of the expert or the guru. Creativity isnt complex. For us good work comes from sticking to a structure that allows for thinking differently and breaking through assumptions. That approach, paired with attention and effort means we can tackle almost any problem. The last ingredient is culture. Good work becomes great when people show up, check their egos at the door, and work together as a team. Its why weve invested in people who approach their work with an attitude of openness, flexibility, and enthusiasm. This goes for clients too - if were not a good culture fit, were not going to be a fit in general.',
        title: 'Start with the right approach. Finish with the right attitude.'
    }
]
