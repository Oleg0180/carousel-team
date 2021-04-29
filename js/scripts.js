
    let position = 0;
    const slidesToShow = 4;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider-container');
    const track = document.querySelector('.slider-track');
    //const item = document.querySelector('.slider-item');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const items = document.querySelector('.slider-item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((items) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener('click', () => {
        const itemLeft = itemsCount - (Math.abd(position) + slidesToShow * itemWidth) / itemWidth;

        position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkBtns(); 
    });

    btnPrev.addEventListener('click', () => {
        const itemLeft = itemsCount - (Math.abd(position) + slidesToShow * itemWidth) / itemWidth;

        position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;

        setPosition();
        checkBtns(); 
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    checkBtns();