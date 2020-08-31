import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faGamepad, 
    faDice, 
    faGhost,
    faPuzzlePiece,
    faHeart,
    faHeadset
} from '@fortawesome/free-solid-svg-icons'


function BattleController() {

    const styles = {
        container: {
            width: '240px',
            height: '40px',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            background: '#3baf32',
            borderRadius: '5px',
            boxSizing: 'border-box'
        },
        item: {
            height: '35px',
            width: '35px',
            background: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px'
        },
        hide: {
            position: 'absolute',
            opacity: '0'
        }
    }

    function chooseButton(e) {
        if(e.key === 'KeyQ') {
            alert('q')
            // e.target.background = 'red';
        }
    }

    return (
        <div style={styles.container}>
            <input style={styles.hide} id="b_1" type="radio" name="buttonController" autoFocus/>
            <input style={styles.hide} id="b_2" type="radio" name="buttonController"/>
            <input style={styles.hide} id="b_3" type="radio" name="buttonController"/>
            <input style={styles.hide} id="b_4" type="radio" name="buttonController"/>
            <input style={styles.hide} id="b_5" type="radio" name="buttonController"/>
            <input style={styles.hide} id="b_6" type="radio" name="buttonController"/>
            <label htmlFor="b_1" id="icon_1" style={styles.item}>
                <FontAwesomeIcon icon={faGhost} size="lg" onKeyPress={chooseButton}/>
            </label>
            <label htmlFor="b_2" id="icon_2" style={styles.item}>
                <FontAwesomeIcon icon={faGamepad} size="lg" onKeyPress={chooseButton}/>
            </label>
            <label htmlFor="b_3" id="icon_3" style={styles.item}>
                <FontAwesomeIcon icon={faDice} size="lg" onKeyPress={chooseButton}/>
            </label>
            <label htmlFor="b_4" id="icon_4" style={styles.item}>
                <FontAwesomeIcon icon={faPuzzlePiece} size="lg" onKeyPress={chooseButton}/>
            </label>
            <label htmlFor="b_5" id="icon_5" style={styles.item}>
                <FontAwesomeIcon icon={faHeart} size="lg" onKeyPress={chooseButton}/>
            </label>
            <label htmlFor="b_6" id="icon_6" style={styles.item}>
                <FontAwesomeIcon icon={faHeadset} size="lg" onKeyPress={chooseButton}/>
            </label>
        </div> 
    );
}

export default BattleController