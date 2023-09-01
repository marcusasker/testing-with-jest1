import { within } from '@testing-library/react';


function toContainRole(container, role, quantity = 1) {

    const elements = within(container).queryAllByRole(role);

    if (elements.length === quantity) {
        return {
            pass: true
        };
    }
    return {
        pass: false,
        message: () => `expected to find ${quantity} ${role} elements. Found ${elements.length}`
    }
}

export default toContainRole;