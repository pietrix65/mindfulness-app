import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
   
    constructor() {

        super();

        this.state = {
            sections: [{
                titulo: 'Evitar juicios',
                imgageUrl: 'https://i.ibb.co/09vvr7W/Webp-net-resizeimage-7.jpg',
                id: 1
            },
            
            {
                titulo: 'Paciencia',
                imgageUrl: 'https://i.ibb.co/PGzkBsW/Webp-net-resizeimage.jpg',
                id: 2
            },
            {
                titulo: 'Mente Principiante',
                imgageUrl: 'https://i.ibb.co/hfVPyQQ/Webp-net-resizeimage-5.jpg',
                id: 3
            },
            {
                titulo: 'Confianza',
                imgageUrl: 'https://i.ibb.co/GsRfnN8/Webp-net-resizeimage-2.jpg',
                id: 4
            },
            {
                titulo: 'Evitar Forzar',
                imgageUrl: 'https://i.ibb.co/McyfyVR/Webp-net-resizeimage-4.jpg',
                id: 5
            },
            {
                titulo: 'Aceptación',
                imgageUrl: 'https://i.ibb.co/Sd2JzfX/Webp-net-resizeimage-6.jpg',
                id: 6
            },
            
            {
                titulo: 'Dejar Ir',
                imgageUrl: 'https://i.ibb.co/9cQ5SQP/Webp-net-resizeimage-3.jpg',
                size: 'large',
                id: 7
            }
            
            
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({titulo,imgageUrl,id , size}) => (
                        <MenuItem key={id} title={titulo}  imageUrl={imgageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;