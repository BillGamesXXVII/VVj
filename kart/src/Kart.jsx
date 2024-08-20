import glaz2 from './assets/glaz2.png'

function Kart(){
    return(
        <div className="kartch">
            <img className='kartinka' src={glaz2} alt="picture"></img>
            <h2 className='nazv' >Карточка</h2>
            <p className='text'> Пара слов об этой  картинке. Это картинка.</p>
        </div>
    );
}

export default Kart