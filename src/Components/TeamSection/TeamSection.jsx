import React from 'react';
import './TeamSection.css';
import img1 from '../../Assets/Team_Members/MK.jpg';
import img2 from '../../Assets/Team_Members/KG1.jpg';
import img3 from '../../Assets/Team_Members/DD.jpg';
import img4 from '../../Assets/Team_Members/KR1.JPG';
import img5 from '../../Assets/Team_Members/JH.jpg';

function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            name: 'Madhvik Bhalani',
            role: 'AI/ML & Backend Developer',
            image: img1,
            social: {
                linkedin: 'https://www.linkedin.com/in/MadhvikBhalani/',
                email: 'https://x.com/Madhvik_Bhalani',
                github: 'https://github.com/Madhvik-Bhalani',
            },
        },

        {
            id: 2,
            name: 'Darshan Dhanani',
            role: 'AI/ML & Backend Developer',
            image: img3,
            social: {
                linkedin: 'https://www.linkedin.com/in/darshan-dhanani-04b73121a',
                email: 'darshandhanani01@gmail.com',
                github: 'https://github.com/darshan-1611-dev',
            },
        }, {
            id: 3,
            name: 'Kalpita Gawade',
            role: 'QA & Frontend Developer',
            image: img2,
            social: {
                linkedin: 'https://www.linkedin.com/in/kalpita-gawade',
                email: 'kalpitagawade5@gmail.com',
                github: 'https://github.com/KalpitaG',
            },
        },
        {
            id: 4,
            name: 'Kunal Rokde',
            role: 'SE & Frontend Developer',
            image: img4,
            social: {
                linkedin: 'https://www.linkedin.com/in/kunal-rokde/',
                email: 'kunalrokde149@gmail.com',
                github: 'https://github.com/kunal-rokde',
            },
        },
        {
            id: 5,
            name: 'Jahandar Hakhiyev',
            role: 'DA & Backend Developer',
            image: img5,
            social: {
                linkedin: 'https://www.linkedin.com/in/jahandar-hakhiyev',
                email: 'axiyev.cahandar@gmail.com',
                github: 'https://github.com/jahandar00',
            },
        },
    ];

    return (
        <div className='team-section-container' id='team'>
            <h2 className='section-header text-center'>
                <span className="section-title">Meet The Team</span>
            </h2>
            <div className="container">
                <div className="row justify-content-center">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="team-card mx-2 my-2">
                                <img src={member.image} className="team-image" alt={member.name} />
                                <div className="team-info">
                                    <h4 className="team-name">{member.name}</h4>
                                    <p className="team-role">{member.role}</p>
                                    <div className="social-icons">
                                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                        {/* <a href={member.social.email} target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i></a> */}
                                        <a href={`mailto:${member.social.email}`} target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-paper-plane"></i></a>
                                        <a href={member.social.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamSection;
