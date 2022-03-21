import eclipse from "./Org/eclipse.png";
import apache from "./Org/ShardingSphere.jpeg";
import mojaglobal from "./Org/mojaglobal.png"
import metacall from "./Org/metacall.png"
import hypreldgerindia from "./Org/hypreldgerindia.jpeg"
import jina from "./Org/jina.png"
import mlsa from "./Org/MLSA badge.png"
import asyncapi  from "./Org/asyncapi.jpg"
import joomla from "./Org/joomla.png"
import springcloud from "./Org/springcloud.png"
import angular from "./Org/angular.png"
import Layer5 from "./Org/Layer5.png"
import company from "./Org/company.jpg"
import backdrop from "./Org/backdrop.png"
import openebs from "./Org/openebs.jpeg"

const orgData = [
    {
        _id : "ac4fe61022d4425b8bd46c470115e78e",
        logo : apache,
        name : "Apache ShardingSphere",
        tagline : "Apache ShardingSphere is an open source Big Data ecosystem, and one of the most successful Apache Software Foundation projects.",
        website : "https://shardingsphere.apache.org/",
        tags : ["GSoC", "AWS Summit","AnitaB.org GHC, Open Source Day","The Apache Software Foundation's","ApacheCon"],
        issuelink:"https://docs.google.com/document/d/11GJ0aWKFey1OFIE67Ig_5HFUEPDjlsT5g_uL2uGdrXM/edit?usp=sharing",
        mentorship : "https://join.slack.com/t/apacheshardingsphere/shared_invite/zt-sbdde7ie-SjDqo9~I4rYcR18bq0SYTg"
    },
    {
        _id : "f1b990459a304e6680bd3f3be28db7cc",
        logo : eclipse,
        name : "Eclipse AQAvit",
        tagline : "A community effort to improve the quality of OpenJDK binaries being produced by a variety of distributors/vendors (including IBM, Red Hat, Microsoft, Alibaba, Azul, Huawei and others).",
        website : "https://projects.eclipse.org/projects/adoptium.aqavit",
        tags : ["Outreachy", "CanOSP", "Grace Hopper", "OpenForce"],
        mentorship : "https://discord.com/invite/s77kYnfSGf",
        issuelink : "https://docs.google.com/document/d/1XGhvlclvabJMZujMrl2eTzdepfx0jbc8w8MJ24QTgqQ/edit?usp=sharing"
    },
    {
        _id : "db069cbfe3a44e25be074c4297d8bd3c",
        logo : company,
        name : "The @ Company",
        tagline : "The @ Company is a community of Internet optimists compelled by the belief that privacy is a fundamental right. The @ Company is flipping the Internet by giving consumers control of their private information through the open-source @platform.",
        website : "https://atsign.com/",
        tags :[], 
        issuelink : "https://docs.google.com/document/d/1RjqWXxi6uB62Pruy_Z6wpSY_s3zKGjMQdaQaBYh5PrU/edit?usp=sharing",
        mentorship:"https://discord.gg/55sHTQFxfz"
    },
    {
        _id : "fffc25e8bca742c1927096f520af09a1",
        logo : hypreldgerindia,
        name : "Hyperledger",
        tagline : "Hyperledger Foundation is a non profit organization that brings together all the necessary resources and infrastructure to ensure thriving and stable ecosystems around open source software blockchain projects.",
        website : "https://wiki.hyperledger.org/",
        tags : [],
        issuelink : "https://start-here.hyperledger.org/issues",
        mentorship : "https://discord.gg/QGXfXCkk"
    },
    {
        _id : "a9d686b1cd8447d3bee45c88f3cd376a",
        logo : metacall,
        name : "Meta Call",
        tagline : "Deploy Functions, Services or Static Files in seconds. Supporting Node.js, Python, Ruby, C# and more. ",
        website : "https://github.com/metacall",
        tags :["GSoC","GSoD","Outreachy","Linux Foundation Experience"], 
        mentorship : "https://discord.com/invite/s77kYnfSGf",
        issuelink:"https://docs.google.com/document/d/1g7jQc5PWwvzT-vO3YrpLQ8CK9EWijn8FejFzVXC4-Fc/edit?usp=sharing"
    },
    {
        _id : "dbcc55eef69f4297b9388485f8dae6a3",
        logo : jina,
        name : "Jina.AI",
        tagline : "Jina is a neural search framework that empowers anyone to build SOTA and scalable deep learning search applications in minutes.",
        website : "https://github.com/jina-ai/",
        tags :["MLH","Openforce"], 
        issuelink:"https://docs.google.com/document/d/1G_8OGQPa_6m9PBZ0BdaFE9rw6PNX2cXpj6_eF23lR7Q/edit?usp=sharing",
        mentorship:"https://slack.jina.ai/"
    },
    {
        _id : "dec174ee44f74a43be4c84bfa702f94e",
        logo : mojaglobal,
        name : "moja global",
        tagline : "moja global is a not for profit, collaborative project that brings together a community of experts to develop open-source software.",
        website : "https://github.com/moja-global",
        tags : ["GSoC","GSoD","Outreachy","Linux Foundation Experience"],
        issuelink : "https://docs.google.com/document/d/1JFP4F0Xr94D1y7EUZ-mhspl_akAhAea9yKQ0OVbnAGE/edit?usp=sharing",
        mentorship:"https://join.slack.com/t/mojaglobal/shared_invite/zt-o6ta1ug0-rVLjAo460~d7JbZ~HpFFtw"
    },
    {
        _id : "f1b1de620848441db84c2673070914d8",
        logo : asyncapi,
        name : "AsyncApi Initiative",
        tagline : "Welcome to the Open-Source (OSS) AsyncAPI Initiative, part of the Linux Foundation. AsyncAPI seeks to improve the current state of Event-Driven Architectures (EDAs) and the tooling system around them. ❤️ We are a caring community 👐🏿, shaping the future of how you work with #EventDrivenArchitecture; no matter if it is Kafka or WebSocket.",
        website : "https://www.asyncapi.com/",
        tags :[], 
        issuelink:"https://docs.google.com/document/d/1aXksEr6wOoJGkiJUHS4VumoHTJ9BUz1g_vYPELfT44I/edit?usp=sharing",
        mentorship:"https://asyncapi.com/slack-invite"
    },
    {
        _id : "c70fa0bd2880457bac386f7bf08eb2c2",
        logo : joomla,
        name : "Joomla",
        tagline : "Joomla! is the only major CMS that is built entirely by volunteers from all over the world. We have a strong community bond and all take pleasure in building something that has a large global impact. If you are interested in volunteering please head over to the volunteer portal.",
        website : "https://www.joomla.org/",
        tags :["Google Summer of Code", "Summer 2021 of Open Source Promotion Plan"], 
        issuelink:"https://issues.joomla.org/",
        mentorship : "https://discord.com/invite/s77kYnfSGf"

    },
    {
        _id : "82bf5a83c6cb41a99bc6b3444d281b54",
        logo : springcloud,
        name : "Spring Cloud",
        tagline : "Spring Cloud provides tools for developers to quickly build some of the common patterns in distributed systems (e.g. configuration management, service discovery, circuit breakers, intelligent routing, micro-proxy, control bus, one-time tokens, global locks, leadership election, distributed sessions, cluster state). Coordination of distributed systems leads to boiler plate patterns, and using Spring Cloud developers can quickly stand up services and applications that implement those patterns.",
        website : "https://spring.io/projects/spring-cloud",
        tags :[], 
        mentorship : "https://discord.com/invite/s77kYnfSGf",
        issuelink :"https://docs.google.com/document/d/1-4dCyCVkH4EX_Z2LouisTGGdpyg0Z1MOLMaL9dZurc8/edit?usp=sharing"

    },
    {
        _id : "a5c1d8e2761747a8a3f40317d9b6390c",
        logo : angular,
        name : "Angular",
        tagline : `Angular (commonly referred to as "Angular 2+" or "Angular CLI") is a TypeScript-based free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.`,
        website : "https://angular.io/",
        tags :[], 
        mentorship : "https://discord.com/invite/s77kYnfSGf",
        issuelink :"https://docs.google.com/document/d/1mAT3Ime6B3fsXNoVMPalrhG8xDc8BId3cXG4cksQV6A/edit?usp=sharing"

    },
    {
        _id : "7aa9d887abc84d269a4443e3a30c63e0",
        logo : Layer5,
        name : "Layer5",
        tagline : `Layer5 is community-first and represents the largest collection of service mesh projects and their maintainers in the world. Layer5 is open source-first in that we create and steward initiatives that push the service mesh-centric envelope of Cloud Native. Our shared commitment to the open source spirit compels our community members to push Layer5 projects forward.`,
        website : "https://layer5.io/",
        tags :["Google Summer of Code" , "Docs", "LFX" ], 
        mentorship : "https://discord.com/invite/s77kYnfSGf",
        issuelink:"https://docs.google.com/document/d/186PVCQ3NiMP0HC-9C6Nfy0REFEbYM8AOI8l6BCzm1Gs/edit?usp=sharing"

    },
    {
        _id : "6460f24cff034bd0aa3c1732f3bd34a7",
        logo : openebs,
        name : "OpenEBS",
        tagline : "OpenEBS helps Developers and Platform SREs easily deploy Kubernetes Stateful Workloads that require fast and highly reliable container attached storage. OpenEBS turns any storage available on the Kubernetes worker nodes into local or distributed Kubernetes Persistent Volumes.",
        website : "https://openebs.io/",
        tags :["Google Summer of Code", "Linux mentorsip Program", "Hactoberfest event"],
        issuelink:"https://docs.google.com/document/d/11VSW39xfY9C1OqnTEd7BtltRgUIBBGul6LkvU61z9YY/edit?usp=sharing",
        mentorship:"https://kubernetes.slack.com/"
    },
    {
        _id : "fc79b870ad524ede87c0fac9347a87fe",
        logo : backdrop,
        name : "BackdropCMS",
        tagline : "Backdrop is a free and Open Source Content Management System that helps you build modern, comprehensive websites for businesses and non-profits. Backdrop is the Drupal fork: it has many of the same features you'll find in Drupal 8 and Drupal 9, but without the expensive learning curve.",
        website : "https://backdropcms.org/",
        tags :["Open Source Day"],
        issuelink:"https://docs.google.com/document/d/14ngxW31UQaey8n6ghfP78ebpR-vxYgKiCQH9TYyP8eQ/edit?usp=sharing",
        mentorship:"https://backdrop.zulipchat.com/"
    },
]

/* orgIDs{
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    38c7f2c463ea4f119cc3b4b4cdce2acd
    4de2ce3d67884ae3b0f0b63ab872fa9a
    968d7e02987e466b91d1600c7892e831
}
*/
export default orgData;