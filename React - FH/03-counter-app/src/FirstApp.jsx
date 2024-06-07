import React from 'react'
import PropTypes from 'prop-types';


const newMessage = {
    message:'Hola mundo',
    title:'Jaime'
};

function saludo(saludo){
    return saludo
}

const newArray = [1,2,3,4,5,6,7,8,9]

export const FirstApp = ({title,subTitle,name}) => {

    
    return (
        <>
            <div data-testid="test-title">{title}</div>
            <h1>{subTitle}</h1>
            <h1>{name}</h1>
        </>

    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle:PropTypes.string,
    name:PropTypes.string


}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle:'No hay subtitutlo',
    // name:'Jaime Silva'

}