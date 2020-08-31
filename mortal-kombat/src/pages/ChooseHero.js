import React from 'react';
import {
    useRouteMatch,
    useHistory
  } from 'react-router-dom'
  import PropTypes from 'prop-types'

function ChooseHero (props) {
    const history = useHistory();

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100vh'
        },
        header: {
            color: '#fff',
            textShadow: 'rgba(0,0,0,0.87) 2px 2px 3px '
        },
        main: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '900px'
        },
        some: {
            height: '116px',
            width: '116px',
            margin: '5px'
        },
        hide: {
            position: 'absolute',
            opacity: '0'
        }


    }

    function redirectData(event) {
        if(event.key === 'Enter') {
            let currHero = event.target.id.substr(5);
            setTimeout(() => {
                history.push("/battle");
                props.updateData(currHero);
            }
            , 10000);
        }
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>ChooseHero page</h1>
            <div style={styles.main}>
                {props.heroesList.map((hero, index) => {
                    return <input style={styles.hide} key={hero.id} id={'hero_' + hero.id} 
                            type="radio" name="hero_choose" autoFocus={!index}
                            onKeyPress={redirectData}/>
                })}  
                {props.heroesList.map((hero, index) => {
                    return <label htmlFor={'hero_' + hero.id} key={hero.id} id={'label_' + hero.id}
                                  className="arrowMove" style={styles.some} key={hero.id} >
                            <img src={hero.minImg}/>
                    </label> 
                })}            
            </div>
            
        </div>
    )
}

ChooseHero.propTypes = {
    heroesList: PropTypes.arrayOf(PropTypes.object).isRequired,
    updateData: PropTypes.func
}

// Перехід на сторінку Battle ---> <Link to={'/battle'}>Battle</Link>

export default ChooseHero