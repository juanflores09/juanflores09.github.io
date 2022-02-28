document.getElementById('btn-modal').addEventListener('click',()=>{
    
    document.getElementById('modal').style.display="flex";
    document.getElementById('darken').style.display="block";
    new Glider(document.querySelector('.carousel__lista2'),{
        slidesToShow: 1,
        slidesToScroll:1,
        draggable: true,
        dots: '.carousel__indicadores2',
        arrows:{
            prev: '.carousel__anterior2',
            next: '.carousel__siguiente2'
        }
    });
})

document.getElementById('darken').addEventListener('click',()=>{
    document.getElementById('modal').style.display="none";
    document.getElementById('darken').style.display="none";
})
document.getElementById('close').addEventListener('click',()=>{
    document.getElementById('modal').style.display="none";
    document.getElementById('darken').style.display="none";
})

document.getElementById('btn-modal3').addEventListener('click',()=>{
    document.getElementById('modal3').style.display="flex";
    document.getElementById('darken').style.display="block";
    new Glider(document.querySelector('.carousel__lista2'),{
        slidesToShow: 1,
        slidesToScroll:1,
        draggable: true,
        dots: '.carousel__indicadores2',
        arrows:{
            prev: '.carousel__anterior2',
            next: '.carousel__siguiente2'
        }
    });
})