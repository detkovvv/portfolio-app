import './style.css';

export const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>
                            Hi, my name is <em>Vasiliy</em>
                        </strong>
                        <br />a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>
                            I do web app and create websites to make life
                            easier for my client, as well as his clients.
                            <br />
                            On this website you will find a collection of my
                            pet-projects and commissioned works.
                        </p>
                    </div>
                    <a
                        href="https://drive.google.com/file/d/1_rt5OfpuJrNppc9RQmA8YowcxQryjemj/view?usp=drive_link"
                        target="_blank"
                        className="btn"
                        rel="noreferrer"
                    >
                        Download CV
                    </a>
                </div>
            </header>
        </div>
    );
};
