import requestAnimationFrame from './tempPolyfills'

import { shallow, configure } from 'enzyme';
import * as  Adapter from 'enzyme-adapter-react-16'


configure({ adapter: new Adapter(), disableLifecycleMethods: true})