import React from 'react'
import PropTypes from 'prop-types'

import BattleController from '../components/BattleController'

function Battle(props) {
    console.log(props.currHero);
    console.log('opponent --> ', props.opponent);
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
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '900px'
        }
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Battle page</h1>
            <div style={styles.main}>
                <img src="/Ermac_max.png" height="400px"/>
            </div>
            <BattleController/>
        </div> 
    );
}

Battle.propTypes = {
    currHero: PropTypes.object,
    opponent: PropTypes.object
}

export default Battle