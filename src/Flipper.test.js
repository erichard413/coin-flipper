import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Flipper from './Flipper';
import Coin from './Coin';
import heads from "./heads.png";
import tails from "./tails.png";

let testCoin = <Coin side={heads} alt={heads} />

it('should render without error', ()=> {
    render(<Flipper />)
})

it('should not display coin', ()=> {
    const {container} = render(<App />);
    expect(container.querySelector('.Coin')).not.toBeInDocument;
})
it('should display coin', ()=> {
    const {container} = render(<App />);
    const btn = container.querySelector('.Flipper-btn');
    fireEvent.click(btn);
    expect(container.querySelector('.Coin')).toBeInDocument;
})
it('should update flip counter', ()=> {
    const {container} = render(<App />);
    const btn = container.querySelector('.Flipper-btn');
    fireEvent.click(btn);
    const resultP = container.querySelector('.Flipper-Counts');
    expect("Out of 1 flips").toBeInDocument;
})