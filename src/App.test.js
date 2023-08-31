import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receieve a new user and show it on a list', async  () => {
    render(<App />);

    const nameInput = screen.getByRole('textbox', {
        name: /name/i
    });
    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });
    const button = screen.getByRole('button', { name: /add user/i })
    console.log(button);
    user.click(nameInput);
    user.keyboard('jane');
    user.click(emailInput);
    user.keyboard('jane@jane.com');
    user.click(button);

    const name = await screen.findByRole('cell', {name: 'jane'});
    const email = await screen.findByRole('cell', {name: 'jane@jane.com'});


    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();

});
