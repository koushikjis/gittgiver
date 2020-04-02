import React from 'react'
import App from './App'

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

const app = shallow(<App />)

it ('renders correctly', () => {
    expect(app).toMatchSnapshot();
})