import React from 'react';

function ButtonLink(props){
    // props => { className: "o que alguém passar", href: "/"}
    return(
        <a className={props.className} href={props.href}>
            Novo Vídeo
        </a>
    );
}

export default ButtonLink;