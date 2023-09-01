import { render, screen, within } from '@testing-library/react';
import FormData from './FormData';
import toContainRole from './matchers/toContainRole';

expect.extend({ toContainRole });

function renderComponent() {
    render(<FormData />)
};

test('the test form displays two buttons', () => {
    renderComponent();
    const form = screen.getByRole('form');
    // const buttons = within(form).getAllByRole('button');
    // expect(buttons).toHaveLength(2);

    expect(form).toContainRole('button', 2);
});