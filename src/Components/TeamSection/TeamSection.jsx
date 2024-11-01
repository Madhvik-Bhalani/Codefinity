import React from 'react';
import './TeamSection.css';
import img1 from '../../Assets/mk.jpg';

function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            name: 'Madhvik Bhalani',
            role: 'Fullstack Developer',
            image: img1,
            social: {
                linkedin: 'https://www.linkedin.com/in/MadhvikBhalani/',
                twitter: 'https://x.com/Madhvik_Bhalani',
                github: 'https://github.com/Madhvik-Bhalani',
            },
        },
        {
            id: 2,
            name: 'Kalpita Gawade',
            role: 'Frontend Developer',
            image: 'https://cdn.prod.website-files.com/614638d232367ac787a19f7f/65f12a1034188cebf6bb4e86_Brent%20Stockton.webp',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            id: 3,
            name: 'Darshan Dhanani',
            role: 'Backend Developer',
            image: 'https://cdn.prod.website-files.com/614638d232367ac787a19f7f/65f12a1034188cebf6bb4e86_Brent%20Stockton.webp',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            id: 4,
            name: 'Kunal Rokde',
            role: 'Frontend Developer',
            image: 'https://cdn.prod.website-files.com/614638d232367ac787a19f7f/65f12a1034188cebf6bb4e86_Brent%20Stockton.webp',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
            },
        },
        {
            id: 5,
            name: 'Jahandar Hakhiyev',
            role: 'Fullstack Developer',
            image: 'https://cdn.prod.website-files.com/614638d232367ac787a19f7f/65f12a1034188cebf6bb4e86_Brent%20Stockton.webp',
            social: {
                linkedin: '#',
                twitter: '#',
                github: '#',
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
                                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
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
