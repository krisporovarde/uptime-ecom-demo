import { render, screen } from '@testing-library/react';
import wait from 'waait';
import CartCount from '../components/CartCount';

describe('<CartCount/>', () => {
  it('Renders', () => {
    render(<CartCount count={10} />);
  });

  it('Matches snapshot', () => {
    const { container } = render(<CartCount count={10} />);
  });

  it('updates via props', async () => {
    const { container, rerender, debug } = render(<CartCount count={11} />);
    expect(container).toHaveTextContent('11');

    rerender(<CartCount count={12} />);

    await wait(400);
    expect(container).toHaveTextContent('12');
    // debug();
    expect(container).toMatchSnapshot();
  });
});
