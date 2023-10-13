import { BriefForm } from './BriefForm';

export const Brief = () => {
    return (
        <div className='brief'>
            <div className='brief-container'>
                <h1 className='brief-title'>Brief</h1>
                <p className='brief-text-title'>Why It's Important to Fill Out a Brief</p>
                <p className='brief-text'>A well-crafted brief is a vital component of any project or creative endeavor. It serves as a roadmap that guides your team and ensures that everyone is on the same page. Here are a few reasons why filling out a brief is crucial: </p>
                <ul className='brief-ul'>
                    <li className='brief-li'><b className='brief-li-bold'>Clarity</b>: A detailed brief helps clarify the project's goals, objectives, and scope. It eliminates ambiguity and provides a clear direction for all involved.</li>
                    <li className='brief-li'><b className='brief-li-bold'>Efficiency</b>: By providing essential information upfront, a brief streamlines the creative process. It saves time and resources by preventing misunderstandings and revisions.</li>
                    <li className='brief-li'><b className='brief-li-bold'>Consistency</b>: A well-prepared brief ensures that your project aligns with your brand's identity and messaging. It maintains brand consistency across all deliverables.</li>
                    <li className='brief-li'><b className='brief-li-bold'>Collaboration</b>: When everyone has access to the same information, it fosters collaboration among team members, agencies, or freelancers. It encourages a cohesive effort toward the project's success.</li>
                    <li className='brief-li'><b className='brief-li-bold'>Accountability</b>: A brief assigns responsibilities and timelines, making it easier to track progress and hold team members accountable.</li>
                </ul>
                <p className='brief-text'>In conclusion, a properly filled-out brief is the foundation of a successful project. It's a valuable tool for communication, understanding, and achieving your project's objectives. So, the next time you embark on a creative venture, take the time to complete a thorough brief – it will make a world of difference."</p>
                <BriefForm />
            </div> 
        </div>
    )
}