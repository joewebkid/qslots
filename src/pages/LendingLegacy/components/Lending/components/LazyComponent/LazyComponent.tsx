import React, { FC, memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

interface ImageProps {
    className?: string,
    src?: string,
    wrapperClassName?: string,
}
export const LazyImage: FC<ImageProps> = memo((props) => (
    <LazyLoadImage effect="opacity" {...props} />
));

export const Image: FC<ImageProps> = memo((props) => <img {...props} alt="" />);
