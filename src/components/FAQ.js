import { AandQ } from './A&Q';

const questionsAndAnswersList = [
    {
        question: 'What services does your IT company offer?',
        answer: 'We offer a wide range of IT services, including software development, web development, cloud computing, cybersecurity, IT consulting, and more. Our team of experts can tailor solutions to meet your specific business needs.',
        id: 1
    },
    {
        question: 'How do I request a quote for your services?',
        answer: 'To request a quote, simply visit our "Contact Us" page and fill out the form with your project details. Our sales team will get in touch with you to discuss your requirements and provide you with a customized quote.',
        id: 2
    },
    {
        question: 'What industries do you work with?',
        answer: 'We work with clients from various industries, including healthcare, finance, e-commerce, education, and more. Our versatile team has the expertise to serve clients across different sectors.',
        id: 3
    },
    {
        question: 'How do you ensure data security and privacy?',
        answer: 'Data security is a top priority for us. We implement robust security measures, follow best practices, and comply with industry regulations to protect your data. Our team is well-versed in cybersecurity and continuously monitors and updates security protocols',
        id: 4
    }
]

export const FAQ = () => {
    return(
        <div className='faq'>
            <div className='faq-container'>
                <h1 className='faq-title'>FAQ</h1>
                <div className='faq-items-container'>
                    {questionsAndAnswersList.map((item) => {
                        return <AandQ
                            question={item.question}
                            answer={item.answer}
                            key={item.id}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}