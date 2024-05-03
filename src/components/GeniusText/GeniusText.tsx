import React from 'react';

type Props = {
    children: any;
    component?: React.ElementType<any>;
}

export default function GeniusText({children, component: Component = 'p'} : Props) {
  return <Component>&lt; {children} &gt;</Component>
}
