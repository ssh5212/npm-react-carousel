import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Slide {
    image: string;
    url: string;
}

interface CarouselProps {
    slides: Slide[];
    speed?: number;
    type?: 'contain' | 'cover';
}

const StyledCarouselOuter = styled.div`
    margin: auto;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    padding-bottom: var(--division-height);
`;

const StyledCarouselBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
`;

const StyledCarousel = styled.div`
    width: 100%;
    display: flex;
    transition: transform 0.5s ease-in-out;
`;

const StyledCarouselCell = styled.div`
    flex: 0 0 100%;
    &:hover {
        cursor: pointer;
    }
`;

const StyledCarouselImg = styled.img<{ type: string }>`
    width: 100%;
    height: 100%;
    object-fit: ${props => props.type};
`;

const StyledPrevButton = styled.div`
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    cursor: pointer;
`;

const StyledNextButton = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
`;

const StyledCarouselIcon = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    padding: 7px;
    color: white;
    font-size: 25px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 3px;
        color: white;
    }
`;

const Carousel: React.FC<CarouselProps> = ({ slides, speed = 5000, type = 'cover' }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [carouselWidth, setCarouselWidth] = useState<number>(0);

    const carouselOuterRef = useRef<HTMLDivElement>(null);

    const handlePrevClick = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
        setCurrentSlide(prevSlide => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const handleResize = () => {
        if (carouselOuterRef.current) {
            setCarouselWidth(carouselOuterRef.current.offsetWidth);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNextClick();
        }, speed);

        return () => clearInterval(intervalId);
    }, [currentSlide, speed]);

    const handleSlideClick = (url: string) => {
        window.location.href = url;
    };

    return (
        <StyledCarouselOuter ref={carouselOuterRef}>
            <StyledCarouselBody>
                <StyledCarousel style={{ transform: `translateX(-${currentSlide * carouselWidth}px)` }}>
                    {slides.map((slide, index) => (
                        <StyledCarouselCell key={index} onClick={() => handleSlideClick(slide.url)}>
                            <StyledCarouselImg src={slide.image} alt={`carousel${index + 1}`} type={type} />
                        </StyledCarouselCell>
                    ))}
                </StyledCarousel>
            </StyledCarouselBody>
            <StyledPrevButton onClick={handlePrevClick}>
                <StyledCarouselIcon>
                    <FaChevronLeft />
                </StyledCarouselIcon>
            </StyledPrevButton>
            <StyledNextButton onClick={handleNextClick}>
                <StyledCarouselIcon>
                    <FaChevronRight />
                </StyledCarouselIcon>
            </StyledNextButton>
        </StyledCarouselOuter>
    );
};

export default Carousel;
