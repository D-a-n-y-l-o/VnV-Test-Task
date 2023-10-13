import { useState } from 'react';

import classNames from 'classnames';

export const AandQ = ({question, answer}) => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return(
        <div className={classNames('faq-item-container', {'faq-item-container-expanded': open})} onClick={toggle}>
            <div className='faq-question-container'>
                <p className='faq-question'>{question}</p>
            </div>
            <div className={classNames('faq-answer-container', {'faq-answer-container-shown': open})}>
                <p className='faq-answer'>
                    {answer}
                </p>
            </div>      
        </div>
    )
}