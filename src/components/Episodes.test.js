import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

test("Episodes renders with selected season", ()=>{
    render(<Episodes episodes={[]} />);
  
});

test("Renders Episodes with images", ()=>{
    const mockData = [{}];
    const {rerender} = render(<Episodes episodes={[]} />);
})