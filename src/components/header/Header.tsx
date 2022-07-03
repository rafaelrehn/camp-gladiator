import './Header.scss';

export const Header = () =>{
    const h1 = 'TIME TO ROCK'
    const h2 = 'You are few more steps for the lorem ipsum dolor!'
    return (
        <header className="header">
            <div className="header__mask"></div>
            <div className="logo logo--cg-full-color-black logo-size"></div>
            <div className='p-16'>
                <h1 className="h1 h1__united --warning">{h1}</h1>
                <h4 className="h4 h4__united --primary">{h2}</h4>
            </div>
        </header>
    )
}